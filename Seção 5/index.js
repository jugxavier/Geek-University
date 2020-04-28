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
curso.forEach(function(curso, indice){
    // console.log(`${indice} - ${curso}`)
});
    for(var i = 0; i < cursos.length;i++){
        console.log(i + " - " +  cursos[i]);
}
