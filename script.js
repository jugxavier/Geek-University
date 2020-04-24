function gritar(){
    alert("Ahhhhh!");
}
function perguntar(){
    var nome;
    nome = prompt("Qual é o seu nome?");
    alert("Olá, seja bem vindo(a)"+" "+nome);
}
function mudar_texto(){
    var h1= document.getElementsByTagName("h1");
    if(h1[0].innerText =="Geek University"){
         h1[0].innerText="Evolua seu lado geek!";
    }
    else{
        h1[0].innerText="Geek University";
    }
}
function incrementar(){
    var pl =document.getElementById("pl");
    pl.innerText=parseInt(pl.innerText)+1;
}