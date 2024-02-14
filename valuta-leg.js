document.getElementById("amount").addEventListener("input", function() {
    convertCurrency();
});

document.getElementById("fromCurrency").addEventListener("change", function() {
    convertCurrency();
});

document.getElementById("toCurrency").addEventListener("change", function() {
    convertCurrency();
});

function convertCurrency() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var amount = parseFloat(document.getElementById("amount").value);

    if (fromCurrency === toCurrency) {
        document.getElementById("result").value = amount.toFixed(2) + " " + toCurrency;
        return;
    }

    var exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    var result = (amount * exchangeRate).toFixed(2);

    document.getElementById("result").value = result + " " + toCurrency;
}

var exchangeRates = [
    // USD
    {
        name: "USD",
        rates: [
            { name: "EUR", rate: 0.88 },
            { name: "DKK", rate: 6.42 },
            { name: "GBP", rate: 0.77 }
        ]
    },
    // EUR
    {
        name: "EUR",
        rates: [
            { name: "USD", rate: 1.14 },
            { name: "DKK", rate: 7.29 },
            { name: "GBP", rate: 0.85 }
        ]
    },
    // DKK
    {
        name: "DKK",
        rates: [
            { name: "USD", rate: 0.16 },
            { name: "EUR", rate: 0.14 },
            { name: "GBP", rate: 0.12 }
        ]
    },
    // GBP
    {
        name: "GBP",
        rates: [
            { name: "USD", rate: 1.30 },
            { name: "EUR", rate: 1.17 },
            { name: "DKK", rate: 8.25 }
        ]
    }
];

function getExchangeRate(fromCurrency, toCurrency) {
    
    var fromCurrencyObj = exchangeRates.find(function(currency) {
        return currency.name === fromCurrency;
    });

    var exchangeRateObj = fromCurrencyObj.rates.find(function(rate) {
        return rate.name === toCurrency;
    });

    return exchangeRateObj.rate;
}