const command = require('../command')
const beforeload = require('../events/beforeload')

const service = async options => {
  
  const [serviceName, serviceCommand, element, host ] = options
  const serviceCmd = `sudo service ${serviceName} ${serviceCommand}`
  beforeload(element)

  try {
    const data = await command(serviceCmd, host)
    document.querySelector(element).innerHTML = data.toString()
  } catch (error) {
    document.querySelector(element).innerHTML = error
  }
}

module.exports = service
