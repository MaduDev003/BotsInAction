import './assets/CSS/styles.css'

const app = document.querySelector<HTMLDivElement>('#app')

function setBackground(image: string) {
  document.body.style.backgroundImage = `url(${image})`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
  document.body.style.backgroundRepeat = 'no-repeat'
}

// 🟢 Tela inicial
function renderStartScreen() {
  if (!app) return
  app.innerHTML = `
  <div class="w-screen h-screen bg-black/80 backdrop-blur-md flex items-center justify-center flex-col text-white gap-8">
    
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

      <span>Start Game</span>
    </button>

  </div>
`

  const btn = document.querySelector('#startBtn')
  btn?.addEventListener('click', startGame)
}

// 🎮 Jogo
function startGame() {
  if (!app) return

  setBackground('/src/assets/images/background.png') // pode trocar depois

  app.innerHTML = `
    <div class="w-screen h-screen flex items-center justify-center text-white text-2xl">
      🎮 Jogo iniciado...
    </div>
  `
}

// 🚀 Inicialização
renderStartScreen()