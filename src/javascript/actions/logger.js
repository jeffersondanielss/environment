const config = require(`../../../config`)
const command = require('../command')
const beforeload = require('../events/beforeload')

const logger = async () => {
  beforeload('.content__box--log .box__area')

  const data = await command(config.log)
  document.querySelector(
    '.content__box--log .box__area'
  ).innerHTML = data.toString()
}

module.exports = logger
