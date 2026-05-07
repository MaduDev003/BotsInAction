import {
  renderTopMenu,
  setupTopMenuEvents,
} from "../components/topMenuComponent";

import { setBackground } from "../utils/setBackground";

import {
  renderCharacter,
  characterMovement,
  createCharacter,
  checkCharacterCollisions,
  getCharacterInstance,
} from "../services/characterService";

import { pauseMusic, playMusic } from "../services/audioService";
import { lifeManager } from "../services/lifeService";
import startItemSpawner from "../services/gameObjectsService";
import { updateScore } from "../services/scoreService";

let isGamePaused = false;
let controlsInitialized = false;

export function renderGameScreen() {
  const app = document.querySelector("#app");

  if (!app) return;

  setBackground("/src/assets/images/background.png");

  app.innerHTML = `
    <div class="bg-neutral-900/20 backdrop-blur-sm w-screen h-20 relative">

      <div id="topMenu">
        ${renderTopMenu()}
      </div>

      <div class="absolute top-5 left-4 z-40">
        <div class="flex items-center gap-3 bg-zinc-900/70 px-4 py-2 rounded-xl">

          <div id="lives" class="flex gap-1"></div>

          <div class="w-px h-4 bg-white/20"></div>

          <div id="score">
            <span class="text-white/70">
              Pontos: 0
            </span>
          </div>

        </div>
      </div>
    </div>

    <div
      id="gameArea"
      class="w-screen h-[calc(100vh-80px)] relative overflow-hidden"
    >
      <img
        id="character"
        src="/src/assets/images/characters/${renderCharacter()}.png"
        class="w-44 h-44 sm:w-52 sm:h-52 md:w-56 md:h-56 lg:w-60 lg:h-60 object-contain absolute bottom-2"
        alt="Personagem"
      />
    </div>
  `;

  createCharacter();
  setupTopMenuEvents();
  lifeManager();
  setupControls();

  characterMovement(() => isGamePaused);
  startItemSpawner(() => isGamePaused);

  setInterval(checkCollisions, 100);
}

function setupControls() {
  if (controlsInitialized) return;

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault();
      togglePause();
    }
  });

  controlsInitialized = true;
}

function checkCollisions() {
  const collision = checkCharacterCollisions();

  if (!collision) return;

  const typeOfItem = collision.dataset.type;
  const character = getCharacterInstance();

  if (typeOfItem === "javascript") {
    character.activateProtection();
  }

  if (
    typeOfItem === "bug" &&
    character.getProtectionState()
  ) {
    collision.remove();
    return;
  }

  updateScore(typeOfItem || "");
  collision.remove();
}


function togglePause() {
  isGamePaused = !isGamePaused;

  isGamePaused ? pauseMusic() : playMusic();

  document.querySelectorAll(".animate-fall").forEach((item) => {
    (item as HTMLElement).style.animationPlayState = isGamePaused
      ? "paused"
      : "running";
  });
}