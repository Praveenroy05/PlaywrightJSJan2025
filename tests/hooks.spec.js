// Hooks - 

// beforeAll() - Runs a function before all tests in a test suite.
// beforeEach() - Runs a function before each test in a test suite.
// test()
// afterEach() - Runs a function after each test in a test suite.
// afterAll() - Runs a function after all tests in a test suite.

const {test, expect} = require('@playwright/test')

test.beforeAll(async () => {
  // Setup code here
  console.log('Before all tests')
})

test.beforeEach(async () => {
  // Code to run before each test
  console.log('Before each test')
})

test('Test1', async ({page})=>{
    await page.goto("https://www.google.com")
    console.log("Test1");
})

test('Test2', async ({page})=>{
    await page.goto("https://bookcart.azurewebsites.net/")
    console.log("Test2");

})

test('Test3', async ({page})=>{
    await page.goto("https://www.facebook.com")
    console.log("Test3");

})

test.afterEach(async () => {
  console.log('After each test')
})

test.afterAll(async () => {
  console.log('After all tests')
})

