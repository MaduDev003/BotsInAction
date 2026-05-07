import type { ItemType } from "../types/itemTypes";
let spawnCount = 0;

export default function startItemSpawner(isGamePaused: boolean) {
  setInterval(() => {
    if (isGamePaused) return;

    const type = getRandomType();

    spawnItem(type);
  }, 800);
}



function getRandomType(): ItemType {
  spawnCount++;

  if (spawnCount >= 8) {
    spawnCount = 0;

    return "crashError";
  }

  const rand = Math.random();

  if (rand < 0.5) return "bug";

  if (rand < 0.75) return "javascript";

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
