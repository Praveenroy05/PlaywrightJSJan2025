const {test, expect} = require('@playwright/test')
const path = require('path')



test('Single file upload', async function({page}){

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles()
    await page.locator('#filesToUpload').setInputFiles("C:/Users/prave/OneDrive/Documents/Praveen-PW/IshaPWJan2025/TestData/4.0 Selenium.txt")

    await expect(page.locator('#fileList li')).toContainText("Selenium")

    await page.waitForTimeout(5000)

})

test('Multiple file upload', async function({page}){

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    // setInputFiles()

    const directoryPath = path.join(__dirname,'../TestData/', 'Cypress.txt')
    console.log(directoryPath);

    await page.locator('#filesToUpload').setInputFiles(
        ["/Users/prave/OneDrive/Documents/Praveen-PW/IshaPWJan2025/TestData/4.0 Selenium.txt",
        "/Users/prave/OneDrive/Documents/Praveen-PW/IshaPWJan2025/TestData/Cypress.txt"])

    await expect(page.locator('#fileList li').first()).toContainText("Selenium")
    await expect(page.locator('#fileList li').last()).toContainText("Cypress")


    await page.waitForTimeout(5000)

})