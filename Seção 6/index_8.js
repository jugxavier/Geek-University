// let juliana = "global";
// function imprimir(){
//     console.log(juliana);
// }
// function outra(){
//     let juliana = "local";
//     imprimir();
//     console.log(juliana)
// }
// outra();

let variavel = "global";
function externa(){
    let variavel = "local"

    function interna(){
        return variavel;
    }
    return interna;
}
let executa = externa();
console.log(executa());