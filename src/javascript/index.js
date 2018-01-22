const getlog = require(`./events/getlog`)
const stopservice = require(`./events/stopservice`)
const startservice = require(`./events/startservice`)
const header = require(`./header`)
const logger = require(`./actions/logger`)
const service = require(`./actions/service`)

const start = async () => {
  header()
  logger()
  getlog()
  stopservice('nginx')
  startservice('nginx')
  await service('nginx', 'status', '.content__box--nginx .box__area')
  await service('redis-server', 'status', '.content__box--redis .box__area')
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
