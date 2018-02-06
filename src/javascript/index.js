const getlog = require('./events/getlog')
const header = require('./header')
const sidebarItem = require('./components/sidebarItem')
const content = require('./components/content')

const start = async () => {
  content()
  sidebarItem()
  header()
  //getlog()
}

const index = () => {
  window.addEventListener('load', start, false)
}

module.exports = index
