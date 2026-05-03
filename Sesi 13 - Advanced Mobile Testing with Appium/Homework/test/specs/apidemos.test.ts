import { APIDemosActions } from "../actions/apidemos.action";

const apiDemosAction = new APIDemosActions();

let fillText: string

describe("ApiDemos", async () => {

    before(async function()  {
        fillText = "Datavalid"
    })

    beforeEach(async function() {
        await driver.relaunchActiveApp();
        await driver.pause(2000); // biar stabil
    })

    afterEach(async function(){
        if (this.currentTest?.state === "failed") {
            const fileName = `./screenshots/${this.currentTest.title}.png`;
            await driver.saveScreenshot(fileName);
        }
    })

    

    it("Data valid", async () => {
        await apiDemosAction.waitForAppBtn();
        await apiDemosAction.clickAppBtn();
        await apiDemosAction.ClickAlertDialogsBtn();
        await apiDemosAction.ClickTextEntrydialoghBtn();
        await apiDemosAction.fillusername_editField("Janjinurs");
        await apiDemosAction.fillpassword_editField("Janjinur");

        expect(await apiDemosAction.getQueryFieldValueusername())
            .toEqual("Janjinurs");

        expect(await apiDemosAction.getQueryFieldValuepassword())
            .not.toBe(""); // password masked

        await apiDemosAction.ClickOKBtn();
    });

});