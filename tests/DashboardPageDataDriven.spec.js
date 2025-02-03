const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const {DashboardPage} = require('../pages/DashboardPage');

const datas = require('../TestData/dataDriven.json')
//console.log(datas);

let loginPage
let dashboardPage
test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);
})

for(let data of datas){
test(`Add a product to the cart ${data.productName}`, async ()=>{
    await loginPage.launchURL(data.url); 
    await loginPage.validLogin(data.username, data.password)
    await expect(loginPage.homePageIndetifier).toBeVisible()
    await dashboardPage.searchAndAddProductToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toContainText('Product Added To Cart')
})
}


test.skip("test data", async ()=>{
    const array = 
    [
        {
          url: 'https://rahulshettyacademy.com/client',
          username: 'test7lYM@gmail.com',
          password: 'Test@123',
          productName: 'IPHONE 13 PRO'
        },
        {
          url: 'https://rahulshettyacademy.com/client',
          username: 'test7lYM@gmail.com',
          password: 'Test@123',
          productName: 'qwerty'
        },
        {
          url: 'https://rahulshettyacademy.com/client',
          username: 'test7lYM@gmail.com',
          password: 'Test@123',
          productName: 'Banarsi Saree'
        },
        {
          url: 'https://rahulshettyacademy.com/client',
          username: 'testnHNk@gmail.com',
          password: 'Testing@1234',
          productName: 'LG Refrigerator'
        }
    ]

    //console.log(array[0].url);

    for (let data of array){
        console.log(data.productName);
    }
})



