//criando o botão com texto
var btn = document.createElement("button");
btn.innerHTML = "Change the color"; 

//adicionando estilo ao botão
btn.style.position = "absolute";
btn.style.left = "650px";
btn.style.top = "150px";

//adicionando o botão no body
document.body.appendChild(btn);

//adicionando função de clique para mudar a cor
btn.onclick = function(){
  var r = Math.floor((Math.random() * 255) + 0);
  var g = Math.floor((Math.random() * 255) + 0);
  var b = Math.floor((Math.random() * 255) + 0);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}