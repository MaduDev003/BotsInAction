import { setBackground } from '../utils/setBackground'

export function renderGameScreen() {
  const app = document.querySelector('#app')
  if (!app) return

  setBackground('/src/assets/images/background.png')

  app.innerHTML = `
    <div class="w-screen h-screen flex items-center justify-center text-white text-2xl">
      🎮 Jogo iniciado...
    </div>
  `
}