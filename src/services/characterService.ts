import Character from "../classes/Character";

let movementInitialized = false;

let characterInstance: Character;

export function createCharacter() {
  const characterElement = document.querySelector(
    "#character"
  ) as HTMLElement;

  characterInstance = new Character(characterElement);
}

export function getCharacterInstance() {
  return characterInstance;
}

export function renderCharacter(): string {
  return (
    localStorage.getItem("selectedCharacter") ||
    "boot2"
  );
}

export function characterMovement(getIsGamePaused: () => boolean) {
  if (movementInitialized) return;

  document.addEventListener("keydown", (e) => {

    if (getIsGamePaused()) return;

    if (e.code === "ArrowLeft") {
      characterInstance.move("left");
    }

    if (e.code === "ArrowRight") {
      characterInstance.move("right");
    }
  });

  movementInitialized = true;
}

export function checkCharacterCollisions() {
  const items = document.querySelectorAll(".animate-fall");

  const character = getCharacterInstance()
    .element
    .getBoundingClientRect();

  for (const item of items) {
    const element = item as HTMLElement;

    const itemBounds  = element.getBoundingClientRect();

    if (
      character.left < itemBounds.right &&
      character.right > itemBounds .left &&
      character.top < itemBounds .bottom &&
      character.bottom > itemBounds .top
    ) {
      return element;
    }
  }

  return null;
}