function handleLogin() {
	const email = $.email.value
	const password = $.password.value

	// handle input data (email, password)
	var userDataFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory , 'data/userAuthData.json');
	let text = userDataFile.read().text
	var userAuthData = JSON.parse(text);
	console.log(userAuthData.slice(10))

	let loginSuccessful = false
	if (email === userAuthData[0].email && password === userAuthData[0].password)
		loginSuccessful = true;

	// Handle if login success or show an alert if the login was failed.
	if (loginSuccessful) {
		var mainScreen = Alloy.createController("mainScreen").getView();
		if (OS_IOS)
			$.index.openWindow(mainScreen);
		if (OS_ANDROID)
			mainScreen.open();
	} else {
		// Show an alert if the login was failed
	  	alert("Incorrect login or password. Please check your email and password.");
	}
}

$.index.open();
