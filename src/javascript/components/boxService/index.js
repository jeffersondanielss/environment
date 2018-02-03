const { environments } = require(`../../../../config`)
const stopservice = require(`../../events/stopservice`)
const startservice = require(`../../events/startservice`)
const service = require('../../actions/service')
const {iconOff,iconUp,iconReload} = require('../icons')

const component = serviceName => `
<div class="content__box content__box--${serviceName}">
  <header>
    ${serviceName}
    ${iconOff}
    ${iconReload}
    ${iconUp}
  </header>
  <div class="box__area"></div>
</div>
`

const getHost = nameOfEnvironment =>
  environments[nameOfEnvironment].host

const getServices = nameOfEnvironment =>
  environments[nameOfEnvironment].services

const serviceComponent = nameOfEnvironment =>
  getServices(nameOfEnvironment)
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const handleActions = async (name, nameOfEnvironment) => {
  const host = getHost(nameOfEnvironment)
  const options = [
    name,
    'status',
    `#${nameOfEnvironment} .content__box--${name} .box__area`,
    host
  ]
  
  await service(options)
  await stopservice(name)
  await startservice(name)
}

const boxService = nameOfEnvironment => {
  document.querySelector(`#${nameOfEnvironment} .content__boxes`).innerHTML = serviceComponent(nameOfEnvironment)
  getServices(nameOfEnvironment)
    .map( current => {
      handleActions(current, nameOfEnvironment)
    })
}

module.exports = boxService