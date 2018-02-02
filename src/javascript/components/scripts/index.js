const {environments} = require(`../../../../config`)
const service = require('../../actions/service')
const style = require('./style')

const component = name => {
  const id = name.replace(' ', '-')
  return `<button class="button" style="${style}" id="${id}">${name}</button>`
}

const hasScripts = enviromentname => environments[enviromentname].hasOwnProperty('scripts')

const getScripts = enviromentname =>
  environments[enviromentname].scripts

const madeElements = enviromentname =>
  Object.keys(getScripts(enviromentname))
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const handleActions = enviromentname => {
  for (let [key, value] of Object.entries(getScripts(enviromentname))) {
    let id = key.replace(' ', '-')
    document.getElementById(id).addEventListener('click', () => {
      console.log('run script', id)
    })
 }
}

const appendElement = enviromentname => {
  document.querySelector(`#${enviromentname} .content__buttons`).innerHTML = madeElements(enviromentname)
}

const boxService = async enviromentname => {
  if ( hasScripts(enviromentname) ) {
    await appendElement(enviromentname)
    await handleActions(enviromentname)
  }
}

module.exports = boxService