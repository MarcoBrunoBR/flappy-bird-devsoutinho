console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

function loop() {
  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();

  flappyBird.y = flappyBird.y + 1;

  requestAnimationFrame(loop);
}

loop();