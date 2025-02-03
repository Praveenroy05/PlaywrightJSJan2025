const { test, expect } = require('@playwright/test');

test('Check for broken links without eval()', async ({ page }) => {
    await page.goto('https://practice-automation.com/broken-links/');

    // Get all link elements
    const linkElements = page.locator('a');
    const linkCount = await linkElements.count();
    
    console.log(`Total Links Found: ${linkCount}`);

    for (let i = 0; i < linkCount; i++) {
        const link = await linkElements.nth(i).getAttribute('href');

        if (!link || !link.startsWith('http')) {
            console.log(`Skipping invalid/relative URL: ${link}`);
            continue;
        }

        try {
            // Send request to check if the link is broken
            const response = await page.request.get(link);
            const status = await response.status();

            if (status >= 400) {
                console.log(`Broken Link: ${link} (Status: ${status})`);
            } else {
                console.log(`Valid Link: ${link} (Status: ${status})`);
            }
        } catch (error) {
            console.log(`Error Checking Link: ${link} - ${error.message}`);
        }
    }
});
