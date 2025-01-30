// codegen
// To open the code generation tool - npx playwright codegen
// npx playwright codegen "url"

const {test, expect} = require('@playwright/test')

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
  await expect(page.locator('h2')).toContainText('Test login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await expect(page.getByLabel('Username')).toHaveValue('student');
  await expect(page.getByLabel('Password')).toHaveValue('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('heading', { name: 'Test login' })).toBeVisible();
});

test.only('Window handlings', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.locator('#bindings')).toContainText('WebDriver Language Bindings');
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByPlaceholder('Email id for Sign Up')).toBeVisible();
});

