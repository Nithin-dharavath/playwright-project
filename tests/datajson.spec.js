import {test, expect} from "@playwright/test";

import testdata from "../test_data.json" with {type:"json"};

test("json structure test", async ({page}) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.getByPlaceholder("name").fill(testdata.name);
    await page.locator("#email").fill(testdata.email);
    await page.locator("#password").fill(testdata.password);
    await page.pause();
});