import {expect} from "@playwright/test"; 

class LoginPage
{
    constructor(page)
    {
        this.page=page;
        this.header="//h2[normalize-space()='Sign In']";
        this.email="#email1";
        this.password="#password1";
        this.loginbutton=this.page.getByRole("button", {name:"Sign in"});
    }

    async login_application(user, password) 
    {
        await this.page.fill(this.email, user);
        await this.page.fill(this.password, password);
        await this.loginbutton.click();
    }

    async login_verification()
    {
        await expect(this.page.locator(this.header)).toBeVisible();
    }

}

export default LoginPage;