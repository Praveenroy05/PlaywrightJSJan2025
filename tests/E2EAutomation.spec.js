const {test, expect} = require('@playwright/test')


const url = "https://rahulshettyacademy.com/client"
const username = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "LG Refrigerator"


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

   await page.waitForTimeout(5000)






    
})