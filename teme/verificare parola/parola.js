var myPassword;
var arryPassword;
var conditii = 0;

function verificareParola() {
    myPassword = document.getElementById('password').value;
    console.log(myPassword);

    if (verificareCifra()) {
        conditii += 1;
    }
    if (verificareLiteraMare()) {
        conditii += 1;
    }
    if (verificareLiteraMica()) {
        conditii += 1;
    }
    if (verificareCaracterSpecial()) {
        conditii += 1;
    }
    if (verificareLunigime()) {
        conditii += 1;
    }
    console.log(conditii);
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