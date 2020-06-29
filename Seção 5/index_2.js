var valores = [2, 4, 6, 8, 10];
var dobro = valores.map(function(valor){
    return valor * 2;
});
// console.log(dobro);


function dobrar(valor){
    return valor * 2;
}
dobro = valores.map(dobrar);
// console.log(dobro);


function somar_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}
var resultado = valores.map(dobrar).map(somar_4).map(dividir_por_5);
console.log(resultado);

// 1º test

let values = [34, 44, 17, 88, 210];
function multiply(value){
    return value * 9;
}
let result = values.map(multiply);
// console.log(result);

//  2º test
let values = [88,57,32,11,98];
function share(value){
  return value /6;
}
let result = values.map(share);
// console.log(result)

// 3º test 
let values = [154, 484, 87, 23, 5000];
function add(value){
    return value + 9;
}
let result = values.map(add);
// console.log(result);

// 4º test 
let values = [34, 44, 17, 88, 210];
function multiply(value){
    return value * 9;
}
function add(value){
    return value + 9;
}                 
function share(value){
  return value /6;
}
let result = values.map(share).map(add).map(multiply);
console.log(result)

// when we have an array with certain values ​​we use map to map it, apply transformations and generate a new array already transformed.

