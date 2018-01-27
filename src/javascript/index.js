const getlog = require('./events/getlog')
const header = require('./header')
const boxService = require('./components/boxService')
const sidebarItem = require('./components/sidebarItem')
const logger = require('./components/logger')
const scripts = require('./components/scripts')

const start = async () => {
  logger()
  boxService()
  sidebarItem()
  header()
  getlog()
  scripts()
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
