export function renderHelpModal() {
 const modal = document.createElement('div')

    modal.className =
        'fixed inset-0 bg-black/70 flex items-center justify-center z-50'

    modal.innerHTML = `
    <div class="w-[92%] sm:w-[85%] md:w-[80%] max-w-4xl h-[80%] bg-zinc-900 text-white rounded-2xl p-8 flex flex-col gap-8 relative">

      <div class="flex justify-between items-center w-full">
        <h2 class="text-2xl sm:text-xl">Dúvidas</h2>

        <button id="closeModal" class="text-white/70 hover:text-white text-xl">
          X
        </button>
      </div>

      <div>
        <p class="mb-2">Como jogar?</p>
      </div>
  `

  document.body.appendChild(modal)

  modal.querySelector('#closeModal')
    ?.addEventListener('click', () => modal.remove())
}