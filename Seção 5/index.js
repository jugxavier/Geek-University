var cursos = [
    "progamação para leigos",
    "lgoritimos e logica de programação",
    "programação em C",
    "programação em java",
    "programação em python",
    "programação web com django fremework",
    "programação em javaScript"
];
//console.log(cursos);
//console.log(cursos.length);
 function imprimir(curso, indice){
    console.log(indice + " - " + curso);
 }
//  cursos.forEach(imprimir)
cursos.forEach(function(curso, indice){
    // console.log(`${indice} - ${curso}`)
 });
//     for(var i = 0; i < cursos.length;i++){
//         console.log(i + " - " +  cursos[i]);
// }

// first test
let names = [
  "juliana",
  "joao",
  "maria",
  "lucia"
];
// console.log(name)
function print_out(name,index){
  console.log(index +" - "+ name)
}
// callback/lambdas
names.forEach(function(name,index,){
//   console.log(`${index} - ${name}`)
});
for(var i = 0; i < names.length;i++){
  console.log(i + " - " + names[i]);
}
