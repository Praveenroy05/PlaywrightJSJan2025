// click - click({force:true})
// double click - 
// right click
// mouse hover on an element
// drag and drop
// pop-up/alert validation

const {test, expect} = require('@playwright/test')

test('Double click and right click validation', async ({page})=>{

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    await page.getByText('right click me').click({button : 'right'})
    await page.getByText('Quit').click()
    await page.waitForTimeout(3000)
    // dblclick() - It performs a double click on an element
    await page.getByText('Double-Click Me To See Alert').dblclick()

    await page.waitForTimeout(3000)

})

test("Mouse over on an element", async ({page})=>{

    await page.goto("https://www.spicejet.com/")
    await page.getByText('Add-ons', {exact :true}).hover()
    await expect(page.getByTestId('test-id-SpiceMax')).toBeVisible()

})

test("Drag and drop", async ({page})=>{

    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    const draggableElement = await page.locator("div#draggable")
    const dropPlace = page.locator("div#droppable")
    // dragTo(locator)

    await draggableElement.dragTo(dropPlace)
    await page.waitForTimeout(3000)

})


test('pop-up or alert validation', async ({page})=>{

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

    // on()
    page.on('dialog', dialog => {
        console.log(dialog.message());
        expect(dialog.message()).toContain("You double clicked me.. Thank You..")
        dialog.accept()
    })
    await page.getByText('Double-Click Me To See Alert').dblclick()
})





test("Confirm validation", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.dismiss()
    })
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")
 
})

test("Prompt validation", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', dialog => {
        console.log(dialog.message());
        dialog.accept("Testing")
    })
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText("You entered Testing")
 
})

