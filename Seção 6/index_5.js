let numeros = [1,2,3,4,5,6];

function dobrar(valor){
    return valor * 2;
} 
let ret1 = numeros.map(dobrar);
console.log(numeros);
console.log(ret1)

let ret2 = numeros.map(function(valor){
    return valor * 2;
});
console.log(ret2);
console.log(dobrar(9));

let valor = 8;
const outra = (function(valor){
    return valor * 2;
});
 console.log(outra(9));

function somar(v1,v2){
    return v1 + v2;
}
let = monstrar = function(n1,n2, calculo = somar){
    console.log(calculo(n1,n2));
}
mostrar(2,4);
