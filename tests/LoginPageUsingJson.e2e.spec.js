const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');

const data = require('../TestData/loginData.json')


let loginPage
test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
})

test('Valid login test', {tag: '@smoke'}, async ()=>{
    await loginPage.validLogin(data.username, data.password)
    await expect(loginPage.homePageIndetifier).toBeVisible()
})

test('Invalid login test', {tag: ['@smoke','@regression']}, async ()=>{
    await loginPage.invalidLogin(data.username, data.incorrectPassword)
    await expect(loginPage.loginErrorMessage).toContainText(data.errorMessage)
})

