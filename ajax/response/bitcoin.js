$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
        $('#rateEUR').html(data.bpi.EUR.rate_float);
    }
);

$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
        $('#rateUSD').html(data.bpi.USD.rate_float);
    }
);

$.getJSON(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    function(data) {
        $('#rateGBP').html(data.bpi.GBP.rate_float);
    }
);