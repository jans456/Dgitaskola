const TaskPage = require('../pageobjects/task.page')
const assert = require('assert');
const {until} = require('selenium-webdriver');

class TaskAction{
    constructor (driver) {
        this.driver = driver;
    }

        async openUrl(url){
        await this.driver.get(url);
    }


    async inputUsername(username){
        await this.driver.findElement(TaskPage.usernameInput).sendKeys(username);
    }

    async inputPassword(password){
        await this.driver.findElement(TaskPage.passwordInput).sendKeys(password);
    }

    async clickLoginButton(){
        await this.driver.findElement(TaskPage.loginButton).click();
    }
    
    async assertLoginSuccess(header) {
    await this.driver.wait(until.elementLocated(TaskPage.pageTitle), 5000);

    const title = await this.driver
        .findElement(TaskPage.pageTitle)
        .getText();

    assert.strictEqual(title, header);
    }

    async assertLoginFailed(expectedErrorMessage) {
    await this.driver.wait(until.elementLocated(TaskPage.errorMessage), 5000);

    const actualErrorMessage = await this.driver
    .findElement(TaskPage.errorMessage)
    .getText();
    
    assert.strictEqual(actualErrorMessage, expectedErrorMessage);
    }    
}

module.exports = TaskAction;