const app = require('electron').remote.app
const { remote } = require('electron')
const action = require(`./action`)

const header = () => {
  action('.header__btn--close', () => {
    remote.BrowserWindow.getFocusedWindow().close()
  })

  action('.header__btn--minimize', () => {
    remote.BrowserWindow.getFocusedWindow().minimize()
  })

  action('.header__btn--maximize', () => {
    remote.BrowserWindow.getFocusedWindow().isMaximized()
      ? remote.BrowserWindow.getFocusedWindow().restore()
      : remote.BrowserWindow.getFocusedWindow().maximize()
  })

}

module.exports = header