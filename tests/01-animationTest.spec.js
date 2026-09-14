import { test, expect } from "@playwright/test";
import AnimationHomepage from "../page/animationpage";

test.describe("Loading Animation", () => {

    test("Loader disappears after 3 seconds", async ({ page }) => {

        const homepage = new AnimationHomepage(page);

        await test.step("Navigate to website", async () => {
            await homepage.openWebsite();
        });

        await test.step("Verify loading animation is displayed", async () => {
            await expect(homepage.loader).toBeVisible();
        });

        await test.step("Verify loading animation disappears", async () => {
            await expect(homepage.loader).toBeHidden({
                timeout: 3000
            });
        });

        await test.step("my dream button visiblity", async () => {
            await expect(homepage.mydreams).toBeVisible();
        });

    });

});

test.describe("newtab view ", () => {
    test("verification of my dream button - new tab", async ({browser}) => {

        test.step("dreams-diary verification", async () => {
        
            const context = await browser.newContext();
            const page = await context.newPage();

            const [newPage] = await Promise.all([
                context.waitForEvent("page"),
                page.mydreams.click()
            ]);

        })

    })
});