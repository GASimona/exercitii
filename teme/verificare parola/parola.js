var myPassword;
var arryPassword;
var conditii;

function verificareParola() {
    myPassword = document.getElementById('password').value;
    console.log(myPassword);

    // if (verificareCifra()) {
    //     console.log('Cifra');
    // }
    // if (verificareLiteraMare()) {
    //     console.log('Mare');
    // }
    // if (verificareLiteraMica()) {
    //     console.log('Mica');
    // }
    // if (verificareCaracterSpecial()) {
    //     console.log('Caracter');
    // }
    // if (verificareLunigime()) {
    //     console.log('Lungime');
    // }

    console.log(verificareCifra() + verificareLiteraMare() + verificareLiteraMica() + verificareCaracterSpecial() + verificareLunigime());
}

function verificareCifra() {
    if (myPassword.match(/[0-9]/g) != null) {
        return true;
    }
}
function verificareLiteraMica() {
    if (myPassword.match(/[a-z]/g) != null) {
        return true;
    }
}
function verificareLiteraMare() {
    if (myPassword.match(/[A-Z]/g) != null) {
        return true;
    }
}
function verificareCaracterSpecial() {
    if (myPassword.match(/[^0-9]/g) != null) {
        return true;
    }
}
function verificareLunigime() {
    if (myPassword.length >= 8) {
        return true;
    }
}