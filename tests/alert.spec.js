import {test, expect} from "@playwright/test";

test.use({viewport:{height:600, width:830}});

const alert_url = "https://the-internet.herokuapp.com/javascript_alerts";

test("alert capture", async ({page}) => {
    await page.goto(alert_url);

    page.on("dialog", async (d) => {
        expect(d.type()).toContain("alert");
        expect(d.message()).toContain("I am a JS Alert");
        await d.accept();
    });

    await page.getByRole("button", {name:"Click for JS Alert"}).click();
});


test.afterAll("test for confirm", async ({page}) => {
    await page.goto(alert_url);

    page.on("dialog", async (confirm_) => {
        expect(confirm_.type()).toContain("Confirm");
        expect(confirm_.message()).toContain("I am a JS Confirm");
        await confirm_.dismiss();
    });

    await page.getByRole("button", {name:"Click for JS Confirm"}).click();
});


test.afterEach("test for prompt", async ({page}) => {
    await page.goto(alert_url);
    page.on("dialog", async (prompt_) => {
        expect(prompt_.type()).toContain("prompt");
        expect(prompt_.message()).toContain("I am a JS prompt");
        await prompt_.accept("Nithin")
    });

    await page.getByRole("button", {name:"Click for JS Prompt"}).click();
});