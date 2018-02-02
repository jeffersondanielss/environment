const getlog = require('./events/getlog')
const header = require('./header')
const sidebarItem = require('./components/sidebarItem')
const content = require('./components/content')
const logger = require('./components/logger')

const start = async () => {
  content()
  //logger()
  sidebarItem()
  header()
  //getlog()
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
