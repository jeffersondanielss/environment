const config = require(`../../../config`)
const command = require('../command')

const logger = async () => {
  const data = await command(config.log, config.auth)
  document.querySelector('.content__box--log .box__area').innerHTML = data.toString()
}

module.exports = logger