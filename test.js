// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

// importo la funcion desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./convertidor.js')

test("One euro should be 1.206 dollars", function(){
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});


test("twelve dollar should be 1.279 yens", function(){

    expect(fromDollarToYen(12)).toBe(1279);
});


test("33000 yen should be 206.41 GBP", function(){
    expect(fromYenToPound(33000)).toBe(206)
});