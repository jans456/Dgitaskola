// const { Builder, By, until } = require('selenium-webdriver');
// const assert = require('assert');
// const chrome = require('selenium-webdriver/chrome'); 

// describe('Login', () => {
//     let driver;  
   
    
//     before(() => {
//         console.log('sbelum test'); 
//     })

//     after(() =>{
//         console.log("sesudah tes"); 
//     })

//     beforeEach(async () => { 
//         let options = new chrome.Options(); 
//         options.addArguments('--headless'); 
        
//         driver = new Builder()
//             .forBrowser('chrome')
//             .setChromeOptions(options)
//             .build();  

//      })

   
//     afterEach(async () =>{
//         await driver.quit()
//     })


//         // it.only('should login with valid credentials standard', async () => { //synatx only,only run

//         //     await driver.get('https://www.saucedemo.com/');
//         //     await driver.findElement(By.id('user-name')).sendKeys('standard_user');
//         //     await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//         //     await driver.findElement(By.id('login-button')).click();

//         //     await driver.wait(until.elementLocated(By.className('title')), 5000);
//         //     const title = await driver.findElement(By.className('title')).getText();
//         //     assert.strictEqual(title, 'Products');

           
//         // });


//         it('should login with valid credentials standard', async () => { 

//             await driver.get('https://www.saucedemo.com/');
//             await driver.findElement(By.id('user-name')).sendKeys('standard_user');
//             await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//             await driver.findElement(By.id('login-button')).click();

//             await driver.wait(until.elementLocated(By.className('title')), 5000);
//             const title = await driver.findElement(By.className('title')).getText();
//             assert.strictEqual(title, 'Products');

           
//         });

//         it('should login with valid credentials visual', async () => { 
         
//         await driver.get('https://www.saucedemo.com/');
//         await driver.findElement(By.id('user-name')).sendKeys('visual_user'); 
//         await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//         await driver.findElement(By.id('login-button')).click();

//         await driver.wait(until.elementLocated(By.className('title')), 5000);
//         const title = await driver.findElement(By.className('title')).getText();
//         assert.strictEqual(title, 'Products');

        
//         });

        
//         it.skip('should login with valid credentials glitch', async () => { // not run because give skip 
//         await driver.get('https://www.saucedemo.com/');
//         await driver.findElement(By.id('user-name')).sendKeys('performance_glitch_user'); 
//         await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//         await driver.findElement(By.id('login-button')).click();

//         await driver.wait(until.elementLocated(By.className('title')), 5000);
//         const title = await driver.findElement(By.className('title')).getText();
//         assert.strictEqual(title, 'Products');

        
//         });

//     it('[Regression] should login with valid credentials glitch', async () => { 
         
//         await driver.get('https://www.saucedemo.com/');
//         await driver.findElement(By.id('user-name')).sendKeys('performance_glitch_user'); 
//         await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//         await driver.findElement(By.id('login-button')).click();

//         await driver.wait(until.elementLocated(By.className('title')), 5000);
//         const title = await driver.findElement(By.className('title')).getText();
//         assert.strictEqual(title, 'Products');

        
//         });
// });

