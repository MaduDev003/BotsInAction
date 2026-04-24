import { setBackground } from '../utils/setBackground'
import { renderGameScreen } from './gameScreen'

export function renderSelectCharacterScreen() {
  const app = document.querySelector('#app')
  if (!app) return

  setBackground('/src/assets/images/background.png')

  app.innerHTML = `
    <div class="w-screen h-screen flex flex-col items-center justify-center text-white bg-black/80 backdrop-blur-sm gap-6">
      
      <h2 class="text-3xl font-bold">Escolha seu personagem</h2>

      <button id="charBtn" class="bg-green-500 px-6 py-2 rounded">
        🤖 Robô
      </button>

    </div>
  `

  document
    .querySelector('#charBtn')
    ?.addEventListener('click', renderGameScreen)
}