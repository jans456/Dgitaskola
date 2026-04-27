// // versi slow
// const { Builder, By, until } = require('selenium-webdriver');
// const { Select } = require('selenium-webdriver');
// const assert = require('assert');
// const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');

// describe('Task Login & Sort Multi Browser', function () {

//     this.timeout(40000);

//     // 🔹 CHROME
//     it('Chrome - Login & Sorting', async function () {

//         const options = new chrome.Options().addArguments('--incognito');

//         const driver = await new Builder()
//             .forBrowser('chrome')
//             .setChromeOptions(options)
//             .build();

//         try {
//             await driver.get('https://www.saucedemo.com');

//             // title
//             assert.strictEqual(await driver.getTitle(), 'Swag Labs');

//             // login
//             await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
//             await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
//             await driver.findElement(By.css('.submit-button.btn_action')).click();

//             await driver.wait(
//                 until.elementLocated(By.css('[data-test="shopping-cart-link"]')),
//                 10000
//             );

//             // logo
//             const logo = await driver.findElement(By.className('app_logo')).getText();
//             assert.strictEqual(logo, 'Swag Labs');

//             // dropdown pakai SELECT
//             let dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             let select = new Select(dropdown);

//             // 🔹 lohi
//             await select.selectByValue('lohi');
//             await driver.sleep(2000);

//             // 🔹 az
//             dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             select = new Select(dropdown);
//             await select.selectByValue('az');
//             await driver.sleep(2000);

//             // 🔹 za
//             dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             select = new Select(dropdown);
//             await select.selectByValue('za');
//             await driver.sleep(2000);

//             // 🔹 hilo
//             dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             select = new Select(dropdown);
//             await select.selectByValue('hilo');
//             await driver.sleep(2000);

//         } finally {
//             await driver.quit();
//         }
//     });

//     // 🔹 FIREFOX
//     it('Firefox - Login & Sorting', async function () {

//         const driver = await new Builder()
//             .forBrowser('firefox')
//             .build();

//         try {
//             await driver.get('https://www.saucedemo.com');

//             assert.strictEqual(await driver.getTitle(), 'Swag Labs');

//             // login
//             await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
//             await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
//             await driver.findElement(By.css('.submit-button.btn_action')).click();

//             await driver.wait(
//                 until.elementLocated(By.css('[data-test="shopping-cart-link"]')),
//                 10000
//             );

//             const logo = await driver.findElement(By.className('app_logo')).getText();
//             assert.strictEqual(logo, 'Swag Labs');

//             let dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             let select = new Select(dropdown);

//             await select.selectByValue('lohi');
//             await driver.sleep(2000);

//             dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             select = new Select(dropdown);
//             await select.selectByValue('az');
//             await driver.sleep(2000);

//             dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             select = new Select(dropdown);
//             await select.selectByValue('za');
//             await driver.sleep(2000);

//             dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
//             select = new Select(dropdown);
//             await select.selectByValue('hilo');
//             await driver.sleep(2000);

//         } finally {
//             await driver.quit();
//         }
//     });

// });

//versi fast

const { Builder, By, until } = require('selenium-webdriver');
const { Select } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

describe('Task Login & Sort Multi Browser (FAST)', function () {

    this.timeout(30000);

    // 🔹 reusable wait setelah sorting
    async function waitInventoryLoaded(driver) {
        await driver.wait(
            until.elementsLocated(By.className('inventory_item')),
            5000
        );
    }

    // 🔹 reusable sorting
    async function doSort(driver, value) {
        const dropdown = await driver.findElement(By.css('[data-test="product-sort-container"]'));
        const select = new Select(dropdown);

        await select.selectByValue(value);

        // tunggu list refresh
        await waitInventoryLoaded(driver);
    }

    // =========================
    // 🔹 CHROME
    // =========================
    it('Chrome - Login & Sorting FAST', async function () {

        const options = new chrome.Options();
        options.addArguments('--incognito');
        options.addArguments('--log-level=3'); // hide log

        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        try {
            await driver.get('https://www.saucedemo.com');

            // title
            assert.strictEqual(await driver.getTitle(), 'Swag Labs');

            // login
            await driver.findElement(By.css('[data-test="username"]')).sendKeys('standard_user');
            await driver.findElement(By.css('[data-test="password"]')).sendKeys('secret_sauce');
            await driver.findElement(By.css('.submit-button.btn_action')).click();

            // tunggu masuk inventory
            await driver.wait(
                until.elementLocated(By.css('[data-test="shopping-cart-link"]')),
                10000
            );

            // verifikasi logo
            const logo = await driver.findElement(By.className('app_logo')).getText();
            assert.strictEqual(logo, 'Swag Labs');

            // sorting (CEPAT)
            await doSort(driver, 'lohi');
            await doSort(driver, 'az');
            await doSort(driver, 'za');
            await doSort(driver, 'hilo');

        } finally {
            await driver.quit();
        }
    });

    // =========================
    // 🔹 FIREFOX
    // =========================
    it('Firefox - Login & Sorting FAST', async function () {

        const driver = await new Builder()
            .forBrowser('firefox')
            .build();

        try {
            await driver.get('https://www.saucedemo.com');

            assert.strictEqual(await driver.getTitle(), 'Swag Labs');

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

            // sorting (CEPAT)
            await doSort(driver, 'lohi');
            await doSort(driver, 'az');
            await doSort(driver, 'za');
            await doSort(driver, 'hilo');

        } finally {
            await driver.quit();
        }
    });

});