// Frames

// launch the url - original
// Actions on the main page - page.locator()
// Write the locator to identify iframe - const frames = page.frameLocator()
// frames to identify the elements inside the frame element


const {test, expect} = require('@playwright/test')


test('Frames Handling', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption1").click()
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByText('All Access plan', {exact :true}).first().click()

    await expect(framePage.locator('div.inner-box')).toContainText("All Access Subscription")
    await page.waitForTimeout(3000)
    await page.locator('.btn-primary').first().click()
    await page.waitForTimeout(3000)
})