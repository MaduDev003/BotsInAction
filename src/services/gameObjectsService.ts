import type { ItemType } from "../types/itemTypes";

import { isGamePaused }
  from "../services/gameService";

let spawnCount = 0;

let spawnerInterval: number;

export default function startItemSpawner() {
  clearInterval(spawnerInterval);

  spawnerInterval = window.setInterval(() => {
    if (isGamePaused) return;

    const type = getRandomType();

    spawnItem(type);

  }, 700);
}

function getRandomType(): ItemType {
  spawnCount++;

  const isSmallScreen = window.innerWidth < 640;

  const rand = Math.random();

  if (isSmallScreen) {
    if (rand < 0.35) return "bug";
    if (rand < 0.45) return "javascript";
    if (rand < 0.75) return "tailwind";
    return "html";
  }

  if(rand < 0.25) return "crashError";
  if (rand < 0.4) return "bug";
  if (rand < 0.2) return "javascript";
  if (rand < 0.9) return "tailwind";

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
