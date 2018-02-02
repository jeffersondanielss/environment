const { environments } = require(`../../../../config`)
const boxService = require('../boxService')
const scripts = require('../scripts')

const component = name => `
  <div class="content" id="${name}">
    <header class="content__header">
      <strong>Environment:</strong> ${name}
    </header>
    <div class="content__buttons"></div>
    <div class="content__boxes"></div>
    <div class="content__logs"></div>
  </div>
`

const getEnvironments = () =>
  Object.keys(environments)

const mapComponents = () =>
  getEnvironments()
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const content = () => {
  document.querySelector('.window__contents').innerHTML = mapComponents()
  
  getEnvironments().map(current => boxService(current))
  getEnvironments().map(current => scripts(current))
}

module.exports = content