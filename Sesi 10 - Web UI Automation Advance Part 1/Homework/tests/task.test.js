const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome'); 

describe('Login', () => {
    let driver;  
   
    //hook
    before(() => {
        console.log(' syntax log before test'); 
    })

    after(() =>{
        console.log("syntax log after tes"); 
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




        it.only('1.should login with valid credentials standard user', async () => { 

            await driver.get('https://www.saucedemo.com/');
            await driver.findElement(By.id('user-name')).sendKeys('standard_user');
            await driver.findElement(By.id('password')).sendKeys('secret_sauce');
            await driver.findElement(By.id('login-button')).click();

            await driver.wait(until.elementLocated(By.className('title')), 5000);
            const title = await driver.findElement(By.className('title')).getText();
            assert.strictEqual(title, 'Products');

           
    });

        it.only('2.should login with valid credentials visual user', async () => { 
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('visual_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
    });

        
        it.only('3.should login with valid credentials glitch user', async () => { 
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('performance_glitch_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
    });

            it('4.should login with valid credentials standard user', async () => { 

            await driver.get('https://www.saucedemo.com/');
            await driver.findElement(By.id('user-name')).sendKeys('standard_user');
            await driver.findElement(By.id('password')).sendKeys('secret_sauce');
            await driver.findElement(By.id('login-button')).click();

            await driver.wait(until.elementLocated(By.className('title')), 5000);
            const title = await driver.findElement(By.className('title')).getText();
            assert.strictEqual(title, 'Products');

           
    });

    it.only('5.[Regression] should login with valid credentials glitch', async () => {
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('performance_glitch_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
    });

    it.only('6.login with Invalid credentials locked_out_useritch', async () => {
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('locked_out_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        const errorEl = await driver.wait(
        until.elementLocated(By.css('[data-test="error"]')),
        5000
        );

        const errorText = await errorEl.getText();

        assert.strictEqual(
            errorText,
            'Epic sadface: Sorry, this user has been locked out.'
        );

        
    });
    it.only('7.[Regression] should login with valid credentials problem_user', async () => {
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('problem_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('title')), 5000);
        const title = await driver.findElement(By.className('title')).getText();
        assert.strictEqual(title, 'Products');

        
    });

        it.only('8.login with invalid credentials username empty', async () => {
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        const errorEl = await driver.wait(
        until.elementLocated(By.css('[data-test="error"]')),
        5000
        );

        const errorText = await errorEl.getText();

        assert.strictEqual(
            errorText,
            'Epic sadface: Username is required'
        );
     

        
    });

        it.only('9.login with invalid credentials problem_user & password empty', async () => {
         
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('problem_user'); 
        await driver.findElement(By.id('password')).sendKeys('');
        await driver.findElement(By.id('login-button')).click();

        const errorEl = await driver.wait(
        until.elementLocated(By.css('[data-test="error"]')),
        5000
        );

        const errorText = await errorEl.getText();

        assert.strictEqual(
            errorText,
            'Epic sadface: Password is required'
        );
  

        
    });    


});


