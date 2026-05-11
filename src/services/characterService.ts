import Character from "../classes/Character";
import { updateScore } from "./scoreService";
import { isGamePaused } from "./gameService";
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

    if (isGamePaused) return;

    if (e.code === "ArrowLeft") {
      characterInstance.move("left");
    }

    if (e.code === "ArrowRight") {
      characterInstance.move("right");
    }
  });

  movementInitialized = true;
}

export function getCharacterCollision() {
  const items = document.querySelectorAll(".animate-fall");

  const character = getCharacterInstance()
    .element
    .getBoundingClientRect();

  for (const item of items) {
    const element = item as HTMLElement;

    const itemBounds  = element.getBoundingClientRect();

    if (
      character.left < itemBounds.right &&
      character.right > itemBounds.left &&
      character.top < itemBounds.bottom &&
      character.bottom > itemBounds.top
    ) {
      return element;
    }
  }

  return null;
}

export function handleCollision() {
  const collision = getCharacterCollision();

  if (!collision) return;

  const typeOfItem = collision.dataset.type;
  const character = getCharacterInstance();

  const isDanger =
    typeOfItem === "bug" || typeOfItem === "crashError";

  if (typeOfItem === "javascript") {
    character.activateProtection();
  }

  if (isDanger) {
    character.element.classList.add("animate-blink");

    setTimeout(() => {
      character.element.classList.remove("animate-blink");
    }, 500);
  }

  if (isDanger && character.getProtectionState()) {
    collision.remove();
    return;
  }

  updateScore(typeOfItem || "");
  collision.remove();
}