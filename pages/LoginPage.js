class LoginPage {

    // locators & Methods related to login page functionality
    constructor(page){
        this.page = page // page fixture that is coming from test class
        this.username = this.page.getByPlaceholder('email@example.com')
        this.password = this.page.getByPlaceholder('enter your passsword')
        this.loginBtn = this.page.locator("#login")
        this.loginErrorMessage = this.page.locator("#toast-container")
        this.homePageIndetifier = this.page.locator("[routerlink='/dashboard/']")
    }

    async launchURL(url){
        await this.page.goto(url)
    }

    async validLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async invalidLogin(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}
module.exports = {LoginPage}