const getlog = require('./events/getlog')
const header = require('./header')
const logger = require('./actions/logger')
const service = require('./actions/service')

const start = async () => {
  header()
  logger()
  getlog()
  service('nginx', '.content__box--nginx .box__area')
  service('redis-server', '.content__box--redis .box__area')
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
