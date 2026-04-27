
import { getVolume, setVolume } from '../../utils/audioManager'
import type { LevelType } from '../../types/levelTypes'
import { loadDifficulty, resetDifficulty, saveDifficulty } from '../../utils/gameSettings'


let difficultyLevel: LevelType = loadDifficulty()

export function renderSettingsModal() {
    const modal = document.createElement('div')

    modal.className =
        'fixed inset-0 bg-black/70 flex items-center justify-center z-50'

    modal.innerHTML = `
    <div class="w-[92%] sm:w-[85%] md:w-[80%] max-w-4xl h-[80%] bg-zinc-900 text-white rounded-2xl p-8 flex flex-col gap-8 relative">

      <div class="flex justify-between items-center w-full">
        <h2 class="text-2xl sm:text-xl">Configurações</h2>

        <button id="closeModal" class="text-white/70 hover:text-white text-xl">
          X
        </button>
      </div>

      <div class="flex flex-col gap-8">

        <div>
          <p class="mb-2">Dificuldade</p>

          <div id="dificulty" class="flex gap-3 flex-wrap">
            <button data-level="easy" class="px-5 py-2 text-lg bg-white/10 rounded hover:bg-blue-600">Fácil</button>
            <button data-level="medium" class="px-5 py-2 text-lg bg-white/10 rounded hover:bg-blue-600">Médio</button>
            <button data-level="hard" class="px-5 py-2 text-lg bg-white/10 rounded hover:bg-blue-600">Difícil</button>
          </div>
        </div>

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

        <div>
          <h3 class="mb-2">Reiniciar Jogo</h3>

          <button id="resetGameBtn"
            class="px-5 py-2 text-lg bg-white/10 rounded hover:bg-blue-600 text-white">
            Reiniciar
          </button>
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

    applySelectedDifficulty()

    modal.querySelector("#dificulty")
        ?.addEventListener("click", (event) => {
            const target = event.target as HTMLElement
            if (!target.dataset.level) return
            chooseDifficultyLevel(target)
        })

    const resetBtn = modal.querySelector('#resetGameBtn') as HTMLButtonElement
    resetBtn?.addEventListener('click', resetGame)
}

function resetGame() {
    resetDifficulty()
    location.reload()
}

function chooseDifficultyLevel(target: HTMLElement) {
    const level = target.dataset.level as LevelType
    if (!level) return

    difficultyLevel = level
    saveDifficulty(level)

    applySelectedDifficulty()
}

function applySelectedDifficulty() {
    const buttons = document.querySelectorAll("#dificulty button")

    buttons.forEach(btn => {
        const level = (btn as HTMLElement).dataset.level
        const selected = level === difficultyLevel

        btn.classList.toggle("bg-blue-600", selected)
        btn.classList.toggle("bg-white/10", !selected)
    })


}