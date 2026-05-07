export default class Character {
  element: HTMLElement;
  x: number;
  speed: number;

  constructor(element: HTMLElement) {
    this.element = element;
    this.x = 0;
    this.speed = 25;
  }

  move(direction: "left" | "right") {
    const gameArea = document.querySelector("#gameArea") as HTMLElement;

    if (!gameArea) return;

    if (direction === "left") {
      this.x -= this.speed;
    }

    if (direction === "right") {
      this.x += this.speed;
    }

    this.x = Math.max(
      0,
      Math.min(
        this.x,
        gameArea.clientWidth - this.element.clientWidth
      )
    );

    this.render();
  }

  render() {
    this.element.style.transform = `translateX(${this.x}px)`;
  }
}