const {environments} = require(`../../../config`)
const command = require('../command')
const beforeload = require('../events/beforeload')

const logger = async () => {
  beforeload('.content__box--log .box__area')

  const data = await command(`tail -f ${environments.enviromentname.log}`)
  document.querySelector(
    '.content__box--log .box__area'
  ).innerHTML = data.toString()
}

module.exports = logger
