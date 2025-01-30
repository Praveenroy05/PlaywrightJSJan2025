const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const incorrectPassword = "Test@1234"
const errorMessage = "Incorrect email or password."

test('Valid login test', {tag: '@smoke'}, async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, password)
    await expect(loginPage.homePageIndetifier).toBeVisible()
})

test('Invalid login test', {tag: ['@smoke','@regression']}, async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.validLogin(username, incorrectPassword)
    await expect(loginPage.loginErrorMessage).toContainText(errorMessage)
})

