var activePlayer = 'X';
var win = 0;
var complet = 9;

$('.table div').click(makeMove);

function makeMove() {
    if (win == 0) {
        complet = complet - 1;
        console.log(complet);
        console.log(win);
        $(this).text(activePlayer)
            .addClass(activePlayer == 'X' ? 'x' : 'z')
            .unbind('click', makeMove);

        activePlayer = (activePlayer == 'X') ? '0' : 'X';
        checkEndGame();

    }
}

function checkEndGame() {
    let cells = $('.table div').toArray();
    checkComplete(cells.filter((value, index) => index < 3));
    checkComplete(cells.filter((value, index) => index > 2 && index < 6));
    checkComplete(cells.filter((value, index) => index > 5));

    checkComplete(cells.filter((value, index) => index % 3 == 0));
    checkComplete(cells.filter((value, index) => index % 3 == 1));
    checkComplete(cells.filter((value, index) => index % 3 == 2));

    checkComplete(cells.filter((value, index) => index % 4 == 0));

    checkComplete(cells.filter((value, index) => [2, 4, 6].includes(index)));

}

/**
 * 
 * @param {Array} cells 
 */
function checkComplete(cells) {
    if (cells.every(cell => $(cell).text() == 'X')
        || cells.every(cell => $(cell).text() == '0') && (complet != 0)
    ) {
        $('.end').addClass('visible');
        win = 1;
        console.log(win);
    }
    else {
        if (complet <= 0) {
            $('.remiza').addClass('visible');
        }
    }
}
$('.buttonRemiza').click(replay);

function replay() {
    activePlayer = 'X';
    win = 0;
    complet = 9;

    $('.end').removeClass('visible');
    $('.remiza').removeClass('visible');

    $('.table div').text('')
        .removeClass('z x')
        .bind('click', makeMove);
}
