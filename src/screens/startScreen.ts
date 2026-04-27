import { setBackground } from '../utils/setBackground'
import { renderSelectCharacterScreen } from './selectCharacterScreen'
import { renderTopMenu, setupTopMenuEvents } from '../components/topMenuComponent'
import { playMusic } from '../utils/audioManager'

export function renderStartScreen() {
  const app = document.querySelector('#app')
  if (!app) return

  setBackground('/src/assets/images/background.png')

  app.innerHTML = `
    ${renderTopMenu()}

    <div class="min-h-screen w-full bg-black/70 backdrop-blur-md flex items-center justify-center flex-col text-white gap-10 px-4">

      <h1 class="text-4xl sm:text-5xl font-bold tracking-wide text-center animate-fadeIn">
        Bots In Action
      </h1>

      <button id="startBtn" 
        class="bg-blue-600 hover:bg-blue-500 active:scale-95 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-blue-500/40 hover:scale-105">
        
        <svg viewBox="0 0 24 24" class="w-7 h-7 fill-current">
          <path d="M8 5v14l11-7z" />
        </svg>

        <span>Iniciar Jogo</span>
      </button>

    </div>
  `

  document
    .querySelector('#startBtn')
    ?.addEventListener('click', () => {
      playMusic()
      renderSelectCharacterScreen()
    })

  setupTopMenuEvents()
}