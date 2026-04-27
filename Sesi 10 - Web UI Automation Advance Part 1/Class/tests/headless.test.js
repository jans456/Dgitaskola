const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome'); // input chrome

describe('Login', () => {
    it('should login with valid credentials', async () => {
        let options = new chrome.Options(); //set Declare variable headless
        options.addArguments('--headless'); //set Declare variable headless
        
        const driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();  // add set chrome for headless

        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        await driver.quit();
    });
});