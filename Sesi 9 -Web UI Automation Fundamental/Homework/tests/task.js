const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

describe('Task Login & Sort Multi Browser', function () {

    this.timeout(40000);

    // =========================
    // 🔹 CHROME
    // =========================
    it('Chrome - Login & Sorting', async function () {

        const options = new chrome.Options();
        options.addArguments('--incognito');

        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        try {
            await driver.get('https://www.saucedemo.com');

            const title = await driver.getTitle();
            assert.strictEqual(title, 'Swag Labs');

            // login
            await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
            await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
            await driver.findElement(By.css('.submit-button.btn_action')).click();

            await driver.wait(
                until.elementLocated(By.css('[data-test="shopping-cart-link"]')),
                10000
            );

            const logo = await driver.findElement(By.className('app_logo')).getText();
            assert.strictEqual(logo, 'Swag Labs');

            const dropdown = await driver.findElement(
                By.xpath('//select[@data-test="product-sort-container"]')
            );

            // sorting 1
            await dropdown.click();
            await driver.findElement(By.xpath('//option[text()="Price (low to high)"]')).click();
            await driver.sleep(3000);

            // sorting 2
            await dropdown.click();
            await driver.findElement(By.xpath('//option[text()="Name (A to Z)"]')).click();
            await driver.sleep(3000);

        } finally {
            await driver.quit();
        }
    });

    // =========================
    // 🔹 FIREFOX
    // =========================
    it('Firefox - Login & Sorting', async function () {

        const driver = await new Builder()
            .forBrowser('firefox')
            .build();

        try {
            await driver.get('https://www.saucedemo.com');

            const title = await driver.getTitle();
            assert.strictEqual(title, 'Swag Labs');

            // login
            await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
            await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
            await driver.findElement(By.css('.submit-button.btn_action')).click();

            await driver.wait(
                until.elementLocated(By.css('[data-test="shopping-cart-link"]')),
                10000
            );

            const logo = await driver.findElement(By.className('app_logo')).getText();
            assert.strictEqual(logo, 'Swag Labs');

            const dropdown = await driver.findElement(
                By.xpath('//select[@data-test="product-sort-container"]')
            );

            // sorting 1
            await dropdown.click();
            await driver.findElement(By.xpath('//option[text()="Price (low to high)"]')).click();
            await driver.sleep(3000);

            // sorting 2
            await dropdown.click();
            await driver.findElement(By.xpath('//option[text()="Name (A to Z)"]')).click();
            await driver.sleep(3000);

        } finally {
            await driver.quit();
        }
    });

});