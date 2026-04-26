import type { ModalType } from '../types/modalTypes'
import type { LevelType } from '../types/levelTypes'

let dificultyLevel: LevelType = 'medium'

const saved = localStorage.getItem("dificulty")
if (saved) {
  dificultyLevel = saved as LevelType
}

export function renderTopMenu() {
  return `
    <div class="absolute top-4 right-6 flex gap-4">
      
      <button id="settingsBtn"
        class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition group">
        <img src="/src/assets/icons/settings.svg" class="w-6 h-6 transition group-hover:rotate-90">
        <span>Configurações</span>
      </button>
      
      <button id="helpBtn"
        class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition group">
        <img src="/src/assets/icons/help.svg" class="w-6 h-6 transition group-hover:scale-110">
        <span>Dúvidas</span>
      </button>

    </div>
  `
}

function openModalByType(modalType: ModalType) {
  if (modalType === 'help') renderHelpModal()
  if (modalType === 'settings') renderSettingsModal()
}


function renderHelpModal() {
  const modal = document.createElement('div')

  modal.className = `fixed inset-0 bg-black/70 flex items-center justify-center z-50`

  modal.innerHTML = `
    <div class="w-[80%] h-[80%] bg-zinc-900 text-white rounded-2xl p-6 relative flex items-center justify-center">
      
      <button id="closeModal"
        class="absolute top-4 right-4 text-white/70 hover:text-white text-xl">
        ✖
      </button>

      <h2 class="text-2xl">hi jessica 👀</h2>
    </div>
  `

  document.body.appendChild(modal)

  document
    .querySelector('#closeModal')
    ?.addEventListener('click', () => modal.remove())
}

function renderSettingsModal() {
  const modal = document.createElement('div')

  modal.className = `fixed inset-0 bg-black/70 flex items-center justify-center z-50`

  modal.innerHTML = `
    <div class="w-[80%] h-[80%] bg-zinc-900 text-white rounded-2xl p-6 relative">
      
      <button id="closeModal"
        class="absolute top-4 right-4 text-white/70 hover:text-white text-xl">
        X
      </button>

      <h2 class="text-2xl mb-6">Configurações</h2>

      <div class="flex flex-col gap-4">
        
        <div>
          <p class="mb-2">Dificuldade</p>

          <div id="dificulty" class="flex gap-2">
            <button data-level="easy" class="px-3 py-1 bg-white/10 rounded">Fácil</button>
            <button data-level="medium" class="px-3 py-1 bg-white/10 rounded">Médio</button>
            <button data-level="hard" class="px-3 py-1 bg-white/10 rounded">Difícil</button>
          </div>

        </div>

        <div>
          <p class="mb-2">Som</p>
          <button class="px-3 py-1 bg-white/10 rounded">ON / OFF</button>
        </div>

      </div>
    </div>
  `

  document.body.appendChild(modal)

  document
    .querySelector('#closeModal')
    ?.addEventListener('click', () => modal.remove())

  applySelectedDifficulty()


  document.querySelector("#dificulty")?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement

    if (!target.dataset.level) return

    chooseDificultyLevel(target)
  })
}

function chooseDificultyLevel(target: HTMLElement){
  const level = target.dataset.level as LevelType

  if (!level) return

  dificultyLevel = level

  localStorage.setItem("dificulty", level)

  applySelectedDifficulty()
}

function applySelectedDifficulty(){
  const buttons = document.querySelectorAll("#dificulty button")

  buttons.forEach(btn => {
    const level = (btn as HTMLElement).dataset.level

    const selected = level === dificultyLevel

    btn.classList.toggle("bg-blue-600", selected)
    btn.classList.toggle("bg-white/10", !selected)
  })
}


export function setupTopMenuEvents() {
  document
    .querySelector('#settingsBtn')
    ?.addEventListener('click', () => openModalByType('settings'))

  document
    .querySelector('#helpBtn')
    ?.addEventListener('click', () => openModalByType('help'))
}