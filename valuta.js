document.getElementById("amount").addEventListener("input", function() {
    convertCurrency();
});

function convertCurrency() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var amount = parseFloat(document.getElementById("amount").value);

    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    var result = (amount * exchangeRate).toFixed(2);

    document.getElementById("result").value = result + " " + toCurrency;
}

function getExchangeRate(fromCurrency, toCurrency) {
    var exchangeRates = {
        "USD": {
            "EUR": 0.88,
            "DKK": 6.42,
            "GBP": 0.77
        },
        "EUR": {
            "USD": 1.14,
            "DKK": 7.29,
            "GBP": 0.85
        },
        "DKK": {
            "USD": 0.16,
            "EUR": 0.14,
            "GBP": 0.12
        },
        "GBP": {
            "USD": 1.30,
            "EUR": 1.17,
            "DKK": 8.25
        }
    };

    return exchangeRates[fromCurrency][toCurrency];
}
