export function renderHelpModal() {
  const modal = document.createElement("div");

  modal.className =
    "fixed inset-0 bg-black/70 flex items-center justify-center z-50";

  modal.innerHTML = `
    <div class="w-[92%] sm:w-[85%] md:w-[80%] max-w-4xl h-[80%] bg-zinc-900 text-white rounded-2xl p-8 flex flex-col relative">

        <div class="flex justify-between items-center w-full mb-4">
          <h2 class="text-2xl sm:text-xl font-semibold">Dúvidas</h2>

          <button id="closeModal"
            class="w-8 h-8 flex items-center justify-center rounded-full 
                   text-white/70 hover:text-white hover:bg-zinc-800 transition">
            X
          </button>
        </div>

        <div class="flex-1 overflow-y-auto flex flex-col gap-10 pr-2">

          <div class="flex flex-col gap-2">
            <p class="font-medium text-white/90">Objetivo do Jogo:</p>
            <p class="text-sm text-white/70">
              Sobreviva desviando dos erros que caem do topo. Pegue apenas os itens certos e 
              <span class="text-red-500 font-bold">evite bugs, principalmente o erro 500</span>, 
              que reduz sua velocidade. A dificuldade aumenta com o tempo, exigindo mais atenção e rapidez.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <p class="font-medium text-white/90">Como Jogar:</p>

            <p class="text-sm text-white/70">
              Use as setas (→ ←) ou deslize o dedo na tela.
            </p>

            <div class="flex items-center gap-4 mt-2">
              <div class="bg-zinc-700 p-2 rounded w-12 text-center">
                <span class="text-white text-2xl">→</span>
              </div>
              <div class="bg-zinc-700 p-2 rounded w-12 text-center">
                <span class="text-white text-2xl">←</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <p class="font-medium text-white/90">Sobre os ícones:</p>

            <p class="text-sm text-white/70">Itens para capturar:</p>

            <div class="flex flex-col gap-3">

              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img src="/src/assets/images/html.png" class="w-16 h-16 object-contain">
                <div>
                  <span class="font-semibold">HTML</span>
                  <p class="text-sm text-white/60">+1 ponto</p>
                </div>
              </div>

              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img src="/src/assets/images/javascript.png" class="w-16 h-16 object-contain">
                <div>
                  <span class="font-semibold">JavaScript</span>
                  <p class="text-sm text-white/60">+2 velocidade e imunidade por 5s</p>
                </div>
              </div>

              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img src="/src/assets/images/tailwind.png" class="w-16 h-16 object-contain">
                <div>
                  <span class="font-semibold text-white">Tailwind CSS</span>
                  <p class="text-sm text-white/60">+1 ponto</p>
                </div>
              </div>

            </div>
          </div>

          <div class="flex flex-col gap-3">
            <p class="text-sm text-white/70">Itens para desviar:</p>

            <div class="flex flex-col gap-3">

              <div class="bg-red-500/5 border border-red-500/10 p-3 rounded-xl flex items-center gap-4 hover:bg-red-500/10 transition">
                <img src="/src/assets/images/bug.png" class="w-16 h-16 object-contain">
                <div>
                  <span class="font-semibold">Bug</span>
                  <p class="text-sm text-white/60">Perde 1 vida</p>
                </div>
              </div>

              <div class="bg-red-500/5 border border-red-500/10 p-3 rounded-xl flex items-center gap-4 hover:bg-red-500/10 transition">
                <img src="/src/assets/images/crashError.png" class="w-16 h-16 object-contain">
                <div>
                  <span class="font-semibold text-white">Erro 500</span>
                  <p class="text-sm text-white/60">Reduz velocidade e perde 2 vidas</p>
                </div>
              </div>

            </div>
          </div>

        </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal
    .querySelector("#closeModal")
    ?.addEventListener("click", () => modal.remove());
}