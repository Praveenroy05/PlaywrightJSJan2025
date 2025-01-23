const {test, expect} = require('@playwright/test')


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "LG Refrigerator"
const country = ' Singapore'


test('End to end product order validation', async ({page})=>{
    await page.goto(url)
    await page.getByPlaceholder('email@example.com').fill(username)
    await page.getByPlaceholder('enter your passsword').fill(password)
    await page.locator("#login").click()
    await expect(page.locator("[routerlink='/dashboard/']")).toBeVisible()
    const products= page.locator("div.card-body") // div.card-body b

  //locator chaining
  //allTextContents() - Which return the text value of all the matching elements inside an array as string
    // const productsName = await products.locator("b").allTextContents() //div.card-body b
    // console.log(productsName)




    // count() - 
   const count = await products.count() //count
   for(let i=0; i<count; i++){ // i=0
    const productText = await products.nth(i).locator("b").textContent()
    //console.log(productText);

    if(productText === productName){
      await products.nth(i).locator("button").last().click();
      break;
    }

   }
   await expect(page.locator("#toast-container")).toContainText('Product Added To')

   await page.locator("[routerlink='/dashboard/cart']").click()
   await page.getByText('Checkout').click()
   await expect(page.locator(".user__name label")).toHaveText(username)

   await page.getByPlaceholder('Select Country').pressSequentially("in")
   await page.locator("section.ta-results").waitFor()

   const dropDownValues = page.locator("section.ta-results button")

   const countryCount  = await dropDownValues.count() //37

  for(let i=0; i<countryCount; i++) {
    const counutryText = await dropDownValues.nth(i).textContent()

    if(counutryText === country){
      await dropDownValues.nth(i).click()
      break;
    }
  }

  await page.getByText('Place Order ').click()
  await expect(page.locator('.hero-primary')).toBeVisible()
  const orderID = await page.locator("td.em-spacer-1 label").last().textContent()
  console.log(orderID);

  await page.locator("[routerlink='/dashboard/myorders']").click()
  await expect(page.locator(".container h1")).toBeVisible()

  


})