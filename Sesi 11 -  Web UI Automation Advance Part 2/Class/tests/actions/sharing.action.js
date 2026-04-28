const fs = require('fs');

class SharingAction {
    constructor(driver){
        this.driver = driver;
    }

    async fullPageScreenshot(fileName){
        const screenshot = await this.driver.takeScreenshot();
        fs.writeFileSync('screenshot/' + fileName + '.png', screenshot, 'base64');

    }

    async partialScreenshot(elemnt, fileName){
        const partial = await this.driver.findEelement(element).takeScreenshot();
        fs.writeFileSync('screenshot/' + fileName + '.png', partial, 'base64');

    }

}

module.exports = SharingAction;
