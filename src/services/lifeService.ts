let currentLives = 4;

export function lifeManager() {
  const lives = document.querySelector("#lives") as HTMLElement;

  if (!lives) return;

  lives.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const img = document.createElement("img");

    img.src =
      i < currentLives
        ? "/src/assets/images/redHeart.png"
        : "/src/assets/images/blackHeart.png";

    img.className = "w-6 h-6";

    lives.appendChild(img);
  }
}

export function loseLife(amount: number = 1) {
  currentLives = Math.max(0, currentLives - amount);

  lifeManager();

  if (currentLives <= 0) {
    alert("Game Over");
  }
}

export function resetLives() {
  currentLives = 4;
  lifeManager();

}