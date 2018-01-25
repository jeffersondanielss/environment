const getlog = require('./events/getlog')
const header = require('./header')
const logger = require('./actions/logger')
const boxService = require('./components/boxService')
const sidebarItem = require('./components/sidebarItem')

const start = async () => {
  boxService()
  sidebarItem()
  header()
  logger()
  getlog()
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
