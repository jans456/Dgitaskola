const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');
// const chrome = require('selenium-webdrvier/chrome'); // tambahan
const firefox = require('selenium-webdrvier/firefox');

describe('Google Search Tests', function() {
    

    it('Visit SaucDemo dan cek page tittle', async function() {
        
        options = new firefox.Options();
        // jika ingin blok
        // options.addArguments("--headless");
        // options.addArguments("--disable-gpu");
        // options.addArguments("--disable-dev-shm-usage");
        // options.addArguments("--no-sandbox");
        // options.addArguments("--disable-blink-features=AutomationControlled");
        // options.addArguments("--disable-extensions");
        // options.addArguments("--disable-popup-blocking");
        // options.addArguments("--disable-notifications");
        // options.addArguments("--disable-web-security");
        // options.addArguments("--disable-features=site-per-process");



        driver = await new Builder().forBrowser('firefox').setFirefoxOptions(options).build();

        await driver.get('https://saucedemo.coom');
        const title = await driver.getTitle();
        
        await driver.quit();
    });

});