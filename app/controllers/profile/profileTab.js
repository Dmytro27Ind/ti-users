
$.version.text = "App Version: " + Ti.App.version;

function phoneClick() {
    Ti.Platform.openURL('tel:' + "+421951338470");
}

function emailClick() {
    let dialog = Ti.UI.createEmailDialog();
    dialog.toRecipients = [ 'dmytro27kagirov@gmail.com' ];
    dialog.open();
}