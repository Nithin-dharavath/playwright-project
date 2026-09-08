import {test, expect} from "@playwright/test";

const websites_url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test("invalid password/username", async ({page}) => {
    await page.goto(websites_url);
    await page.getByPlaceholder("Username").fill("Admin", {delay:200});
    await page.getByPlaceholder("Password").fill("admin155", {delay:100});
    await page.getByRole("button", {name:"Login"}).click();
    const repsonse_message = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();
    console.log("error output = " +repsonse_message);
    expect(repsonse_message==="Invalid credentials").toBeTruthy();
});