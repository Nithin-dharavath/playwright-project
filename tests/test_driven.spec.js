import {test, expect} from "@playwright/test";
import users_data from "../test_data.json" with {type:"json"};

test.describe("goup of test", () => {
    for(const data of users_data)
    {
        test.describe(`test of login appliaction ${data.id}`, () => {
            test("login appplication", async ({page}) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.locator("#email1").fill(data.name);
                await page.getByPlaceholder("Enter Password").fill(data.password);
            })
        })
    }
});