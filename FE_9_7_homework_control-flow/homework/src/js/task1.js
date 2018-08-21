const checkUser = prompt('Enter your login, please','');

if (checkUser === 'User') {
   const checkPassword = prompt('Enter your password, please', '');

    if (checkPassword === null) {
        alert('Canceled')
    } else if (checkPassword === 'SuperUser') {
        new Date().getHours() < 20 ? alert('Good Day!') : alert('Good evening!');
    } else {
        alert('Wrong password');
    }

} else if (checkUser === null || checkUser === '') {
    alert('Canceled');
} else if (checkUser.length < 4) {
    alert('I don\'t know any users having name length less than 4 symbols');
} else {
    alert('I don\'t know you');
}

