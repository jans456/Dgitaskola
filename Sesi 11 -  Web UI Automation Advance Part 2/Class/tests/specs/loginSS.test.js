const { Builder } = require('selenium-webdriver');
const LoginAction = require('../actions/login.action')
const SharingAction = require('../actions/sharing.action'); // ad ss
const LoginPage = require('../pageobjects/login.page');

describe('Login', () => {
    let driver; 
    let loginAction;
    let sharingAction; // add ss

    beforeEach(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();

        loginAction = new LoginAction(driver);
        sharingAction = new SharingAction(driver);
        await loginAction.openUrl('https://www.saucedemo.com');
    })

    afterEach(async () => {
        await driver.quit();
    })

    it('Login with valid credential', async () => {
        await loginAction.inputUsername('standard_user');
        await loginAction.inputPassword('secret_sauce');
        await loginAction.clickLoginButton();
        await loginAction.assertLoginSuccess('Products');
        await sharingAction.fullPageScreenshot('login_positive') // add ss positiv
    });

    it('Login with empty username', async () => {
        await loginAction.inputPassword('secret_sauce');
        await loginAction.clickLoginButton();
        await loginAction.assertLoginFailed('Epic sadface: Username is required');
        await sharingAction.partialScreenshot(LoginPage.errorMessage, 'loginempty_username'); // add ss negatif
    });

    it('Login with empty password', async () => {
        await loginAction.inputUsername('standard_user');
        await loginAction.clickLoginButton();
        await loginAction.assertLoginFailed('Epic sadface: Password is required');
    });
})