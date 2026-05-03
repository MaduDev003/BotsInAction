import {
  renderTopMenu,
  setupTopMenuEvents,
} from "../components/topMenuComponent";
import { setBackground } from "../utils/setBackground";
import type { ItemType } from "../types/itemTypes";

let score = 0;
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
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/blackHeart.png" class="w-5 h-5">
          </div>

          <div class="w-px h-4 bg-white/20"></div>

          <div id="score">
            <span class="text-white/70">Pontos: 0</span>
          </div>
        </div>
      </div>
    </div>

    <div id="gameArea" class="w-screen h-[calc(100vh-80px)] relative overflow-hidden">
      <img 
        id="character"
        src="/src/assets/images/characters/${renderCharacter()}.png"
        class="w-60 h-60 absolute bottom-2"
      >
    </div>
  `;

  setupTopMenuEvents();
  setupControls();
  characterMovement();
  startItemSpawner();

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
  item.style.left = `${Math.random() * (gameArea.clientWidth - 96)}px`;

  item.dataset.type = type;

  const images = {
    bug: "/src/assets/images/bug.png",
    crashError: "/src/assets/images/crashError.png",
    javascript: "/src/assets/images/javaScript.png",
    tailwind: "/src/assets/images/tailwind.png",
    html: "/src/assets/images/html.png",
  };

  item.innerHTML = `<img src="${images[type]}" class="w-full h-full">`;

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

  if (type === "bug") value = -1;
  else if (type === "crashError") value = -2;
  else value = 1;

  score = Math.max(0, score + value);
  scoreElement.textContent = `Pontos: ${score}`;
}

function togglePause() {
  isGamePaused = !isGamePaused;

  document.querySelectorAll(".animate-fall").forEach((item) => {
    (item as HTMLElement).style.animationPlayState =
      isGamePaused ? "paused" : "running";
  });
}

function renderCharacter() {
  return localStorage.getItem("selectedCharacter") || "boot2";
}

function characterMovement() {
  if (movementInitialized) return;

  const character = document.querySelector("#character") as HTMLElement;
  if (!character) return;

  let x = 0;

  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") x -= 10;
    if (e.code === "ArrowRight") x += 10;

    const gameArea = document.querySelector("#gameArea") as HTMLElement;
    if (gameArea) {
      x = Math.max(0, Math.min(x, gameArea.clientWidth - character.clientWidth));
    }

    character.style.transform = `translateX(${x}px)`;
  });

  movementInitialized = true;
}