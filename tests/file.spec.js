import {test, expect} from "@playwright/test";

const base_url = "https://the-internet.herokuapp.com/upload";


test('fileuppload testing', async ({page}) => {
    await page.goto(base_url);
    await page.locator("#file-upload").setInputFiles("/Users/Nitin/Desktop/projects/playwright-project/uploads/file_demo.png");
    await page.getByRole("button", {name:"Upload"}).click();
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");
});