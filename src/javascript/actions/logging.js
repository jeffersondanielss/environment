const {environments} = require(`../../../config`)
const command = require('../command')
const beforeload = require('../events/beforeload')

const logging = async envName => {
  beforeload(`#${envName} .content__box--log .box__area`)
  
  const data = await command(`tail -f ${environments[envName].log}`, environments[envName].host)
  document.querySelector(`#${envName} .content__box--log .box__area`).innerHTML = data.toString()
}

module.exports = logging
