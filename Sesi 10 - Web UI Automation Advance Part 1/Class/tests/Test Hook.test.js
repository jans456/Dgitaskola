// const { Builder, By, until } = require('selenium-webdriver');
// const assert = require('assert');
// const chrome = require('selenium-webdriver/chrome'); 

// describe('Login', () => {
//     let driver;  // add declare 
//     //tambahkan
//     // beforeEach(async () => { 

//     // });
    
//     before(() => {
//         console.log('sbelum test'); // add log sebelum
        
//     })

//     after(() =>{
//         console.log("sesudah tes"); // add log sesudah
//     })

//     beforeEach(async () => { 
//         let options = new chrome.Options(); 
//         options.addArguments('--headless'); 
        
//         driver = new Builder()
//             .forBrowser('chrome')
//             .setChromeOptions(options)
//             .build();  

//      })

//      // add affterEach
//     afterEach(async () =>{
//         await driver.quit()
//     })



//         it('should login with valid credentials', async () => {
//             // move to up in beforeach
//             // let options = new chrome.Options(); 
//             // options.addArguments('--headless'); 
            
//             // const driver = new Builder() //eraser const 
//             // .forBrowser('chrome').setChromeOptions(options).build();  

//             await driver.get('https://www.saucedemo.com/');
//             await driver.findElement(By.id('user-name')).sendKeys('standard_user');
//             await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//             await driver.findElement(By.id('login-button')).click();

//             await driver.wait(until.elementLocated(By.className('title')), 5000);
//             const title = await driver.findElement(By.className('title')).getText();
//             assert.strictEqual(title, 'Products');

//             // await driver.quit(); //eraser because  use afterEach
//         });

//         it('should login with valid credentials 2', async () => { 
//         // not use because use beforeeach 
//         // let options = new chrome.Options(); 
//         // options.addArguments('--headless'); 
        
//         // const driver = new Builder()
//         // .forBrowser('chrome').setChromeOptions(options).build();  
//         await driver.get('https://www.saucedemo.com/');
//         await driver.findElement(By.id('user-name')).sendKeys('visual_user'); 
//         await driver.findElement(By.id('password')).sendKeys('secret_sauce');
//         await driver.findElement(By.id('login-button')).click();

//         await driver.wait(until.elementLocated(By.className('title')), 5000);
//         const title = await driver.findElement(By.className('title')).getText();
//         assert.strictEqual(title, 'Products');

//         // await driver.quit(); //eraser becauseafterEach
//         });
// });