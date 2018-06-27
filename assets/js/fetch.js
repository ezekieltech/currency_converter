$(document).ready(function() {
    $(".thirdbtn").click(function() {
        let amount = $("#amount").val(),
            fromCurrency = $("#fromCurrency").val(),
            toCurrency = $("#toCurrency").val();

        const query = fromCurrency + '_' + toCurrency;

        const url = 'https://free.currencyconverterapi.com/api/v5/convert?q=' +
            query;

        fetch(url)
            .then((response) => response.json())
            .then((myJson) => {
                const theAnswer = myJson.results[query].val * amount;
                $("#answer").val(theAnswer);
                return;
            });
    });
});
