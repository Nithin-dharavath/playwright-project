import { expect } from "@playwright/test";

class HomePage{
    constructor(page){
        this.page = page;
        this.cart = "//button[normalize-space()='Cart']"
        this.menu = this.page.locator("//img[@alt='menu']");
        this.signout ="//button[normalize-space()='Sign out']"
    }

    async homepagelogout(){
        await this.menu.click();
        await this.page.click(this.signout);
    }

    async homepage_verification(){
        await expect(this.page.locator(this.cart)).toBeVisible();
    }
}

export default HomePage;