$.get('/api/user/', function(data) {
    window.user = data.name;
}
function changeUsername() {
    var newUsername = prompt("Enter your new username.");
    var pass = btoa(prompt("Enter your current password"));

    var postData = `username=${newUsername}&password=${pass}`;
    $.post('/api/changeusername/', postData, function(data) {
        navigator.clipboard.writeText(newUsername);
        alert("copied username to clipboard")
    });
}
changeUsername()
