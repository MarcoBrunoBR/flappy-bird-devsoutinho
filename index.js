function loop() {
  GameBackground.draw();
  GameFloor.draw();
  PlayerBird.draw();

  PlayerBird.y = PlayerBird.y + 1;

  requestAnimationFrame(loop);
}

loop();