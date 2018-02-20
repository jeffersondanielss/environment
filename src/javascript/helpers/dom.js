const showElement = selector => {
  document.getElementById(selector).classList.add('active')
}

const arrayFromElements = selector =>
  Array.from(document.querySelectorAll(selector))

const hideElement = element => {
  element.classList.remove('active')
}

module.exports = {
  showElement,
  arrayFromElements,
  hideElement
}