import { setBackground } from '../utils/setBackground'
import { renderSelectCharacterScreen } from './selectCharacterScreen'
import { renderTopMenu, setupTopMenuEvents } from '../components/topMenuComponent'
import { playMusic } from '../utils/audioManager'

export function renderStartScreen() {
  const app = document.querySelector('#app')
  if (!app) return

  setBackground('/src/assets/images/background.png')

  app.innerHTML = `
  <div class="w-screen h-screen bg-black/80 backdrop-blur-sm flex items-center justify-center flex-col text-white gap-8">
    
    ${renderTopMenu()}

    <h1 class="text-5xl font-bold tracking-wide">
      Bots In Action
    </h1>

    <button id="startBtn" 
      class="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl text-lg font-semibold transition transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-blue-500/40">
      
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        class="w-7 h-7"
      >
        <path d="M8 5v14l11-7z" />
      </svg>

      <span>Iniciar Jogo</span>
    </button>

  </div>
`
function handleStartGame() {
  playMusic()
  renderSelectCharacterScreen()
}

  document
    .querySelector('#startBtn')
    ?.addEventListener('click', handleStartGame)

  setupTopMenuEvents()
}