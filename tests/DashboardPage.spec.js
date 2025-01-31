const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const {DashboardPage} = require('../pages/DashboardPage');
const { Constant } = require('../pages/Constants');

let loginPage
let dashboardPage
let constant
test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
  constant = new Constant(page)
  await loginPage.launchURL(constant.url); 
  await loginPage.validLogin(constant.username, constant.password)
})


test('Add a product to the cart', async ()=>{
    await expect(loginPage.homePageIndetifier).toBeVisible()
    await dashboardPage.searchAndAddProductToCart(constant.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText('Product Added To Cart')
})



