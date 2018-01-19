const config = require(`../../../config`)
const command = require('../command')

const service = async (serviceName, element) => {
  const data = await command(`service ${serviceName} status `, config.auth)

  document.querySelector(element).innerHTML = data.toString()
}

module.exports = service