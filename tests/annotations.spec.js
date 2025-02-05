/*


test.describe.configuration()

test.skip() -  marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
test.fail() - marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
test.fixme() - marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
test.slow() - marks the test as slow and triples the test timeout.

test.step() - define the steps inside the test cases

*/


const { test, expect } = require('@playwright/test');

test.describe.configure({mode : 'serial', timeout: 5000})
test.skip('@smoke one', async()=>{
    console.log("one");
})

test.fail(' @regression Two', async()=>{
    console.log("Two");
    expect(1).toBe(2);
})

test.fixme('Three', {tag: '@smoke'}, async()=>{
    console.log("Three");
})

test('@smoke @regression Four', async({page})=>{
   // test.slow()
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText('test').click({button : 'right', timeout :50000})
    console.log("Four");
})

test('Five', {tag: ['@smoke', '@regression']}, async()=>{
    test.step("Login into the application", async ()=>{
        console.log("Login into the application");
    })
    test.step("Select a product on the dashboard", async ()=>{
        console.log("Select a product on the dashboard");
    })
    test.step("checkout the product and click on Place order", async ()=>{
        console.log("checkout the product and click on Place order");
    })
    test.step("Validate product ID available inside the order history", async ()=>{
        console.log("Validate product ID available inside the order history");
    })
})


