const command = require('../command')
const beforeload = require('../events/beforeload')

const service = async ({ serviceName, cmd, selector, host }) => {
  const serviceCmd = `sudo service ${serviceName} ${cmd}`
  beforeload(selector)

  try {
    const data = await command(serviceCmd, host)
    document.querySelector(selector).innerHTML = data.toString()
  } catch (err) {
    document.querySelector(selector).innerHTML = err
  }
}

module.exports = service
