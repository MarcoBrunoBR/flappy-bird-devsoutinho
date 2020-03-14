const GameFloor = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  draw() {
    context.drawImage(
      sprites,
      GameFloor.spriteX, GameFloor.spriteY,
      GameFloor.largura, GameFloor.altura,
      GameFloor.x, GameFloor.y,
      GameFloor.largura, GameFloor.altura,
    );

    context.drawImage(
      sprites,
      GameFloor.spriteX, GameFloor.spriteY,
      GameFloor.largura, GameFloor.altura,
      (GameFloor.x + GameFloor.largura), GameFloor.y,
      GameFloor.largura, GameFloor.altura,
    );
  },
};