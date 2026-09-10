import {test, expect} from "@playwright/test";

const url = "https://www.google.com"

test("keyword test implementation", async ({page}) => {
    await page.goto(url);
    await page.locator("//textarea[@id='ti6dpd']").focus();
    await page.keyboard.type("nithin dharavath software");
    // await page.keyboard.press("Arrowleft")
    await page.keyboard.down("Shift")
    for(let i = 0; i<"software".length; i++){
        await page.keyboard.press("Backspace")
    }
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
    await page.keyboard.type("its working")
})