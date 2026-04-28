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

        <div class="flex flex-col gap-2">
          <p class="mb-2">Objetivo do Jogo:</p>
          <p class="text-sm text-white/70">
            Sobreviva o máximo que puder desviando dos erros que caem do topo. Pegue só os itens certos e 
            <span class="text-red-500 font-bold">evite bugs, principalmente o erro 500 </span>, 
            que pode fazer com que você perca velocidade. A dificuldade aumenta com o tempo, exigindo mais atenção e rapidez. Quanto mais itens corretos você pegar, maior será sua pontuação.
          </p>
        </div>

      <div class="flex flex-col gap-2">
        <p class="font-medium">Como Jogar:</p>

        <p class="text-sm text-white/70">
          Use as setas (→ ←) para mover o personagem ou deslize o dedo na tela.
        </p>

       <div class="flex items-center gap-4 mt-4">
        <div class="bg-zinc-700 p-2 rounded w-12 text-center">
          <span class="text-white text-2xl">→</span>
        </div>
        <div class="bg-zinc-700 p-2 rounded w-12 text-center">
          <span class="text-white text-2xl">←</span>
        </div>
      </div>
    </div>
  </div> 
  `

  document.body.appendChild(modal)

  modal.querySelector('#closeModal')
    ?.addEventListener('click', () => modal.remove())
}