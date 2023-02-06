let users = Alloy.Collections.users;
var user = arguments[0] || {};

// Set data to text fields
$.name.text = user.name || "User Name"
$.email.text = user.email || "Email"
$.phone_number.text = user.phone_number || "Phone Number"
$.favourite_color.text = user.favourite_color || "Favorite Color"
$.id.text = ("id: " + user.id) || "User ID"
$.createdAt.text = new Date(user.createdAt).toLocaleString() || "Created At"
$.avatar.image = user.avatar
$.colorSquare.backgroundColor = user.favourite_color

// when you click the back arrow in the top left corner
function goBack() {
    $.userView.close();
}

// when swipe list item to the left side
function deleteUser() {
    users.get(user.id).destroy();
    $.userView.close();
}