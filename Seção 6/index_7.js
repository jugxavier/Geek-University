function pessoa(n, s, raca = "humano"){
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome  = n;
    let sexo= s;

    this.raca=raca;
 
    let imprimir_dados = function(){
        console.log(`nome: ${nome}, idade: ${idade}, peso: ${peso}, altura: ${altura}, sexo: ${sexo}, raça: ${raca}`);
    }
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }
    this.getIdade = function(){
        return idade;
    }
}
const juliana = new pessoa("juliana","feminino");

console.log(juliana);
console.log(juliana.peso)
console.log(juliana.raca);
juliana.fazer_aniversario();
juliana.fazer_aniversario();

// const felicity = new pessoa("felicity","feminino");
// felicity.fazer_aniversario();
// console.log(felicity.getIdade());
// console.log(typeof(pessoa));
// console.log(typeof(felicity));