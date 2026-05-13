
import { gameOver } from "./gameService";
import blackHeart from '../assets/images/blackHeart.png';
import redHeart from '../assets/images/redHeart.png';


let currentLives = 4;

export function lifeManager() {
  const lives = document.querySelector("#lives") as HTMLElement;

  if (!lives) return;

  lives.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const img = document.createElement("img");

    img.src =
      i < currentLives
        ? redHeart
        : blackHeart;

    img.className = "w-6 h-6";

    lives.appendChild(img);
  }
}

export function loseLife(amount: number = 1) {
  currentLives = Math.max(0, currentLives - amount);

  lifeManager();

  if (currentLives <= 0) {
    gameOver();
  }
}

export function gainLife(){
  currentLives = Math.min(4, currentLives + 1);

  lifeManager();

   if (currentLives <= 0) {
    gameOver();
  }
}

export function resetLives() {
  currentLives = 4;
  lifeManager();

}