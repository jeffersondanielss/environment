const { iconReload } = require('../icons')

const component = () => `
  <div class="content__box content__box--full content__box--log">
      <header class="box__header">
        logs
        ${iconReload}
      </header>
      <div class="box__area"></div>
    </div>
  </div>
`

const boxLog = envName => {
  document.querySelector(`#${envName} .content__logs`).innerHTML = component()
}

module.exports = boxLog
