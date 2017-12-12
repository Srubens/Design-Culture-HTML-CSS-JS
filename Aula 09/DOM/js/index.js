var divRetornada = document.getElementById("testeJS");

var imagem = document.createElement("img");

imagem.style.width = "300px";

imagem.setAttribute("src", "http://bit.ly/2BgiVkP");

divRetornada.appendChild(imagem);

imagem.onclick = function(){
  alert("cliquei na imagem");
}