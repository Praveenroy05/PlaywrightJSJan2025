const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Constant } = require('../pages/Constants');

let loginPage
let constantPage
test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    constantPage = new Constant(page)
    await loginPage.launchURL(constantPage.url)
})

test('Valid login test', {tag: '@smoke'}, async ()=>{
    await loginPage.validLogin(constantPage.username, constantPage.password)
    await expect(loginPage.homePageIndetifier).toBeVisible()
})

test('Invalid login test', {tag: ['@smoke','@regression']}, async ()=>{
    await loginPage.invalidLogin(constantPage.username, constantPage.incorrectPassword)
    await expect(loginPage.loginErrorMessage).toContainText(constantPage.errorMessage)
})

