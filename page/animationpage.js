class AnimationHomepage {

    constructor(page) {
        this.page = page;

        this.loader = page.locator("#loadingAnimation");
        this.mydreams = page.locator("#dreamButton");
    }

    async openWebsite() {
        await this.page.goto("");
    }

    async loaderDisappear() {
        await this.loader.waitFor({
            state: "hidden"
        });
    }

}

export default AnimationHomepage;