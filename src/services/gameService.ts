import { resetLives } from "./lifeService";

export function restartGame() {

  const scoreElement = document.querySelector(
    "#score span"
  ) as HTMLElement;

  if (scoreElement) {
    scoreElement.textContent = "Pontos: 0";
  }

  document
    .querySelectorAll(".animate-fall")
    .forEach((item) => item.remove());

  const character = document.querySelector(
    "#character"
  ) as HTMLElement;

  if (character) {
    character.style.transform = "translateX(0px)";
  }
  resetLives();
}