const getlog = require('./events/getlog')
const header = require('./header')
const logger = require('./actions/logger')
const service = require('./actions/service')

const start = async () => {
  await header()
  await logger()
  await getlog()
  await service('nginx', '.content__box--nginx .box__area')
  await service('redis-server', '.content__box--redis .box__area')
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
