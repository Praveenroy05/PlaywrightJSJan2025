class DashboardPage {

    constructor(page) {
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccessMsg = this.page.locator("#toast-container")

    }

    async searchAndAddProductToCart(productName) {
        const count = await this.products.count() //count
        for (let i = 0; i < count; i++) { // i=0
            const productText = await this.products.nth(i).locator("b").textContent()
            if (productText === productName) {
                await this.products.nth(i).locator("button").last().click();
                break;
            }
        }
    }
}
module.exports = {DashboardPage};