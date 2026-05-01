import {
  renderTopMenu,
  setupTopMenuEvents,
} from "../components/topMenuComponent";
import { setBackground } from "../utils/setBackground";
import type { ItemType } from "../types/itemTypes";
let score = 0;
export function renderGameScreen() {
  const app = document.querySelector("#app");
  if (!app) return;

  setBackground("/src/assets/images/background.png");

  app.innerHTML = `
    <div class="bg-neutral-900/20 backdrop-blur-sm w-screen h-20 relative">
      <div id="topMenu">
        ${renderTopMenu()}
      </div>

      <div class="absolute md:top-4 sm:top-4 top-5 left-4 z-40">
        <div class="flex items-center gap-3
                    bg-zinc-900/70 backdrop-blur-md
                    px-4 py-2 rounded-xl
                    border border-white/10 shadow-md">

          <div id="lives" class="flex items-center gap-1">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/redHeart.png" class="w-5 h-5">
            <img src="/src/assets/images/blackHeart.png" class="w-5 h-5">
          </div>

          <div class="w-px h-4 bg-white/20"></div>

          <div id="score" class="flex items-center gap-2 text-sm">
            <span class="text-white/70">Pontos: 0</span>
          </div>
        </div>
      </div>
    </div>

    <div id="gameArea"
         class="w-screen h-[calc(100vh-80px)]
                relative overflow-hidden">
    </div>
  `;

  setupTopMenuEvents();
  startItemSpawner();
}

function startItemSpawner(){
  const types: ItemType[] = [
    "bug",
    "crashError",
    "javascript",
    "tailwind",
    "html",
  ];

  setInterval(() => {
    const randomType = types[Math.floor(Math.random() * types.length)];
    spawnItemByType(randomType);
  }, 500);
}

function spawnItemByType(type: ItemType) {
  const gameArea = document.querySelector("#gameArea") as HTMLElement;
  if (!gameArea) return;

  const item = document.createElement("div");

  item.className = "w-24 h-24 absolute animate-fall";
  item.style.top = "0px";

  const positionAtX = Math.random() * (window.innerWidth - 80);
  item.style.left = `${positionAtX}px`;

  const images = {
    bug: "/src/assets/images/bug.png",
    crashError: "/src/assets/images/crashError.png",
    javascript: "/src/assets/images/javaScript.png",
    tailwind: "/src/assets/images/tailwind.png",
    html: "/src/assets/images/html.png",
  };

  item.innerHTML = `
    <img src="${images[type]}" class="w-full h-full object-contain">
  `;

 
  setupItemActions(item, type);
  gameArea.appendChild(item);
}

function updateScore(value: number) {
  const scoreElement = document.querySelector('#score span')
  if (!scoreElement) return

  score += value
  if (score < 0) score = 0
  
  scoreElement.textContent = `Pontos: ${score}`
}

function setupItemActions(item: HTMLElement, type: ItemType) {
  item.addEventListener("click", () => {
    switch (type) {
      case "html":
      case "tailwind":
        console.log("+1 ponto")
        updateScore(1);
        break

      case "javascript":
        console.log("+velocidade + imunidade")
        updateScore(1);
        break

      case "bug":
        console.log("clicou errado 😈 -vida")
        updateScore(-1);
        break
      case "crashError": 
        console.log("clicou errado 😈 -vida")
        updateScore(-2)
        break
    }

    item.remove()
  })
}