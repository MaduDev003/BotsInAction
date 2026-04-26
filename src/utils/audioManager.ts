import baseSound from '../assets/sounds/baseSound.mp3'

const music = new Audio(baseSound)
music.loop = true

let volume = 0.5

const savedVolume = localStorage.getItem('volume')
if (savedVolume) {
  volume = Number(savedVolume)
}

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
  music.volume = value

  localStorage.setItem('volume', value.toString())
}

export function getVolume() {
  return volume
}



export function toggleMute() {
  if (music.volume > 0) {
    music.volume = 0
  } else {
    music.volume = volume
  }
}