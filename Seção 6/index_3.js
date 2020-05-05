function somar(){
    let soma = 0
    for(let  i  = 0; 1 < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}
// console.log(somar());
// console.log(somar(2));
// console.log(somar(2,5));
// console.log(somar(5,3,9));
// console.log(somar(2,4,5,8,12));


 function imprime_valores(num1,num2){
     for(let i in arguments){
         console.log(arguments[i]);
     }
 }
//  imprime_valores();
//  imprime_valores(4,6);
//  imprime_valores(4,6,8);
//  imprime_valores(3,8,12,44,78);


function somar2(num2,num2,num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    
    return num1 + num2 + num3;
}
// console.log(somar2(4,5,6));
// console.log(somar2());
// console.log(somar2(2));
// console.log(somar2(2,2,));
// console.log(somar2(2,2,2));
// console.log(somar2(2,2,2,2,));

// console.log(somar2(0,0,0));
 
function somar3(num1,num2,num3){
    num1 = isNaN(num1)? 1 : num1;
    num2 = isNaN(num2)? 2 : num2;
    num3 = isNaN(num3)? 3 : num3;
    var teste = 1

    
    // return num1 + num2 + num3;
}
console.log(teste)
// console.log(somar3())
// console.log(somar3(4,5,6));
// console.log(somar3());
// console.log(somar3(2));
// console.log(somar3(2,2));
// console.log(somar3(2,2,2));
// console.log(somar3(2,2,2,2));

// console.log(somar3(0,0,0));

function somar4(num1=1, num2=2, num3=3){
    return num1 + num2 + num3;
}

// console.log(somar4(4,5,6));
// console.log(somar4());
// console.log(somar4(2));
// console.log(somar4(2,2));
// console.log(somar4(2,2,2));
// console.log(somar4(2,2,2,2));
// console.log(somar4(0,0,0));

// console.log(somar4("b"));

