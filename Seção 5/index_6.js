// try{
//     console.log(nome);
// }
// catch(e){
//     console.log("não foi possivel imprimir nome.");
//     console.log(e.nome);
//     console.log(e.message);
// }
// console.log("oi...");

function dividir(num1,num2){
    if(num1 === 0 || num2 === 0){
        throw("os valores devem ser positivos");
    }
    else{
        return num1 / num2;
    }
}
try{
    let ret = dividir(8,2);
    console.log(ret);
}
catch(e){
    console.log("não foi possível dividir.");
}
finally{
    console.log("vamos continuar...")
}