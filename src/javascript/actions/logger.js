const config = require(`../../../config`)
const command = require('../command')
const beforeLoad = require('../events/beforeLoad')

const logger = async () => {
  beforeLoad('.content__box--log .box__area')
  
  const data = await command(config.log, config.auth)
  document.querySelector(
    '.content__box--log .box__area'
  ).innerHTML = data.toString()
}

module.exports = logger
