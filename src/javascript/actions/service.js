const config = require(`../../../config`)
const command = require('../command')
const beforeLoad = require('../events/beforeLoad')

const service = async (serviceName, element) => {
  beforeLoad(element)
  const data = await command(`service ${serviceName} status `, config.auth)

  document.querySelector(element).innerHTML = data.toString()
}

module.exports = service
