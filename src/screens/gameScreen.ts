import {
  renderTopMenu,
  setupTopMenuEvents,
} from "../components/topMenuComponent";

import { setBackground } from "../utils/setBackground";
import type { ItemType } from "../types/itemTypes";
import { pauseMusic, playMusic } from "../utils/audioManager";

let score = 0;
let currentLives = 5;

let isGamePaused = false;
let controlsInitialized = false;
let movementInitialized = false;

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

          <div id="lives" class="flex gap-1">
          </div>

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
        class="w-60 h-60 absolute bottom-2"
        alt="Personagem"
      >
    </div>
  `;

  setupTopMenuEvents();

  lifeManager();

  setupControls();

  characterMovement();

  startItemSpawner();

  setInterval(checkCollisions, 500);
}

function lifeManager() {
  const lives = document.querySelector("#lives") as HTMLElement;

  if (!lives) return;

  lives.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");

    img.src =
      i < currentLives
        ? "/src/assets/images/redHeart.png"
        : "/src/assets/images/blackHeart.png";

    img.className = "w-6 h-6";

    lives.appendChild(img);
  }
}

function loseLife(amount: number = 1) {
  currentLives = Math.max(0, currentLives - amount);

  lifeManager();

  if (currentLives <= 0) {
    alert("Game Over");
  }
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

function startItemSpawner() {
  setInterval(() => {
    if (isGamePaused) return;

    const type = getRandomType();

    spawnItem(type);
  }, 800);
}

function getRandomType(): ItemType {
  const rand = Math.random();

  if (rand < 0.1) return "bug";

  if (rand < 0.2) return "crashError";

  if (rand < 0.5) return "javascript";

  if (rand < 0.75) return "tailwind";

  return "html";
}

function spawnItem(type: ItemType) {
  const gameArea = document.querySelector("#gameArea") as HTMLElement;

  if (!gameArea) return;

  const item = document.createElement("div");

  item.className = "w-24 h-24 absolute animate-fall";

  item.style.top = "0px";

  item.style.left = `${
    Math.random() * (gameArea.clientWidth - 96)
  }px`;

  item.dataset.type = type;

  const images = {
    bug: "/src/assets/images/bug.png",
    crashError: "/src/assets/images/crashError.png",
    javascript: "/src/assets/images/javaScript.png",
    tailwind: "/src/assets/images/tailwind.png",
    html: "/src/assets/images/html.png",
  };

  item.innerHTML = `
    <img
      src="${images[type]}"
      alt="${type} item"
      class="w-full h-full"
    >
  `;

  gameArea.appendChild(item);
}

function checkCollisions() {
  if (isGamePaused) return;

  const character = document.querySelector("#character") as HTMLElement;

  const items = document.querySelectorAll(".animate-fall");

  if (!character) return;

  const c = character.getBoundingClientRect();

  items.forEach((item) => {
    const el = item as HTMLElement;

    const i = el.getBoundingClientRect();

    if (
      c.left < i.right &&
      c.right > i.left &&
      c.top < i.bottom &&
      c.bottom > i.top
    ) {
      updateScore(el.dataset.type || "");

      el.remove();
    }
  });
}

function updateScore(type: string) {
  const scoreElement = document.querySelector("#score span");

  if (!scoreElement) return;

  let value = 0;

  if (type === "bug") {
    value = -1;

    loseLife(1);

  } else if (type === "crashError") {
    value = -2;

    loseLife(2);

  } else {
    value = 1;
  }

  score = Math.max(0, score + value);

  scoreElement.textContent = `Pontos: ${score}`;
}

function togglePause() {
  isGamePaused = !isGamePaused;

  isGamePaused
    ? pauseMusic()
    : playMusic();

  document.querySelectorAll(".animate-fall").forEach((item) => {
    (item as HTMLElement).style.animationPlayState =
      isGamePaused
        ? "paused"
        : "running";
  });
}

function renderCharacter(): string {
  return (
    localStorage.getItem("selectedCharacter") ||
    "boot2"
  );
}

function characterMovement() {
  if (movementInitialized) return;

  const character = document.querySelector("#character") as HTMLElement;

  if (!character) return;

  let x = 0;

  const speed = 25;

  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      x -= speed;
    }

    if (e.code === "ArrowRight") {
      x += speed;
    }

    const gameArea = document.querySelector("#gameArea") as HTMLElement;

    if (gameArea) {
      x = Math.max(
        0,
        Math.min(
          x,
          gameArea.clientWidth - character.clientWidth
        )
      );
    }

    character.style.transform = `translateX(${x}px)`;
  });

  movementInitialized = true;
}