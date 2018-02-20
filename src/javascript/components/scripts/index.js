const { getEnvProp } = require('../../helpers/config')
const style = require('./style')

const component = name => {
  const id = name.replace(' ', '-')
  return `<button class="button" style="${style}" id="${id}">${name}</button>`
}

const getScripts = enviromentname => getEnvProp('scripts', enviromentname)

const madeElements = enviromentname =>
  Object.keys(getScripts(enviromentname))
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const handleActions = enviromentname => {
  for (const [key] of Object.entries(getScripts(enviromentname))) {
    const id = key.replace(' ', '-')
    document.getElementById(id).addEventListener('click', () => {
      console.log('run script', id)
    })
  }
}

const appendElement = enviromentname => {
  document.querySelector(
    `#${enviromentname} .content__buttons`
  ).innerHTML = madeElements(enviromentname)
}

const boxService = async enviromentname => {
  await appendElement(enviromentname)
  await handleActions(enviromentname)
}

module.exports = boxService
