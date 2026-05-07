import baseSound from '../assets/sounds/baseSound.mp3'

const music = new Audio(baseSound)
music.loop = true

let volume = Number(localStorage.getItem('volume')) || 0.5


music.volume = volume

export function playMusic() {
  music.play()
}

export function pauseMusic() {
  music.pause()
}

export function setVolume(value: number) {
  volume = value
  music.volume = volume
  localStorage.setItem('volume', String(value))
}

export function getVolume() {
  return volume
}

