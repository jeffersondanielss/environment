const app = require('electron').remote.app
const {remote} = require('electron')
const log = require(`${__dirname}/assets/log`)
const config = require(`${__dirname}/config`)

const action = (classe, callback) => {
  let btn = document.querySelector(classe)
  btn.addEventListener('click', callback, false)
}

const start = () => {
  action('.icon.icon-cancel', () => {
    remote.BrowserWindow.getFocusedWindow().close()
  })

  action('.icon.icon-home', async () => {
    const options = config

    const data = await log(options)
    console.log(data.toString())
  })

  action('.icon.icon-minus', () => {
    remote.BrowserWindow.getFocusedWindow().minimize()
  })

  action('.icon.icon-plus', () => {
    remote.BrowserWindow.getFocusedWindow().isMaximized()
      ? remote.BrowserWindow.getFocusedWindow().restore()
      : remote.BrowserWindow.getFocusedWindow().maximize()
  })

}

window.addEventListener('load', start, false)