const { Builder } = require('selenium-webdriver');
const TaskAction = require('../actions/task.action') // also in setting assertion
const SSAction = require('../actions/ss.action'); // ad ss
const TaskPage = require('../pageobjects/task.page');
const chrome = require('selenium-webdriver/chrome');
const {compareScreenshot} = require('../../utilities/visual_regression.helper'); // add visual regression

describe('Login', () => {
    let driver; 
    let taskAction; 
    let ssAction; // add ss

    beforeEach(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();


        await driver.manage().window().setRect({width: 1280, height:800}); // manage visual regression
        
        taskAction = new TaskAction(driver);
        ssAction = new SSAction(driver);
        await taskAction.openUrl('https://www.saucedemo.com');
    })

    afterEach(async () => {
        await driver.quit();
    })

    it('1.[Valid]Login with valid credential', async () => {
        await taskAction.inputUsername('standard_user');
        await taskAction.inputPassword('secret_sauce');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginSuccess('Products'); // asertion
        await ssAction.fullPageScreenshot('login_positive') // add ss positiv full screen
        driver.sleep(1000);
        await compareScreenshot(driver, 'Valid login'); //visual regression
    });

    it('2.[Invalid] Login with empty username', async () => {
        await taskAction.inputPassword('secret_sauce');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginFailed('Epic sadface: Username is required'); // asertion
        await ssAction.partialScreenshot(TaskPage.errorMessage, 'Negative[empty_username]'); // add ss negatif partial screen

        await compareScreenshot(driver, 'Negative[empty_username]'); //visual regression
    });

        it('3.[Invalid]Login with empty password', async () => {
        await taskAction.inputUsername('standard_user');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginFailed('Epic sadface: Password is required'); // asertion
        await ssAction.partialScreenshot(TaskPage.errorMessage,'Negative[empty_password]'); // ss

        await compareScreenshot(driver, 'Negative[empty_password]'); //visual regression
    });

    it('4.[Invalid]Login with Wrong Username', async () => {
        await taskAction.inputUsername('ekw=23u29h');
        await taskAction.inputPassword('secret_sauce');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginFailed('Epic sadface: Username and password do not match any user in this service'); // asertion
        await ssAction.partialScreenshot(TaskPage.errorMessage, 'Negative[Wrong_username]'); // add ss negatif full screen

        await compareScreenshot(driver, 'Negative[Wrong_username]'); //visual regression
    });
    

    it('5.[Invalid]Login with Wrong password', async () => {
        await taskAction.inputUsername('standard_user');
        await taskAction.inputPassword('janjnurssubekti345');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginFailed('Epic sadface: Username and password do not match any user in this service'); // asertion
        await ssAction.partialScreenshot(TaskPage.errorMessage, 'Negative[Wrong_password]'); // add ss negatif full screen

        await compareScreenshot(driver, 'Wrong_password'); //visual regression
    });

    it('6.[Invalid]Login with username font arabic', async () => {
        await taskAction.inputUsername('مستخدم_قياسي');
        await taskAction.inputPassword('secret_sauce');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginFailed('Epic sadface: Username and password do not match any user in this service'); // asertion
        await ssAction.partialScreenshot(TaskPage.errorMessage, 'Negative[Wrong_username_Font_arabic]') // add ss positiv full screen

        await compareScreenshot(driver, 'Negative[Wrong_username_Font_arabic]'); //visual regression
    });

    it('7.[Invalid]Login with username locked_out_user', async () => {
        await taskAction.inputUsername('locked_out_user');
        await taskAction.inputPassword('secret_sauce');
        await taskAction.clickLoginButton();
        await taskAction.assertLoginFailed('Epic sadface: Sorry, this user has been locked out.'); // asertion
        await ssAction.partialScreenshot(TaskPage.errorMessage, 'Negative[username_locked_out_user_is_locked]') // add ss positiv full screen

        await compareScreenshot(driver, 'Negative[username_locked_out_user_is_locked]'); //visual regression
    });

    


})

// for run : npx mocha tests/specs/task.test.js --timeout 6000
// same (sama) name file