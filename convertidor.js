// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

//Entrada en USD, Salida en YEN
function fromDollarToYen (usd){ 
    return (oneEuroIs.JPY/oneEuroIs.USD) * usd;

};

//Entrada en EURO, salida en USD
function fromEuroToDollar (euro){ 
    return oneEuroIs.USD * euro;
};

//Entrada en YEN, salida en GBP
function fromYenToPound(yen){ 
    return Math.round((oneEuroIs.GBP/oneEuroIs.JPY) * yen);
};


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };