import { test, expect } from "@playwright/test";

const tab_url = "https://freelance-learn-automation.vercel.app/login";

test("multiple tabs", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(tab_url);

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//*[name()='svg'][@id='Layer_1'])[3]").click()
    ]);

    await newPage.locator("//input[@id='_r_f_']").fill("nithin@gmail.com");
});