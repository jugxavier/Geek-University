function somar(num1,num2){
    return num1 + num2;
}
let res= somar(4,6);
// console.log(res);
// console.log(somar(10,15));

const executar = somar;
// console.log(executar(8,9));

function subtrair(num1,num2){
    return num1 - num2;
}
function faz_algo(num1,num2,funcao){
    return funcao(num1,num2);
}
// console.log(faz_algo(5,5,somar));
// console.log(faz_algo(8,6,subtrair));

function outra(funcao){
    return funcao;
}
const ret = outra(subtrair);
// console.log(ret(8,2));

/*
cidadãos de primeira classe
first-class citizens
migher-order function*/

function message(){
    console.log("evolua seu lado geek");
}
message();
 let valores = [1,3,4,true,somar];
 for(let i=0; i<valores.length;i++){
     console.log(typeof(valores[i]));
 }

















