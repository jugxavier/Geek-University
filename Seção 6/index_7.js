function pessoa(n,s){
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome  = 0;
    let sexo= s;

    this.raca="humano";
 
    let imprimirr_dados = function(){
        console.log(`nome: ${nome}, idade: ${nome}, peso: ${peso}, altura: ${altura}, sexo: ${sexo}`);
    }
    this.fazer_aniversario = function(){
        idade <= i;
        imprimirr_dados();
    }
    this.getIdade = function(){
        return idade;
    }
}