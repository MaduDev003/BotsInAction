import type { LevelType } from '../types/levelTypes'

const KEY = "dificulty"

export function loadDifficulty(): LevelType {
  return (localStorage.getItem(KEY) as LevelType) || 'medium'
}

export function saveDifficulty(level: LevelType) {
  localStorage.setItem(KEY, level)
}

export function resetDifficulty() {
  localStorage.removeItem(KEY)
}