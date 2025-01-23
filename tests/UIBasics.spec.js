// How do we make the locator unique
// Input field - type 
// click on an element
// How do we handle radio, checkbox
// How do we get the text value from an element
// assertion for radio,  checkbox, element is displayed on the page

// import test and except function from playwright/test module
// test() - Will help in writing the test cases in PW
// expect() - Will help in asserting the expected result

const {test, expect} = require('@playwright/test')

test('UI Basic validation', async function({page}){
 // Launch the url - goto('url')
    await page.goto('https://demoqa.com/automation-practice-form')
// locators(selector) 
// fill('string')
 await expect(page.getByText('Name')).toBeVisible();
 await expect(page.locator("#userName-label")).toBeVisible() // label
 await page.getByPlaceholder('First Name').fill('Test')
 await expect(page.getByPlaceholder('First Name')).toHaveValue('Test')
 await page.getByPlaceholder('Last Name').fill("Testing")
 await expect(page.getByPlaceholder('Last Name')).toHaveValue("Testing")
 await page.locator("#userEmail").fill('name@example.com')
 await expect(page.locator("#userEmail")).toHaveValue('name@example.com')
 await page.locator("#gender-radio-2").click({force:true})
 await expect(page.locator("#gender-radio-2")).toBeChecked()
 // textContent() - 
 // allTextContents() - Return the text value from all the matcing elements inside an array
 const femaleTextValue = await page.locator("[for='gender-radio-2']").textContent()
 console.log(femaleTextValue)
 await expect(femaleTextValue).toBe('Female')
 await page.getByPlaceholder('Mobile Number').fill('0000000000')
 await page.locator(".subjects-auto-complete__value-container").click()
 await page.locator(".subjects-auto-complete__value-container").pressSequentially('Maths')

 await page.getByText('Maths').nth(3).click()
 await page.getByLabel('Sports').click({force:true})
 await expect(page.getByLabel('Sports')).toBeChecked()
 await page.getByPlaceholder('Current Address').fill("India")
 await page.locator("#submit").click()
 await expect(page.locator("#example-modal-sizes-title-lg")).toContainText('Thanks for submitting the form')

 page.setViewportSize({ width: 1280, height: 720 })


 // Radio/ Checkbox - 
 // click()
 // check()









// first() - Returns locator to the first matching element.
// nth(index) - Returns locator to the n-th matching element. It's zero based, nth(0) selects the first element.
// last() - Returns locator to the last matching element

  // await page.locator('div.col-md-4 input').first().fill('Test')







})