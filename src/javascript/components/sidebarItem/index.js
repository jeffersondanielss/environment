const {environments} = require(`../../../../config`)
const {iconEnvironment} = require('../icons')

const component = environmentName => `
  <button class="sidebar__item" title="${environmentName}" id="${environmentName}">
    ${iconEnvironment}
  </button>
`
const menuitem = () =>
  Object.keys(environments)
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const sidebar = () => {
  document.querySelector('.sidebar__buttons').innerHTML = menuitem()
}

module.exports = sidebar
