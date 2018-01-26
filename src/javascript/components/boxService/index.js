const { environments } = require(`../../../../config`)
const stopservice = require(`../../events/stopservice`)
const startservice = require(`../../events/startservice`)
const service = require('../../actions/service')
const {iconOff,iconUp,iconReload} = require('../icons')

const component = environmentName => `
<div class="content__box content__box--${environmentName}">
  <header>
    ${environmentName}
    ${iconOff}
    ${iconReload}
    ${iconUp}
  </header>
  <div class="box__area"></div>
</div>
`

const getServices = () =>
  environments.enviromentname.services

const serviceComponent = () =>
  getServices()
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const handleActions = async (name) => {
  await stopservice(name)
  await startservice(name)
  await service(name, 'status', `.content__box--${name} .box__area`)
}

const boxService = () => {
  document.querySelector('.content__boxes').innerHTML = serviceComponent()
  getServices().map( handleActions )
}

module.exports = boxService