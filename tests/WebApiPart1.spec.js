// frontend - js, ts, react, angular
// backend - js, ts, java, python
// database - sql, mysql, mongodb

//api 

// Request format of the API
// URL, HTTP method, header, body, query parameters
// Response format
// status code, header, response

// url - https://rahulshettyacademy.com/api/ecom/auth/login
// HTTP method - POST
// body - {"userEmail":"test7lYM@gmail.com","userPassword":"Test@123"}

// Status code - 200 OK
// Response - JSON - 
/*{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJjYTE3MGFlMmFmZDRjMGI0Yjg3NDgiLCJ1c2VyRW1haWwiOiJ0ZXN0N2xZTUBnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzM4MDc5MzAyLCJleHAiOjE3Njk2MzY5MDJ9.qAtPvpH-V3FuIhLlJfDSqv6a3lyXj52OWdkFYdNrEq4",
    "userId": "66bca170ae2afd4c0b4b8748",
    "message": "Login Successfully"
}
*/

const { test, expect, request } = require('@playwright/test')

const url = "https://rahulshettyacademy.com/client"

const loginPayload = { userEmail: "test7lYM@gmail.com", userPassword: "Test@123" }
const orderPayload = { orders: [{ country: "Chile", productOrderedId: "6581cade9fd99c85e8ee7ff5" }] }
let token
let orderID
test.beforeAll('Get Token', async () => {

    const apiContext = await request.newContext()
    const apiResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        }
    )
    const jsonResponse = await apiResponse.json()
    token = jsonResponse.token
    console.log(token)

    const orderResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data: orderPayload,
            headers: {
                authorization: token
            }
        }
    )
    const orderJsonResponse = await orderResponse.json()
    orderID = await orderJsonResponse.orders[0]
    console.log(orderID)
})


test('End to end product order validations', async ({ page }) => {
    await page.addInitScript((value) => {
        window.localStorage.setItem('token', value)
    }, token)
    await page.goto(url)
    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await expect(page.locator(".container h1")).toBeVisible()
    const rows = page.locator('tbody tr')
    const rowsCount = await rows.count()
    let orderIDText
    for (let i = 0; i < rowsCount; i++) {
        orderIDText = await rows.nth(i).locator('th').textContent()
        if (orderID.includes(orderIDText)) {
            await rows.nth(i).locator('td button').first().click() // tbody tr[0] td button
            break;
        }
    }
    await expect(page.locator('.col-text').first()).toHaveText(orderIDText)
})


