function calcular_idade(ano_nascimento){ 
    const data = new Date();
    const idade = data.getFullYear() - ano_nascimento
    return idade;
}
// let d = new Date();
// console.log(calcular_idade(2003));

// let ret = calcular_idade(2003, "felicity");
// console.log(ret);

function calcular_idade2(ano_nascimento){
    const data=new Date();
    const idade = data.getUTCFullYear() - ano_nascimento;
    console.log(idade);
}
let ret = calcular_idade2(2003);
// console.log(ret+3);

// calcular_idade2(2003);

// const data = new Date();
// console.log("data completa:" + date);
// console.log("ano" + data.getFullYear());
// console.log("mês:"+ data.getMonth());

function somar(num1,num2){
    return num1 + num2;
}
console.log(somar(4, 6));
console.log(somar(4));
console.log(somar(4,6,8))
console.log(somar(4,6,8,3,2,1));
