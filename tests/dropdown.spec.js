import {test, expect} from "@playwright/test";

const drop_url = "https://freelance-learn-automation.vercel.app/signup";

test("dropdown testing", async ({page}) => {
    await page.goto(drop_url);
    await page.locator("#state").selectOption({label:"Goa"});
    await page.locator("#state").selectOption({value:"Assam"});
    let ele_value =  await page.locator("#state").textContent();
    expect(ele_value.includes("Kerala")).toBeTruthy();
});

test("dropdown using loop", async ({page}) => {
    let option = await page.$$("option");
    let dd = false
    for (let i = 0; i < option.length; i++)
    {
        let allselect = option[i];
        let value = await allselect.textContent();
        if(value.includes("Assam"))
        {
            dd = true;
            break;
        }
        expect(dd).toBeTruthy();
    }
});