const {test, expect} = require('@playwright/test')

test("First test case", async function({browser}){
    // To create a browserContext
    const context  = await browser.newContext() // browserContext
    const page = await context.newPage()
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student") // pressSequentially() - student
    await page.locator("input#password").fill("Password123")
    await page.locator("button#submit").click()
})


test("First test case1", async function({page}){
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    await page.locator("input#password").fill("Password123")
    await page.locator("button#submit").click()

})

