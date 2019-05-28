class Enemy {
  constructor(root, enemySpot) {
    this.root = root;
    this.spot = enemySpot;
    this.x = enemySpot * ENEMY_WIDTH;
    this.y = -ENEMY_HEIGHT;
    this.destroyed = false;
    this.checked = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/bag.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    this.domElement.style.opacity = "0.7";
    this.domElement.className = "enemy";
    root.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25 + speed;
  }
  update = timeDiff => {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = this.y + "px";
    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
    // if (this.y + ENEMY_HEIGHT > GAME_HEIGHT) {
    //   let height = this.domElement.offsetHeight;
    //   console.log("height", height);
    //   this.domElement.style.height = height - 6 + "px";
    //   console.log("new height", this.domElement.style.height);
    // }
  };
}
