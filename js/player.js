class Player {
  constructor(root) {
    this.x = 2 * PLAYER_WIDTH;
    this.y = GAME_HEIGHT - PLAYER_HEIGHT;
    this.domElement = document.createElement("img");
    this.domElement.src = "images/turtle.gif";
    this.domElement.style.position = "absolute";
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    this.domElement.style.zIndex = 10;
    this.domElement.className = "player";
    root.appendChild(this.domElement);
  }
  moveLeft = () => {
    if (this.x > 0) {
      this.x = this.x - PLAYER_WIDTH;
    }
    this.domElement.style.left = this.x;
  };
  moveRight = () => {
    if (this.x + PLAYER_WIDTH < GAME_WIDTH - 20) {
      this.x = this.x + PLAYER_WIDTH;
    }
    this.domElement.style.left = this.x;
  };
  moveDown = () => {
    if (this.y + PLAYER_HEIGHT < GAME_HEIGHT - 10) {
      this.y = this.y + PLAYER_HEIGHT;
    }
    this.domElement.style.top = this.y;
  };
  moveUp = () => {
    if (this.y > 10) {
      this.y = this.y - PLAYER_HEIGHT;
    }
    this.domElement.style.top = this.y;
  };
}
