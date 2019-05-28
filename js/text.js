class Text {
  constructor(root, xPos, yPos) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = xPos + "px";
    div.style.top = yPos + "px";
    div.style.color = "white";
    div.style.font = "bold 30px Impact";
    div.style.zIndex = 2000;
    div.innerText = "0";
    div.style.textShadow =
      "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
    root.appendChild(div);
    this.domElement = div;
  }
  update = text => {
    this.domElement.innerText = text;
  };
}
