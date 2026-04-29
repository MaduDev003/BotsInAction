export function renderHelpModal() {
  const modal = document.createElement("div");

  modal.className =
    "fixed inset-0 bg-black/70 flex items-center justify-center z-50";

  modal.innerHTML = `
    <div class="w-[92%] sm:w-[85%] md:w-[80%] max-w-4xl h-[80%] bg-zinc-900 text-white rounded-2xl p-8 flex flex-col relative">


        <div class="flex justify-between items-center w-full mb-4">
          <h2 class="text-2xl sm:text-xl">Dúvidas</h2>

          <button id="closeModal" class="text-white/70 hover:text-white text-xl">
            X
          </button>
        </div>

        <div class="flex-1 overflow-y-auto flex flex-col gap-8 pr-2">

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

        <div class="flex flex-col gap-3">
            <p class="text-sm text-white/70">
              Os que você precisa capturar:
            </p>

            <div class="flex flex-col gap-3">
              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img 
                  src="/src/assets/images/html.png" 
                  alt="HTML" 
                  class="w-16 h-16 object-contain"
                >

                <div class="flex flex-col text-left">
                  <span class="font-semibold text-white">HTML</span>
                  <span class="text-sm text-white/60">
                    Aumenta 1 ponto da sua pontuação
                  </span>
                </div>
              </div>

              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img 
                  src="/src/assets/images/javascript.png" 
                  alt="JavaScript" 
                  class="w-16 h-16 object-contain"
                >

                <div class="flex flex-col text-left">
                  <span class="font-semibold text-white">JavaScript</span>
                  <span class="text-sm text-white/60">
                    Aumenta 2 pontos da sua velocidade e te deixa imune a erros por 5 segundos
                  </span>
                </div>
              </div>

                <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img 
                  src="/src/assets/images/tailwind.png" 
                  alt="Tailwind CSS" 
                  class="w-16 h-16 object-contain"
                >

                <div class="flex flex-col text-left">
                  <span class="font-semibold text-white-400">Tailwind CSS</span>
                  <span class="text-sm text-white/60">
                    Aumenta 1 ponto
                  </span>
                </div>
              </div>

            </div>
          </div>   

            <div class="flex flex-col gap-3">
            <p class="text-sm text-white/70">
              Os que você precisa desviar:
            </p>

            <div class="flex flex-col gap-3">
              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img 
                  src="/src/assets/images/bug.png" 
                  alt="Bug" 
                  class="w-16 h-16 object-contain"
                >

                <div class="flex flex-col text-left">
                  <span class="font-semibold text-white">Bug</span>
                  <span class="text-sm text-white/60">
                    Faz você perder 1 vida
                  </span>
                </div>
              </div>

              <div class="bg-zinc-800/70 p-3 rounded-xl flex items-center gap-4 hover:bg-zinc-800 transition">
                <img 
                  src="/src/assets/images/crash_error.png" 
                  alt="Erro 500" 
                  class="w-16 h-16 object-contain"
                >

                <div class="flex flex-col text-left">
                  <span class="font-semibold text-white">Erro 500</span>
                  <span class="text-sm text-white/60">
                    Reduz velocidade e tira 2 vidas
                  </span>
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