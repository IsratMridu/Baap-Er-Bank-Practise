document.getElementById('loginButton').addEventListener('click', function () {

    var username = document.getElementById('userName');
    var usernames = username.value;
    var password = document.getElementById('passWord');
    var passwords = password.value
    if (usernames == 'jubair' && passwords == 'jubair12') {
        window.location.href = 'account.html';
    }
    else {
        alert('Something is wrong');
    }
    username.value = '';
    password.value = '';
})
