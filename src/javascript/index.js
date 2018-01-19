const getLog = require(`./events/getLog`)
const header = require(`./header`)
const logger = require(`./actions/logger`)
const service = require(`./actions/service`)

const start =  async () => {
  await header()
  await logger()
  await getLog()
  await service('nginx', '.content__box--nginx .box__area')
  await service('redis-server', '.content__box--redis .box__area')
}


window.addEventListener('load', start, false)