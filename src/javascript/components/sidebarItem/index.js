const { environments } = require(`../../../../config`)
const { iconEnvironment } = require('../icons')
const boxService = require('../boxService')
const scripts = require('../scripts')
const boxLog = require('../boxLog')
const logging = require('../../actions/logging')
const {
  showElement,
  arrayFromElements,
  hideElement
} = require('../../helpers/dom')

const component = environmentName => `
  <button class="sidebar__item" title="${environmentName}" data-id="${environmentName}">
    ${iconEnvironment}
  </button>
`
const menuitem = () =>
  Object.keys(environments)
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const showFirstContent = () => {
  document.querySelectorAll('.content')[0].classList.add('active')
}

const hideAllContents = () => {
  const contents = arrayFromElements('.content')
  contents.map(element => hideElement(element))
}

const showContent = envName => {
  const element = document.querySelector(`[data-id=${envName}]`)

  element.addEventListener('click', () => {
    hideAllContents(envName)
    showElement(envName)
    boxService(envName)
    scripts(envName)
    boxLog(envName)
    logging(envName)
  })
}

const onClick = () => {
  Object.keys(environments).map(current => showContent(current))
}

const sidebar = () => {
  const sidebar = document.querySelector('.sidebar__buttons')

  sidebar.innerHTML = menuitem()
  showFirstContent()
  onClick()
}

module.exports = sidebar
