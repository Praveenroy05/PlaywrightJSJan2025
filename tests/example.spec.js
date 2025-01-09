// @ts-check

const { test, expect } = require('@playwright/test');

test('has title',  async ({ page }) => {

   await page.goto('https://playwright.dev/');
   await expect(page).toHaveTitle(/Playwright/);
   await console.log("Test Completed");

   // 30 seconds

 // async - await

});


