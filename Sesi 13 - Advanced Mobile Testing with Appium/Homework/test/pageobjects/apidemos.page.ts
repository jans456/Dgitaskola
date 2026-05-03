export class APIDemosPage {
    static appBtn() {
        return $('//android.widget.TextView[@content-desc="App"]');
    }
    
    static AlertDialogsBtn() {
        return $('//android.widget.TextView[@content-desc="Alert Dialogs"]');
    }

    static TextEntrydialoghBtn() {
        return $('//android.widget.Button[@content-desc="Text Entry dialog"]');
    }

    static preusername_editField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]');
        
    }

    static prepassword_editField() {
        return $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')
    }

    static OKBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]')
    }    

    //android.widget.Button[@resource-id="android:id/button1"]
}

//ouput inspector app