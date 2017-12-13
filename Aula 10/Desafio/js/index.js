// gerando valor randômico entre 1 e 10
var randomNum = Math.floor(Math.random() * 10) + 1;

//pegando o elemento HTML do botão e resultado
var botao = document.getElementById("botao");
var resultado = document.getElementById("resultado");

//setando a lógica de comparação e validações no clique do botão
botao.onclick = function(){
  var texto = document.getElementById("texto").value;
  if(texto && texto.length > 0){
    if(Number(texto) >= 0 && Number(texto) <= 10){
      if(Number(texto) === randomNum){
        resultado.innerHTML = "Acertou!";
        resultado.style.color = "green";
      }else{
        resultado.innerHTML = "Você errou, tente outro número!";
        resultado.style.color = "red";
      }
    } else{
      resultado.innerHTML = "Digite um número entre 1 e 10.";
      resultado.style.color = "red";
    }
  }else{
    resultado.innerHTML = "Digite um valor.";
    resultado.style.color = "red";
  }
}