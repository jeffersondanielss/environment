const {environments} = require(`../../../../config`)
const logging = require('../../actions/logging')
const {iconReload} = require('../icons')

const component = environmentName => `
  <div class="content__box content__box--full content__box--log">
      <header class="box__header">
        logs
        ${iconReload}
      </header>
      <div class="box__area"></div>
    </div>
  </div>
`

const boxService = () => {
  document.querySelector('.content__logs').innerHTML = component()
  logging()
}

module.exports = boxService