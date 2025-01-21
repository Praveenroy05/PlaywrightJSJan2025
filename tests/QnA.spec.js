// Include the playwright module
const { test, expect } = require("@playwright/test");

// Write the Test case
test("Select the options and count the no. of options inside the DD.", async ({
  page,
}) => {
  // Open the URL
  await page.goto("https://demoqa.com/select-menu");
  // Validate the title of the page
  await expect(page).toHaveTitle("DEMOQA");
  //   Select the drop-down field
//   const multiddfield = await page.locator(
//     "//div[@id='selectMenuContainer']//div[@class='row']//div[contains(@class,'css-yk16xz-control')]"
//   );

    await page.getByText('Select...').click()
  //multiddfield.click();
  // Count the options from the DD
 const count = await page.locator(".css-11unzgr div").count()


    for(let i = count-1; i >= 0; i--) {
        await page.waitForTimeout(2000)
        await page.locator(".css-11unzgr div").nth(i).click()
        
    }
  })
    