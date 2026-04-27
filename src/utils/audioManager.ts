import baseSound from '../assets/sounds/baseSound.mp3'

const music = new Audio(baseSound)
music.loop = true

let volume = Number(localStorage.getItem('volume')) || 0.5
let isMuted = false

music.volume = volume

export function playMusic() {
  music.play().catch(() => {
    console.log('interação do usuário necessária pra tocar áudio')
  })
}

export function pauseMusic() {
  music.pause()
}

export function setVolume(value: number) {
  volume = value
  music.volume = isMuted ? 0 : volume
  localStorage.setItem('volume', String(value))
}

export function getVolume() {
  return volume
}

export function toggleMute() {
  isMuted = !isMuted
  music.volume = isMuted ? 0 : volume
}

export function isAudioMuted() {
  return isMuted
}