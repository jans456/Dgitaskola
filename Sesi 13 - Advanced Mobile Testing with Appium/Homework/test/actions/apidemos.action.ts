import { APIDemosPage } from "../pageobjects/apidemos.page";

export class APIDemosActions {
    async waitForAppBtn() {
        await APIDemosPage.appBtn().waitForDisplayed({ timeout: 5000 });
    }

    async clickAppBtn() {
        await APIDemosPage.appBtn().click();
    }

    async verifyAppBtn() {
        return await APIDemosPage.appBtn().isDisplayed();
    }

    async ClickAlertDialogsBtn() {
        await APIDemosPage.AlertDialogsBtn().click();
    }

    async ClickTextEntrydialoghBtn() {
        await APIDemosPage.TextEntrydialoghBtn().click();
    }

    async verifyTextEntrydialoghBtn() {
        await APIDemosPage.TextEntrydialoghBtn().waitForDisplayed({ timeout: 3000 });
    }    
  
    async fillusername_editField(query: string) {
        await APIDemosPage.preusername_editField().setValue(query);
    }

    async fillpassword_editField(query: string) {
        await APIDemosPage.prepassword_editField().setValue(query);
    }



    async getQueryFieldValueusername() {
        return await APIDemosPage.preusername_editField().getText();
    }

    async getQueryFieldValuepassword() {
        return await APIDemosPage.prepassword_editField().getText();
    }

        async ClickOKBtn() {
        await APIDemosPage.OKBtn().click();
    }

        async verifyOKBtn() {
        return await APIDemosPage.OKBtn().isDisplayed();
    }


}