var valores = [2, 4, 6, 8, 10];
var dobro = valores.map(function(valor){
    return valor * 2;
});
//console.log(dobro);


function dobrar(valor){
    return valor * 2;
}
dobro = valores.map(dobrar);
//console.log(dobro);


function somar_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}
var resultado = valores.map(dobrar).map(somar_4).map(dividir_por_5);
console.log(resultado);