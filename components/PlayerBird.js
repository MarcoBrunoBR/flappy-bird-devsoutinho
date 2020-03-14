const PlayerBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  draw() {
    context.drawImage(
      sprites,
      PlayerBird.spriteX, PlayerBird.spriteY, // Sprite X, Sprite Y
      PlayerBird.largura, PlayerBird.altura, // Tamanho do recorte na sprite
      PlayerBird.x, PlayerBird.y,
      PlayerBird.largura, PlayerBird.altura,
    );
  }
}