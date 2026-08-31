const btnAleatorio = document.getElementById("btn-aleatorio");

function moverAleatoriamente() {
  const container = btnAleatorio.parentElement;
  
  const maxWidth = container.clientWidth - btnAleatorio.clientWidth;
  const maxHeight = container.clientHeight - btnAleatorio.clientHeight;

  const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
  const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

  btnAleatorio.style.left = `${randomX}px`;
  btnAleatorio.style.top = `${randomY}px`;
}

// Funciona tanto para el mouse en PC como para el toque en celular
btnAleatorio.addEventListener("mouseover", moverAleatoriamente);
btnAleatorio.addEventListener("click", moverAleatoriamente);
btnAleatorio.addEventListener("touchstart", moverAleatoriamente);