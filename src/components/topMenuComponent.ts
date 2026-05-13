import type { ModalType } from "../types/modalTypes";
import settingsIcon from "../assets/icons/settings.svg";
import helpIcon from "../assets/icons/help.svg";

import {
  togglePauseGame,
  resumeGame
} from "../services/gameService";

import { renderSettingsModal }
  from "./modals/settingsModalComponent";

import { renderHelpModal }
  from "./modals/helpModalComponent";

export function renderTopMenu() {
  return `
    <div class="absolute top-5 right-4 flex gap-2 sm:gap-4">
      
      <button id="settingsBtn"
        class="flex items-center justify-center sm:justify-start 
               w-10 h-10 sm:w-auto sm:h-auto 
               p-2 sm:px-3 sm:py-2 
               rounded-full sm:rounded-lg
               text-white/80 hover:text-white hover:bg-white/10 
               transition group">
        
        <img src=${settingsIcon}
             class="w-6 h-6 transition group-hover:rotate-90">

        <span class="hidden sm:inline">
          Configurações
        </span>
      </button>
      
      <button id="helpBtn"
        class="flex items-center justify-center sm:justify-start 
               w-10 h-10 sm:w-auto sm:h-auto 
               p-2 sm:px-3 sm:py-2 
               rounded-full sm:rounded-lg
               text-white/80 hover:text-white hover:bg-white/10 
               transition group">
        
        <img src=${helpIcon}
             class="w-6 h-6 transition group-hover:scale-110">

        <span class="hidden sm:inline">
          Dúvidas
        </span>
      </button>

    </div>
  `;
}

export function setupTopMenuEvents() {
  document
    .querySelector("#settingsBtn")
    ?.addEventListener("click", () => {
      togglePauseGame();

      openModalByType("settings");
    });

  document
    .querySelector("#helpBtn")
    ?.addEventListener("click", () => {
      togglePauseGame();

      openModalByType("help");
    });
}

function openModalByType(type: ModalType) {
  if (type === "help") {
    renderHelpModal();
  }

  if (type === "settings") {
    renderSettingsModal();
  }

  const closeBtn =
    document.querySelector("#closeModal");

  closeBtn?.addEventListener("click", () => {
    resumeGame();
  });
}