const controller = require(`./controller`)
const header = require(`./header`)

function start() {
  header()
  controller()
}


window.addEventListener('load', start, false)