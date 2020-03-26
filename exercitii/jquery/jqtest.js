$('input.first').click(changeButton);
$('input.second').click(styleButton);

// document.querySelector('input').addEventListener('click', changeButton);

function changeButton() {
    let newElem = $('<span>Hello world</span>');
    // $('div').toggle()
    //     .html(newElem);

    $('div').slidetoggle()
        .html(newElem);

    // add text in div
    // $('div').text('You click!');

    // document.querySelector('div').style.visibility = 'hidden';
}

function styleButton() {
    $('div').css({
        'background-color': 'orange',
        'top': '30vh'
    });
}