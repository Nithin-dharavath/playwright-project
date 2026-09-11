import {test} from "@playwright/test";
import LoginPage from "../page/login";
import HomePage from "../page/homepage";
import testdata from "../test_data.json" with {type: "json"};

test("login appliaction using the POM", async ({page}) => {

    await page.goto("/login");

    const login_page = new LoginPage(page);
    const home_page = new HomePage(page);

    await login_page.login_verification();
    await login_page.login_application(testdata.name, testdata.password);

    await home_page.homepage_verification();
    await home_page.homepagelogout();

    await login_page.login_verification();

})