const {environments} = require(`../../../../config`)
const service = require('../../actions/service')

const component = name => {
  const id = name.replace(' ', '-')
  return `<button class="button" id="${id}">${name}</button>`
}

const scripts = environments.enviromentname.scripts

const madeElements = () =>
  Object.keys(scripts)
    .map(current => component(current))
    .join(',')
    .replace(/,/g, '')

const handleActions = (scripts) => {
  for (let [key, value] of Object.entries(scripts)) {
    let id = key.replace(' ', '-')
    document.getElementById(id).addEventListener('click', () => {
      console.log('run script', id)
    })
 }
}

const appendElement = () => {
  document.querySelector('.content__buttons').innerHTML = madeElements()
}

const boxService = async () => {
  await appendElement()
  await handleActions(scripts)
}

module.exports = boxService