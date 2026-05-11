import { gainLife, loseLife } from "./lifeService";

let score = 0;

export function resetScore() {
  score = 0;
}

export function updateScore(type: string) {
  const scoreElement = document.querySelector("#score span");

  if (!scoreElement) return;

  let value = 0;

  if (type === "bug") {
    loseLife(1);
  } else if (type === "crashError") {
    loseLife(1);
  } else if (type === "html") {
    gainLife();
    value = 1;
  } else {
    value = 1;
  }

  score = Math.max(0, score + value);

  scoreElement.textContent = `Pontos: ${score}`;
}

export function getScoreComparision() {
  let minScore = Number(localStorage.getItem("minScore")) || Infinity;
  let maxScore = Number(localStorage.getItem("maxScore")) || 0;

  let currentScore = score;

  if (currentScore < minScore) {
    localStorage.setItem("minScore", String(currentScore));
    minScore = currentScore;
  }

  if (currentScore > maxScore) {
    localStorage.setItem("maxScore", String(currentScore));
    maxScore = currentScore;
  }

  return {
    currentScore,
    minScore,
    maxScore,
  };
}