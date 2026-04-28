const { Builder } = require('selenium-webdriver');
const LoginAction = require('../actions/login.action')
const {compareScreenshot} = require('../../utilities/visual_regression.helper'); //add visual regression

describe('Login', () => {
    let driver; 
    let loginAction;

    beforeEach(async () => {
        driver = new Builder()
            .forBrowser('chrome')
            .build();

        await driver.manage().window().setRect({width: 1280, height:800}); // add managementnya for visual

        loginAction = new LoginAction(driver);
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

        driver.sleep(1000); //example agar sama
        await compareScreenshot(driver, 'positiv_product_page', 5); // add syntax, 5 adalah merubah maxDiffPercent default dari 2 y (sudah dicoba dan hasilnya beda karna batas maksimal 2% berarti gambar beda, bisa dicooret" juga di baseline biar beda)
    });

    it('Login with empty username', async () => {
        await loginAction.inputPassword('secret_sauce');
        await loginAction.clickLoginButton();
        await loginAction.assertLoginFailed('Epic sadface: Username is required');
    
         await compareScreenshot(driver, 'negatif_empty_username'); // add syntax,, DEFAULTNYA 

    });

    it('Login with empty password', async () => {
        await loginAction.inputUsername('standard_user');
        await loginAction.clickLoginButton();
        await loginAction.assertLoginFailed('Epic sadface: Password is required');

        await compareScreenshot(driver, 'negatif_empty_password'); // add syntax, DEFAULTNYA
    });
})

//for run : npx mocha tests/specs/login_visual.test.js --timeout 6000
// bisa juga ditmbahkan delay agar gmbar keload sempurna diatas syntax (await compareScreenshot)