const GameBackground = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0,0, canvas.width, canvas.height)

    context.drawImage(
      sprites,
      GameBackground.spriteX, GameBackground.spriteY,
      GameBackground.largura, GameBackground.altura,
      GameBackground.x, GameBackground.y,
      GameBackground.largura, GameBackground.altura,
    );

    context.drawImage(
      sprites,
      GameBackground.spriteX, GameBackground.spriteY,
      GameBackground.largura, GameBackground.altura,
      (GameBackground.x + GameBackground.largura), GameBackground.y,
      GameBackground.largura, GameBackground.altura,
    );
  },
};