class Jellyfish {
  constructor(root, jellySpot) {
    this.root = root;
    this.spot = jellySpot;
    this.x = jellySpot * JELLY_WIDTH;
    this.y = -JELLY_HEIGHT;
    this.destroyed = false;
    this.checked = false;
    this.domElement = document.createElement("img");
    this.destroyed = false;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/jellyfish.png";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 5;
    this.domElement.className = "jelly";
    root.appendChild(this.domElement);
    this.speed = Math.random() / 2 + 0.25;
  }
  update = timeDiff => {
    this.y = this.y + timeDiff * this.speed;
    this.domElement.style.top = this.y + "px";
    if (this.y > GAME_HEIGHT) {
      this.root.removeChild(this.domElement);
      this.destroyed = true;
    }
  };
}
