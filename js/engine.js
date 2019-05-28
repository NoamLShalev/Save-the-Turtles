class Engine {
  constructor(root) {
    this.root = root;
    this.player = new Player(this.root);
    this.others = [];
    this.score = new Text(this.root, 20, 20);
  }
  gameLoop = () => {
    if (this.lastFrame === undefined) {
      this.lastFrame = new Date().getTime();
    }
    let timeDiff = new Date().getTime() - this.lastFrame;
    this.lastFrame = new Date().getTime();
    this.others.forEach(other => {
      other.update(timeDiff);
    });
    this.others = this.others.filter(other => {
      return !other.destroyed;
    });

    while (this.others.length < maxEnemies) {
      let spot = nextEnemySpot(this.others);
      let choice = Math.floor(Math.random() * 10);
      if (choice < 9) {
        this.others.push(new Enemy(this.root, spot));
      }
      if (choice === 9 || choice === 10) {
        this.others.push(new Jellyfish(this.root, spot));
      }
    }
    let score = this.score.domElement.innerText;
    score = Number(score);
    this.score.update(score + 1);

    if (this.hitJellyfish()) {
      let lifeThree = document.getElementById("life-three");
      let lifeTwo = document.getElementById("life-two");
      let lifeOne = document.getElementById("life-one");
      let lifeZero = document.getElementById("life-zero");
      caught = false;
      if (life < 3) {
        life = life + 1;
      }
      if (life === 3) {
        lifeThree.style.visibility = "visible";
        lifeTwo.style.visibility = "hidden";
        lifeOne.style.visibility = "hidden";
        lifeZero.style.visibility = "hidden";
      }
      if (life === 2) {
        lifeThree.style.visibility = "hidden";
        lifeTwo.style.visibility = "visible";
        lifeOne.style.visibility = "hidden";
        lifeZero.style.visibility = "hidden";
      }
    }

    if (this.isPlayerDead()) {
      let lifeThree = document.getElementById("life-three");
      let lifeTwo = document.getElementById("life-two");
      let lifeOne = document.getElementById("life-one");
      let lifeZero = document.getElementById("life-zero");
      dead = false;
      life = life - 1;
      if (life === 2) {
        lifeThree.style.visibility = "hidden";
        lifeTwo.style.visibility = "visible";
        lifeOne.style.visibility = "hidden";
        lifeZero.style.visibility = "hidden";
      }
      if (life === 1) {
        lifeThree.style.visibility = "hidden";
        lifeTwo.style.visibility = "hidden";
        lifeOne.style.visibility = "visible";
        lifeZero.style.visibility = "hidden";
      }
      if (life === 0) {
        lifeThree.style.visibility = "hidden";
        lifeTwo.style.visibility = "hidden";
        lifeOne.style.visibility = "hidden";
        lifeZero.style.visibility = "visible";
        let enemy = document.querySelector(".enemy");
        let root = document.getElementById("root");
        root.removeChild(enemy);
        if (document.querySelector(".jelly") !== null) {
          let jelly = document.querySelector(".jelly");
          root.removeChild(jelly);
        }
        addRestart();
        return;
      }
    }
    setTimeout(this.gameLoop, 20);
  };
  isPlayerDead = () => {
    this.others.forEach(other => {
      if (other.domElement.className === "enemy" && other.checked === false) {
        if (
          other.x < this.player.x + PLAYER_WIDTH &&
          other.x + ENEMY_WIDTH > this.player.x &&
          other.y < this.player.y + PLAYER_HEIGHT &&
          other.y + ENEMY_HEIGHT > this.player.y
        ) {
          dead = true;
          other.checked = true;
          let plastic = new Audio("sounds/plastic.mp3");
          plastic.volume = 0.5;
          plastic.play();
          other.domElement.style.visibility = "hidden";
        }
      }
    });
    return dead;
  };
  hitJellyfish = () => {
    this.others.forEach(other => {
      if (other.domElement.className === "jelly" && other.checked === false) {
        if (
          other.x < this.player.x + PLAYER_WIDTH &&
          other.x + ENEMY_WIDTH > this.player.x &&
          other.y < this.player.y + PLAYER_HEIGHT &&
          other.y + ENEMY_HEIGHT > this.player.y
        ) {
          caught = true;
          other.checked = true;
          let bloop = new Audio("sounds/bloop.mp3");
          bloop.volume = 0.9;
          bloop.play();
          other.domElement.style.visibility = "hidden";
        }
      }
    });
    return caught;
  };
}
