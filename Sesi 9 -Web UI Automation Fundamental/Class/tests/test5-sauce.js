// const {Builder, By, until} = require('selenium-webdriver');
// const assert = require('assert');
// const chrome = require('selenium-webdrvier/chrome'); // tambahan

// describe('Google Search Tests', function() {
//     let driver;

//     it('Visit SaucDemo dan cek page tittle', async function() {
//         driver = await new Builder().forBrowser('chrome').build();

//         // check input
//         await driver.get('https://www.saucedemo.com'); 

//         let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
//         let inputPassword = await driver.findElement(By.xpath('//*[@data-test="password"]'))
//         let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))

//         await inputUsername.sendKeys('standard_user')
//         await inputPassword.sendKeys('secret_sauce')
//         await buttonLogin.click()
// // -------------------------------
        
//         await driver.quit();
//     });

// });