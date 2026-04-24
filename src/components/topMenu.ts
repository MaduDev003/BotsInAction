export function renderTopMenu() {
  return `
    <div class="absolute top-4 right-6 flex gap-4">
      
      <button id="settingsBtn"
        class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition group">
        
        <img 
          src="/src/assets/icons/settings.svg" 
          alt="Configurações" 
          class="w-6 h-6 transition group-hover:rotate-90"
        >
        <span class="text-md">Configurações</span>
      </button>
      
      <button id="helpBtn"
        class="flex items-center gap-2 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition group">
        
        <img 
          src="/src/assets/icons/help.svg" 
          alt="Dúvidas"
          class="w-6 h-6 transition group-hover:scale-110"
        >
        <span class="text-md">Dúvidas</span>
      </button>

    </div>
  `
}

export function setupTopMenuEvents() {
  document
    .querySelector('#settingsBtn')
    ?.addEventListener('click', () => {
      console.log('Abrir configurações ⚙️')
    })

  document
    .querySelector('#helpBtn')
    ?.addEventListener('click', () => {
      console.log('Abrir dúvidas ❓')
    })
}