const getlog = require('./events/getlog')
const header = require('./header')
const boxService = require('./components/boxService')
const sidebarItem = require('./components/sidebarItem')
const logger = require('./components/logger')

const start = async () => {
  logger()
  boxService()
  sidebarItem()
  header()
  getlog()
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
