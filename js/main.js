let gameEngine = new Engine(document.getElementById("root"));
let keyDownHandler = event => {
  if (event.code === "ArrowLeft") {
    gameEngine.player.moveLeft();
  }
  if (event.code === "ArrowRight") {
    gameEngine.player.moveRight();
  }
  if (event.code === "ArrowUp") {
    gameEngine.player.moveUp();
  }
  if (event.code === "ArrowDown") {
    gameEngine.player.moveDown();
  }
};
document.addEventListener("keydown", keyDownHandler);

let start = document.getElementById("start-game");
start.addEventListener("click", () => {
  removeStart();
  let music = new Audio("sounds/katamari.mp3");
  music.volume = "0.8";
  music.play();
  music.loop = true;
  setInterval(() => {
    if (maxEnemies < 7) {
      maxEnemies++;
    }
  }, 50000);

  setInterval(() => {
    if (speed < 1.5) {
      speed = speed + 0.1;
    }
  }, 50000);
  gameEngine.gameLoop();
});

let restart = document.getElementById("restart");
restart.addEventListener("click", () => {
  location.reload();
});

removeStart = () => {
  let gameStart = document.getElementById("game-start");
  gameStart.style.visibility = "hidden";
};

addStart = () => {
  let gameStart = document.getElementById("game-start");
  gameStart.style.visibility = "visible";
};

addRestart = () => {
  let gameEnd = document.getElementById("game-end");
  gameEnd.style.visibility = "visible";
};
