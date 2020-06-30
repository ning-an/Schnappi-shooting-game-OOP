// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of `"app"`
const gameEngine = new Engine(document.getElementById('app'));
// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed.
const keydownHandler = (event) => {
  // event.code contains a string. The string represents which key was press. If the
  // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
  if (event.code === 'ArrowLeft') {
    gameEngine.player.moveLeft();
  }

  // If `event.code` is the string that represents a right arrow keypress,
  // then move our hamburger to the right
  if (event.code === 'ArrowRight') {
    gameEngine.player.moveRight();
  }

  if (event.code === 'ArrowUp') {
    gameEngine.player.moveUp();
  }

  if (event.code === 'ArrowDown') {
    gameEngine.player.moveDown();
  }

  if (event.code === 'Space') {
    gameEngine.player.shootUp();
  }
};

// We call the gameLoop method to start the game
const startGame = (e) => {
  if (e.target.innerText == 'CONTINUE') {
    gameEngine.scoreBoard.style.display = 'none';
  } else  {
    e.target.style.display = 'none';
  }
  gameEngine.enemies.forEach( enemy => enemy.y = GAME_HEIGHT);
  gameEngine.root.removeChild(gameEngine.player.domElement);
  gameEngine.player = new Player(gameEngine.root);
  // gameEngine.bgm.currentTime = 0;
  gameEngine.bgm.play();
  document.addEventListener('keydown', keydownHandler);

  const stopWatch = setInterval(() => {
    timeIncrement(gameEngine.timer)
  }, 1000)
  
  const startGame = setInterval( () => {
    gameEngine.gameLoop();
    //check and update player
    if (gameEngine.isPlayerDead()) {
      gameEngine.collideSoundEffect.play();
      clearInterval(startGame);
      gameEngine.scoreBoard.style.display = 'block';
      document.removeEventListener('keydown', keydownHandler);
      clearInterval(stopWatch);
      if (gameEngine.lives.innerText.length > 2) {
        gameEngine.lives.innerText = `${gameEngine.lives.innerText.slice(2)}`;
        // gameEngine.bgm.pause();
      } else {
        gameEngine.lives.innerText = '';
        gameEngine.scoreBoard.innerHTML = `GAME OVER<br>💀<br>Score ${gameEngine.score.innerText}`;
        gameEngine.bgm.pause();
      }
    }
  }, time)
};


gameEngine.startBtn.addEventListener('click', startGame);
gameEngine.scoreBoard.addEventListener('click', startGame);
