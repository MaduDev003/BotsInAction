
import { getVolume, setVolume } from '../../services/audioService'
import { restartGame } from '../../services/gameService'

export function renderSettingsModal() {
    const modal = document.createElement('div')

    modal.className =
        'fixed inset-0 bg-black/70 flex items-center justify-center z-50'

    modal.innerHTML = `
    <div class="w-[92%] sm:w-[85%] md:w-[80%] max-w-4xl h-[80%] bg-zinc-900 text-white rounded-2xl p-8 flex flex-col gap-8 relative">

      <div class="flex justify-between items-center w-full">
        <h2 class="text-2xl sm:text-xl">Configurações</h2>

          <button id="closeModal"
            class="w-8 h-8 flex items-center justify-center rounded-full 
                   text-white/70 hover:text-white hover:bg-zinc-800 transition">
            X
          </button>
      </div>

      <div class="flex flex-col gap-8">

        <div>
          <p class="mb-2">Som</p>

          <div class="flex items-center gap-3">
            <input 
              id="volumeSlider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              class="w-full h-2"
            >

            <span id="volumeValue" class="text-sm">
              ${Math.round(getVolume() * 100)}%
            </span>
          </div>
        </div>

        <div class="flex gap-10 flex-wrap flex-row">
          <div>
            <button id="backToMainMenuBtn"
              class="px-5 py-2 text-lg bg-white/10 rounded hover:bg-blue-600 text-white">
              Menu Principal
            </button>
          </div>
          <div>
            <button id="resetGameBtn"
              class="px-5 py-2 text-lg bg-white/10 rounded hover:bg-blue-600 text-white">
              Reiniciar Jogo
            </button>
          </div>
      </div>
      </div>
    </div>
  `

    document.body.appendChild(modal)

    modal.querySelector('#closeModal')
        ?.addEventListener('click', () => modal.remove())

    const slider = modal.querySelector('#volumeSlider') as HTMLInputElement
    const label = modal.querySelector('#volumeValue') as HTMLElement

    slider.value = String(getVolume())

    slider.addEventListener('input', () => {
        const value = Number(slider.value)
        setVolume(value)
        label.textContent = Math.round(value * 100) + '%'
    })


    const resetBtn = modal.querySelector('#resetGameBtn') as HTMLButtonElement
    resetBtn?.addEventListener('click',  () => {
      restartGame();
      modal.remove();
    })

    
    const backToMainMenuBtn = modal.querySelector('#backToMainMenuBtn') as HTMLButtonElement
    backToMainMenuBtn?.addEventListener('click', resetGame)
}

function resetGame() {
    location.reload()
}

