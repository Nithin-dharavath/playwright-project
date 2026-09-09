import {test, expect} from "@playwright/test";

const base_url = "https://freelance-learn-automation.vercel.app/login";

test("hover testing", async ({page}) => {
    await page.goto(base_url);
    await page.getByPlaceholder("Enter Email").fill("admin@email.com", {delay:5000});
    await page.locator("#password1").fill("admin@123", {delay:3000});
    await page.getByRole("button", {name: "Sign in"}).click();
    // await expect(page).toBe(/cart/i);

    await page.waitForTimeout(3000);

    await page.locator("//span[text()='Manage']").hover();
    await page.locator("//a[normalize-space()='Manage Categories']").click();
    // await page.locator("//body[1]/div[1]/div[1]/div[2]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[2]/button[1]").click();
    // await page.getByRole("button", {name:"Delete"}).click();

    // await page.waitForTimeout(3000);

    await page.getByAltText("menu").click();
    await page.locator("button[class='nav-menu-item']").click();
    await expect(page).toHaveURL(/login/i);

    await page.waitForTimeout(2000);
});