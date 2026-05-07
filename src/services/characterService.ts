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

export function characterMovement() {
  if (movementInitialized) return;

  document.addEventListener("keydown", (e) => {
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

  const c = getCharacterInstance()
    .element
    .getBoundingClientRect();

  for (const item of items) {
    const el = item as HTMLElement;

    const i = el.getBoundingClientRect();

    if (
      c.left < i.right &&
      c.right > i.left &&
      c.top < i.bottom &&
      c.bottom > i.top
    ) {
      return el;
    }
  }

  return null;
}