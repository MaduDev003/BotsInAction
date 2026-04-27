export function renderHelpModal() {
  const modal = document.createElement('div')

  modal.className =
    'fixed inset-0 bg-black/70 flex items-center justify-center z-50'

  modal.innerHTML = `
    <div class="w-[90%] sm:w-[80%] max-w-3xl h-[80%] bg-zinc-900 text-white rounded-2xl p-6 relative flex items-center justify-center">
      
      <button id="closeModal"
        class="absolute top-4 right-4 text-white/70 hover:text-white text-xl">
        ✖
      </button>

      <h2 class="text-2xl">hi jessica 👀</h2>
    </div>
  `

  document.body.appendChild(modal)

  modal.querySelector('#closeModal')
    ?.addEventListener('click', () => modal.remove())
}