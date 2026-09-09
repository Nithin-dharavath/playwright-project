import {test, expect} from "@playwright/test";

const drop_url = "https://freelance-learn-automation.vercel.app/signup";

test("dropdown testing", async ({page}) => {
    await page.goto(drop_url);
    await page.locator("#state").selectOption({label:"Goa"});
    await page.locator("#state").selectOption({value:"Assam"});
    let ele_value =  await page.locator("#state").textContent();
    expect(ele_value.includes("Kerala")).toBeTruthy();
});


test.skip("loop dropdown", async ({page}) => {
    await page.goto(drop_url);
    const alloptions = page.locator("#state option");
    let drop_down = false;
    for(let i = 0; i < await alloptions.count(); i++){
        const element = alloptions.nth(i);
        let value = await element.textContent();
        console.log("values in dropdown + ", value);
        if(value?.includes("Goa")){
            drop_down = true;
            break
        }
    }
    expect(drop_down).toBeTruthy();
})


test("multiple select", async ({page}) => {
    await page.goto(drop_url);
    await page.locator("#hobbies").selectOption(["swimmming", "playing"]);
    page.waitForTimeout(4000);
})