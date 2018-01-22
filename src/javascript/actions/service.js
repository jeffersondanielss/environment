const command = require('../command')
const beforeload = require('../events/beforeload')

const service = async (serviceName, option, element) => {
  beforeload(element)

  const data = await command(`sudo service ${serviceName} ${option}`)
  document.querySelector(element).innerHTML = data.toString()
}

module.exports = service
