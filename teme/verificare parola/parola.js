var myPassword;

function verificareParola() {
    myPassword = document.getElementById('password').value;
    console.log(myPassword);

    document.getElementById('valoarePutere').value = verificareCifra() + verificareLiteraMica() + verificareLiteraMare() + verificareCaracterSpecial() + verificareLunigime();;
}

function verificareCifra() {
    if (myPassword.match(/[0-9]/) != null) {
        return 1;
    }
    return 0;
}
function verificareLiteraMica() {
    if (myPassword.match(/[a-z]/) != null) {
        return 1;
    }
    return 0;
}
function verificareLiteraMare() {
    if (myPassword.match(/[A-Z]/) != null) {
        return 1;
    }
    return 0;
}
function verificareCaracterSpecial() {
    if (myPassword.match(/[^a-zA-Z0-9]/) != null) {
        return 1;
    }
    return 0;
}
function verificareLunigime() {
    if (myPassword.length >= 8) {
        return 1;
    }
    return 0;
}