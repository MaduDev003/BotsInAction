import { setBackground } from '../utils/setBackground'
import { renderSelectCharacterScreen } from './selectCharacterScreen'

export function renderStartScreen() {
  const app = document.querySelector('#app')
  if (!app) return

  setBackground('/src/assets/images/background.png')

  app.innerHTML =`
  <div class="w-screen h-screen bg-black/80 backdrop-blur-md flex items-center justify-center flex-col text-white gap-8">
    
    <div class="absolute top-4 right-4 flex gap-4">
       <button class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition group" >
            <img 
                src="/src/assets/icons/settings.svg" 
                alt="Configurações" 
                class="w-6 h-6 transition group-hover:rotate-90"
            >
            <span class="text-md">Configurações</span>
        </button>
        
        <Button>
         
              Dúvidas
            </Button>
    </div>

    <h1 class="text-5xl font-bold tracking-wide">
      Bots In Action
    </h1>

    <button id="startBtn" 
      class="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl text-lg font-semibold transition transform hover:scale-105 flex items-center gap-3 shadow-lg hover:shadow-blue-500/30">
      
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

  document
    .querySelector('#startBtn')
    ?.addEventListener('click', renderSelectCharacterScreen)
}