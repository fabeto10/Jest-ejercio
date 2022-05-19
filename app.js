// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(1))
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9

    return valueInYen
}
console.log(fromDollarToYen(1))

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8
    return valueInPound
}
console.log(1)
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen }