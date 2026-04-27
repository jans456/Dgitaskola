const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

//  function reusable (dipakai semua browser)
async function runTest(driver) {

    // buka website
    await driver.get('https://www.saucedemo.com');

    // cek title
    const title = await driver.getTitle();
    assert.strictEqual(title, 'Swag Labs');

    // input login
    const inputUsername = await driver.findElement(By.css('[data-test="username"]'));
    const inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'));
    const buttonLogin = await driver.findElement(By.css('.submit-button.btn_action'));

    await inputUsername.sendKeys('standard_user');
    await inputPassword.sendKeys('secret_sauce');
    await buttonLogin.click();

    // tunggu halaman inventory muncul
    const buttonCart = await driver.wait(
        until.elementLocated(By.xpath('//*[@data-test="shopping-cart-link"]')),
        10000
    );

    await driver.wait(until.elementIsVisible(buttonCart), 5000);

    // verifikasi logo
    const textAppLogo = await driver.findElement(By.className('app_logo'));
    const logotext = await textAppLogo.getText();
    assert.strictEqual(logotext, 'Swag Labs');

    // sorting dropdown
    const dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'));
    await dropdownSort.click();

    const option = await driver.findElement(By.xpath('//option[text()="Price (low to high)"]'));
    await option.click();
    await driver.sleep(3000);

    const option1 = await driver.findElement(By.xpath('//option[text()="Name (A to Z)"]'));
    await option1.click();
    

    // delay biar kelihatan (opsional)
    await driver.sleep(3000);
}

describe('Task Login & Sort Multi Browser', function () {

    it('Valid Login & Verify Sort', async function () {

        // 🔹 CHROME
        const chromeOptions = new chrome.Options();
        chromeOptions.addArguments('--incognito');

        const driverChrome = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(chromeOptions)
            .build();

        // 🔹 FIREFOX
        const firefoxOptions = new firefox.Options();

        const driverFirefox = await new Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(firefoxOptions)
            .build();

        // 🔥 Jalankan test di kedua browser
        const drivers = [driverChrome, driverFirefox];

        for (let driver of drivers) {
            await runTest(driver);
        }

        // tutup semua browser
        await driverChrome.quit();
        await driverFirefox.quit();
    });

});