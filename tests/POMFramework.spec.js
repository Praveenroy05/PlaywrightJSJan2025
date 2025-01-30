// POM - Page Object Model

//Page object model is a design pattern used in the software testing to represent a web page as an object. It is a way to organise and manage the interactions with a web page by creating classes that encapsulate the properties and behaviors of that page.


// Each page object class typically contains methods for interacting with the elements on the page, such as clicking buttons, entering text, and retrieving information, making tests more readable and maintainable.

// This approach promotes reusability and reduces code duplication, as the same page object can be used across multiple test cases. Additionally, it allows for easier updates to the tests, as changes to the page structure only require updates to the page object class, rather than each individual test.

// POM from scratch

// Page Layer - Will create a package or folder (pages) -- Locators and method related to specific page
// LoginPage.js, DashboardPage.js, CartPage.ts ....

// Test Layer - Pure test case and assertions
// LoginPageTest.spec.js, DashboardPageTest.spec.js .....

// Test Data - JSON/Excel- TestData.json, TestData.xlsx
// Utils - API methods, screenshot, scrolling, read the data from the excel
// Report - Allure/HTML

// BasePage - clickOnElement(), getTextFromElement(), waitForElementToBeVisible()


// 1. Login page validation
//   a. Valid login scenario - valid credentials
//   b. Invalid login scenario - Email is incorrect
// 2. Dashboard page validation
    // Search a product and add to the cart

    // Best practices - 
// 


