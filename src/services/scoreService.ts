import { loseLife } from "./lifeService";

let score = 0;

export function resetScore() {
  score = 0;
}

export function updateScore(type: string) {
  const scoreElement = document.querySelector("#score span");

  if (!scoreElement) return;

  let value = 0;

  if (type === "bug") {
    value = -1;

    loseLife(1);

  } else if (type === "crashError") {
    value = -1;

    loseLife(1);

  } else {
    value = 1;
  }

  score = Math.max(0, score + value);

  scoreElement.textContent = `Pontos: ${score}`;
}