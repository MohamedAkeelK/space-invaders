// entity creates an element and 

export default class Entity {
  constructor({ tag = "div", className = "" } = {}) {
    this.el = document.createElement(tag);
    document.body.append(this.el);
    this.el.className = className;
  }
  setX(x) {
    this.x = x;
    this.el.style.left = `${this.x}px`;
  }
  setY(y) {
    this.y = y;
    this.el.style.top = `${this.y}px`;
  }
}