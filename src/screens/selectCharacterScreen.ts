import { setBackground } from '../utils/setBackground';
import { renderGameScreen } from './gameScreen';
import { renderTopMenu, setupTopMenuEvents } from '../components/topMenuComponent';
import bg from '../assets/images/background.png';
import bot1 from '../assets/images/characters/bot1.png';
import bot2 from '../assets/images/characters/bot2.png';

export function renderSelectCharacterScreen() {
  const app = document.querySelector('#app');
  if (!app) return;

  setBackground(bg);

  app.innerHTML = `
    <div class="w-screen h-screen flex flex-col items-center justify-center text-white bg-black/80 backdrop-blur-sm gap-6">
      
      ${renderTopMenu()}

      <h2 class="text-2xl font-bold mt-10 mb-6">
        Escolha seu personagem
      </h2>

      <div id="containerPersonagens" class="flex gap-10 w-[80%] justify-center flex-wrap">
        
        <button id="bot1" class="group">
          <div class="bg-zinc-800/70 rounded-xl border-2 border-transparent p-4 
                      transition-all duration-300 
                      group-hover:border-blue-500 group-hover:scale-105">
            <img 
              src=${bot1}
              alt="Robo 1" 
            class="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain mx-auto"
            >
          </div>
        </button>

        <button id="bot2" class="group">
          <div class="bg-zinc-800/70 rounded-xl border-2 border-transparent p-4 
                      transition-all duration-300 
                      group-hover:border-blue-500 group-hover:scale-105">
            <img 
              src=${bot2} 
              alt="Robo 2" 
              class="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain mx-auto"
            >
          </div>
        </button>

      </div>
    </div>
  `;

  const container = document.querySelector('#containerPersonagens');

  container?.addEventListener('click', (event) => {
    const target = event.target as HTMLElement

    const button = target.closest('button');
    if (!button) return;

    const id = button.id;

    localStorage.setItem('selectedCharacter', id);

    renderGameScreen();
  });

  setupTopMenuEvents();
}