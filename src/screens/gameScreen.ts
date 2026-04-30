import { renderTopMenu, setupTopMenuEvents } from '../components/topMenuComponent'
import { setBackground } from '../utils/setBackground'

export function renderGameScreen() {
  const app = document.querySelector('#app')
  if (!app) return

  setBackground('/src/assets/images/background.png')

  app.innerHTML = `
    <div class="bg-neutral-900/20 backdrop-blur-sm w-screen h-20 relative">
      <div>
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
                flex items-center justify-center
                text-white text-2xl
                relative">
      <span class="opacity-60 tracking-wide">
        🎮 Jogo iniciado...
      </span>
    </div>
  `

  setupTopMenuEvents()
}

//function para renderizar os elementos em tela ( 500, bug, js, html e tailwind )
//function para controle de danos ( perda de vida e redução da velocidade do personagem)
//function para controle de pontos ganhos e perdidos 
//function para movimento do personagem em tela
//function para pausar o jogo caso o usuário clique em algum modal do topMenu
//function para reiniciar o jogo , resetando apenas as vidas e os potos do personagem sem necessidade de retornar a tela inicial
