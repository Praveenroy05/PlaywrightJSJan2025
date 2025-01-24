const {test, expect} = require('@playwright/test')

test('Shadow dom elements handling', async ({page})=>{
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator("#input").fill("Testing")
    await page.locator('.icon').click()
    await expect(page.locator('h2.title').first()).toContainText("Testing")
})