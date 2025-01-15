// Drop Down
// 2 Types of DD
// 1. Static DD - THe value might not never get changes
// 2. Dynamic DD - The keeps of changing

// <select></select>
// non-select tag - div, span, li, ul


// 1. DD developed using select tag -  
// Step by step -

// locate the drop down element
// get the options of the DD - selectOption("value, {label, index, name})

// 2. DD deveoped using non-select tag
// Step by step -
// locate the DD element and click on that DD to open the DD elements
// Click on the element that we are trying to select from the DD



const {test, expect} = require('@playwright/test')
const { parseEnv } = require('util')

test('drop dwon developed using select tag handling', async function({page}){

    await page.goto("https://practice.expandtesting.com/dropdown")
    // locate the drop down element - selectOption()
    await page.locator("#country").selectOption("AL")
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({value:'BZ'})
    await page.waitForTimeout(2000)

    await page.locator("#country").selectOption({label:'Luxembourg'})
    await page.waitForTimeout(2000)

    await page.locator("#country").selectOption({index:1})
    await page.waitForTimeout(2000)

    await  page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(['volvo', 'saab', 'Audi'])
    await page.waitForTimeout(2000)
})

test.only('drop down developed using non-select tag handling', async function({page}){
    await page.goto("https://demoqa.com/select-menu")

    await page.locator(".css-1hwfws3").nth(1).click()
    await page.getByText('Ms.').click()
    await page.waitForTimeout(2000)

    await page.locator(".css-1hwfws3").last().click()
    const count = await page.locator(".css-11unzgr div").count()
    console.log(count)
    
    await page.locator("#react-select-4-option-0").click()

    await page.locator("#react-select-4-option-3").click()
    await page.waitForTimeout(2000)


    
})