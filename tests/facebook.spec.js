import {test, expect} from '@playwright/test';

test("title of the appliaction", async ({page}) => {
    await page.goto("https://www.facebook.com/");
    const title = await page.title();
    console.log("page title =", title);
    await expect(page).toHaveTitle(/facebook/i);
});