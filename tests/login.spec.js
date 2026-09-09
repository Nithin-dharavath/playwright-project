import {test, expect} from "@playwright/test";

const website_url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

test.use({viewport:{width:1400, height:900}});


test("login testing", async ({page}) => {
    await page.goto(website_url);
    console.log(await page.title());
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole("button", {name:"Login"}).click();
    await expect(page).toHaveURL(/index/i);
})

test("logout testing", async ({page}) => {
    await page.goto(website_url);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {name:"Login"}).click();
    await page.locator(".oxd-userdropdown-img").click();
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/i)
})