const {test, expect} = require('@playwright/test')

// popup - page
// page - context

test('window handling by page fixture', async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1 =  page.waitForEvent('popup')

    await page.getByRole('button', {name :'click'}).click() 

    const newPage = await page1
    await newPage.getByText('Downloads').click()
    await expect(newPage.getByText('Selenium Clients and WebDriver Language Bindings')).toBeVisible()

    await page.getByText('Home').click()
    await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible()

})

test('window handling by browser fixture', async ({browser})=>{

    const context = await browser.newContext() 
    const page = await context.newPage();

    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1 =  context.waitForEvent('page')

    await page.getByRole('button', {name :'click'}).click() 

    const newPage = await page1
    await newPage.getByText('Downloads').click()
    await expect(newPage.getByText('Selenium Clients and WebDriver Language Bindings')).toBeVisible()

    await page.getByText('Home').click()
    await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible()

})