document.getElementById("amount").addEventListener("input", convertCurrency);
document.getElementById("fromCurrency").addEventListener("change", handleCurrencyChange);
document.getElementById("toCurrency").addEventListener("change", handleCurrencyChange);

function convertCurrency() {
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    let amount = parseFloat(document.getElementById("amount").value);

    if (fromCurrency === toCurrency) {
        document.getElementById("result").value = amount.toFixed(2) + " " + toCurrency;
        return;
    }

    let exchangeRate = getExchangeRate(fromCurrency, toCurrency);
    let result = (amount * exchangeRate).toFixed(2);

    document.getElementById("result").value = result + " " + toCurrency;
}

function handleCurrencyChange() {
    convertCurrency();
}

const exchangeRates = [
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
    let fromCurrencyObj = exchangeRates.find(currency => currency.name === fromCurrency);
    
    for (let rateObj of fromCurrencyObj.rates) {
        if (rateObj.name === toCurrency) {
            return rateObj.rate;
        }
    }

    return null; // Returnerer null, hvis valutakursen ikke findes
}