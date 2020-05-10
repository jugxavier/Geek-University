const cursos =[
"programação para leigos",
"programação em C",
"programação em Java",
"programação em Python"
]
 function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}
//  cursos.forEach(apresentar);

//  cursos.forEach(function(curso, indicie){
//     console.log(`${indicie + 1} - ${curso}`);
// });

// cursos.forEach((curso, indicie) => console.log(`${indicie + 1} - ${curso}`));

const precos = [21.55, 25.33, 12.50, 154.45, 58.47,66.40];

let menores = []
// for(let p in precos){
//     if(precos[p]<50){
//         menores.push(precos[p]);
//     }
// }
// for(let i = 0; i < precos.length; i++){
//     if(precos[i] < 50){
//         menores.push(precos[i]);
//     }
// }
// console.log(menores);

// menores=precos.filter(function(preco){
//     return preco < 50;
// })
// console.log(menores);
menores = precos.filter(preco => preco < 50);
console.log(menores);
