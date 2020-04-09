changeJoke();

function changeJoke() {
    $.getJSON(
        "https://api.icndb.com/jokes/random",
        function (data) {
            $('#fact').html(data.value.joke);
        }
    );
}
