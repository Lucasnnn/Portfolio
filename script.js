var fundojs = document.getElementById("fundo");
var cores = fundojs.getContext("2d");

fundojs.height = window.innerHeight * 1.2;
fundojs.width = window.innerWidth;

var letras = "</>#";

letras = letras.split("");

var font_size = 10;
var colunas = fundojs.width / font_size;

var gotas = [];

for (var x = 0; x < colunas; x++) gotas[x] = 1;

function chuva() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const corletras = "#" + randomColor;

  cores.fillStyle = "rgba(255, 255, 255, 0.04)";
  cores.fillRect(0, 0, fundojs.width, fundojs.height);

  cores.fillStyle = corletras; //green text
  cores.font = font_size + "px arial";

  for (var i = 0; i < gotas.length; i++) {
    var text = letras[Math.floor(Math.random() * letras.length)];
    //x = i*font_size, y = value of drops[i]*font_size
    cores.fillText(text, i * font_size, gotas[i] * font_size);

    if (gotas[i] * font_size > fundojs.height && Math.random() > 0.975)
      gotas[i] = 0;

    gotas[i]++;
  }
}

setInterval(chuva, 35);
