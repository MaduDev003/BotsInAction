export function setBackground(image: string) {
  document.body.style.backgroundImage = `url(${image})`
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
  document.body.style.backgroundRepeat = 'no-repeat'
}