import {test, expect} from "@playwright/test";

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

test("login testing", async ({page}) => {
    await page.goto(url);
    await console.log(page.title());
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:"Login"}).click();
    await page.waitForTimeout(6000);
    await expect(page).toHaveURL(/index/i);
})

test("logout testing", async ({page}) => {
    await page.goto(url);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {name:"Login"}).click();
    await page.locator(".oxd-userdropdown-img").click();
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/i)
})