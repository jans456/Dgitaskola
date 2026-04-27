const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome'); 

describe('Login', () => {
    let driver;  
   
    
    before(() => {
        console.log('sbelum test'); 
    })

    after(() =>{
        console.log("sesudah tes"); 
    })

    beforeEach(async () => { 
        let options = new chrome.Options(); 
        options.addArguments('--headless'); 
        
        driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();  

     })

   
    afterEach(async () =>{
        await driver.quit()
    })





        it('should login with valid credentials standard', async () => { 

            await driver.get('https://www.saucedemo.com/');
            await driver.findElement(By.id('user-name')).sendKeys('standard_user');
            await driver.findElement(By.id('password')).sendKeys('secret_sauce');
            await driver.findElement(By.id('login-button')).click();

            await driver.wait(until.elementLocated(By.className('title')), 5000);
            const title = await driver.findElement(By.className('title')).getText();
            assert.strictEqual(title, 'Products');

           
        });

        it('[Regression]should login with valid credentials visual', async () => { 
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('visual_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
        });

        
        it('should login with valid credentials glitch', async () => { 
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('performance_glitch_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
        });

    it(' should login with valid credentials glitch', async () => { 
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('performance_glitch_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
        });
});

// yang jalan hanya yang judulnya mengandung visual saja
// npx mocha tests --grep 'visual' --timeout 60000 run in cmd 

// ---------------------------------------
// yang jalan hanya yang judulnya mengandung visual dan glitch saja
// npx mocha tests --grep "visual|glitch" --timeout 60000 run in cmd 

// ---------------------------------------
// yang jalan hanya yang judulnya mengandung mengandung 2kata saja
// npx mocha tests --grep '(?=.*Regression)(?=.*visual)' --timeout 60000 run in cmd 
