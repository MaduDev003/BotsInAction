import type { ItemType } from "../types/itemTypes";
import { isGamePaused } from "../services/gameService";
import bug from '../assets/images/bug.png';
import crashError from '..assets/images/crashError.png';
import javaScript from '..assets/images/javaScript.png';
import tailwind from '..assets/images/tailwind.png';
import html from '..assets/images/html.png';


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
    if (rand < 0.45) return "javaScript";
    if (rand < 0.75) return "tailwind";
    return "html";
  }

  if(rand < 0.25) return "crashError";
  if (rand < 0.4) return "bug";
  if (rand < 0.2) return "javaScript";
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
    bug,
    crashError,
    javaScript,
    tailwind,
    html,
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
