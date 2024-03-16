function no() {
   alert("Parabens escolheu o certo!")
}

const btn = document.querySelector(".btn")
function geraPosicao(min, max) {
   return (Math.random() * (max - min) + min) + "%";
}
function yes() {
   btn.style.position = 'absolute';
   btn.style.bottom = geraPosicao(5, 45);
   btn.style.left = geraPosicao(5, 45);
}