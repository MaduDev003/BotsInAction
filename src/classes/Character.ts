export default class Character {
  element: HTMLElement;
  x: number;
  speed: number;
  private locked: boolean;
  private isProtected: boolean;
  private protectionTimeout: any;

  constructor(element: HTMLElement) {
    this.element = element;
    this.x = 0;
    this.speed = 25;
    this.locked = false;
    this.isProtected = false;
  }

  move(direction: "left" | "right") {
    if (this.locked) return;

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

  stopMovement() {
    this.locked = true;
  }

  resumeMovement() {
    this.locked = false;
  }

  activateProtection(duration = 10000) {
    this.isProtected = true;

    clearTimeout(this.protectionTimeout);

    this.protectionTimeout = setTimeout(() => {
      this.isProtected = false;
    }, duration);
  }

  getProtectionState() {
    return this.isProtected;
  }

}