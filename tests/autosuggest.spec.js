import {test, expect} from "@playwright/test";

test.use({viewport:{height:860, width:640}});

test("auto suggest", async ({page}) => {
    await page.goto("https://www.google.com");
    await page.locator("#ti6dpd").fill("github");
    await page.waitForSelector('//li[@role="presentation"]');
    const options = await page.$$('//li[@role="presentation"]');
    let clicked = false;
    let clickedText = "";
    for(let i=0; i<options.length; i++)
    {
        const value = await options[i].textContent();
        if(value?.toLowerCase().includes("desktop")){
            clickedText = value.trim();
            await options[i].click();
            clicked = true;
            break;
        }
    }
    expect(clicked, `github desktop option not found in suggestions`).toBeTruthy();
    // verify navigation to github desktop results page
    // Note: only URL is stable - Google shows CAPTCHA/title quirks under automation
    await expect(page).toHaveURL(/.*search.*github.*desktop.*/i, { timeout: 100000 });

});