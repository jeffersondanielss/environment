const { environments } = require(`../../../../config`)

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

const allEnvironments = Object.keys(environments)

const mapComponents = () =>
  allEnvironments
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const content = () => {
  document.querySelector('.window__contents').innerHTML = mapComponents()
}

module.exports = content