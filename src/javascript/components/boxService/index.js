const { environments } = require(`../../../../config`)
const stopservice = require(`../../events/stopservice`)
const startservice = require(`../../events/startservice`)
const service = require('../../actions/service')
const {iconOff,iconUp,iconReload} = require('../icons')
const {getEnvProp} = require('../../helpers/config')

const component = serviceName => `
<div class="content__box content__box--${serviceName}">
  <header>
    ${serviceName}
    <span title="Stop"> ${iconOff} </span>
    <span title="Restart"> ${iconReload} </span>
    <span title="Start"> ${iconUp} </span>
  </header>
  <div class="box__area"></div>
</div>
`

const serviceComponent = nameOfEnvironment =>
  getEnvProp('services', nameOfEnvironment)
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const handleActions = async (name, nameOfEnvironment) => {
  const host = getEnvProp('host', nameOfEnvironment)
  const options = {
    serviceName: name,
    cmd: 'status',
    selector: `#${nameOfEnvironment} .content__box--${name} .box__area`,
    host: host,
    envName: nameOfEnvironment
  }
  
  await service(options)
  await startservice(options)
  await stopservice(options)
}

const boxService = nameOfEnvironment => {
  document.querySelector(`#${nameOfEnvironment} .content__boxes`).innerHTML = serviceComponent(nameOfEnvironment)
  getEnvProp('services', nameOfEnvironment)
    .map( async current => {
      await handleActions(current, nameOfEnvironment)
    })
}

module.exports = boxService