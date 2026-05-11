import { resetLives } from "./lifeService";
import { renderGameScreen } from "../screens/gameScreen";
import { pauseMusic, playMusic } from "./audioService";
import { characterMovement, getCharacterInstance } from "./characterService";
import { getScoreStats } from "./scoreService";

let isGamePaused = false;

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
  characterMovement(() => isGamePaused);
}

export function gameOver() {
  const app = document.querySelector("#app") as HTMLElement;

  const { currentScore, minScore, maxScore } = getScoreStats();

  app.innerHTML = `
  
    <div class="w-full min-h-screen bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">

      <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-10 w-full max-w-lg text-white flex flex-col items-center gap-6 shadow-2xl">

        <h1 class="text-5xl sm:text-6xl font-bold text-red-700 animate-pulse">
          Game Over
        </h1>

         <p class="text-zinc-400 text-center text-base sm:text-lg">
          Os bugs dominaram o sistema.
        </p>

        <div class="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div class="bg-zinc-800 rounded-xl p-4 flex flex-col items-center">
            <span class="text-sm text-zinc-400">
              Melhor Score
            </span>

            <p class="text-3xl font-bold text-green-600">
              ${maxScore}
            </p>
          </div>

          <div class="bg-zinc-800 rounded-xl p-4 flex flex-col items-center">
            <span class="text-sm text-zinc-400">
              Menor Score
            </span>

            <p class="text-3xl font-bold text-red-700">
              ${minScore}
            </p>
          </div>

          <div class="bg-zinc-800 rounded-xl p-4 flex flex-col items-center">
            <span class="text-sm text-zinc-400">
              Score Atual
            </span>

            <p class="text-3xl font-bold text-white">
              ${currentScore}
            </p>
          </div>

        </div>

       

        <div class="flex flex-col sm:flex-row gap-4 w-full">

          <button
            id="restartBtn"
            class="flex-1 bg-blue-600 hover:bg-blue-500 transition-all rounded-xl py-4 font-semibold active:scale-95"
          >
            Reiniciar
          </button>

          <button
            id="mainMenuBtn"
            class="flex-1 bg-zinc-800 hover:bg-zinc-700 transition-all rounded-xl py-4 font-semibold active:scale-95"
          >
            Menu Principal
          </button>

        </div>

      </div>

    </div>
  `;

  const mainMenuBtn =
    document.querySelector("#mainMenuBtn");

  if (mainMenuBtn) {
    mainMenuBtn.addEventListener("click", () => {
      location.reload();
    });
  }

  const restartBtn =
    document.querySelector("#restartBtn");

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      resetLives();

      renderGameScreen();
    });
  }
}

export function pauseGame() {
  isGamePaused = true;
  getCharacterInstance().stopMovement();

  pauseMusic();

  document
    .querySelectorAll(".animate-fall")
    .forEach((item) => {

      (item as HTMLElement)
        .style.animationPlayState = "paused";
    });
}

export function resumeGame() {

  isGamePaused = false;

  playMusic();

  document
    .querySelectorAll(".animate-fall")
    .forEach((item) => {

      (item as HTMLElement)
        .style.animationPlayState = "running";
    });
}

export function togglePauseGame() {
  isGamePaused
    ? resumeGame()
    : pauseGame();
}