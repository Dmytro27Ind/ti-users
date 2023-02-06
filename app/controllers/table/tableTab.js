
let users;
users = Alloy.Collections.users;
users.fetch();

// read users data from JSON file
let usersDataFile = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'data/usersData.json')
let text = usersDataFile.read().text;
let usersData = JSON.parse(text);

// creating a model for each user and adding to the users collection
usersData.forEach((user) => {
    let userModel = Alloy.createModel('users', user);
    users.add(userModel)
    userModel.save();
})

function handleUserClick(event) {
    var user = {
        id: event.source.userId,
        createdAt: event.source.userCreatedAt,
        name: event.source.userName,
        avatar: event.source.userAvatar,
        email: event.source.userEmail,
        phone_number: event.source.userPhoneNumber,
        favourite_color: event.source.userFavouriteColor
    }
    Ti.API.info(user)

    let userView = Alloy.createController("table/userView", user).getView();

    if (OS_IOS) {
        $.index.openWindow(userView);
    }
    if (OS_ANDROID) {
        userView.open();
    }
}

function cleanup() {
    $.destroy();
}

let initialUsersSection = $.usersListView.sections[0];

function searchHandle(event) {
    var searchText = event.value.toLowerCase();
    const searchByProperty = (property) => property.toLowerCase().includes(searchText);

    var currItems = initialUsersSection.items;
    var searchItems = currItems.filter((user) => (
        searchByProperty(user.name.text)
        || searchByProperty(user.email.text)
        || searchByProperty(user.id.text)
    ))

    var newSection = Ti.UI.createListSection({items: searchItems})
    $.usersListView.sections = [newSection]
}