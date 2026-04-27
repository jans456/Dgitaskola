const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome'); 

describe('Login', () => {
    it('should login with valid credentials', async () => {
        let options = new chrome.Options(); 
        options.addArguments('--headless'); 
        
        const driver = new Builder()
        .forBrowser('firefox').setChromeOptions(options).build();  // ganti declare sesuaikan dengan browser yang ingin ditest cukup ganti ini saja

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