const getlog = require('./events/getlog')
const header = require('./header')
const sidebarItem = require('./components/sidebarItem')
const content = require('./components/content')
const logger = require('./components/logger')
const scripts = require('./components/scripts')

const start = async () => {
  content()
  //logger()
  sidebarItem()
  header()
  //getlog()
  //scripts()
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
