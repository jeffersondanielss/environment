const app = require('electron').remote.app
const { remote } = require('electron')
const action = require(`./action`)

const header = () => {
  action('.sidebar__btn--close', () => {
    remote.BrowserWindow.getFocusedWindow().close()
  })

  action('.sidebar__btn--minimize', () => {
    remote.BrowserWindow.getFocusedWindow().minimize()
  })

  action('.sidebar__btn--maximize', () => {
    remote.BrowserWindow.getFocusedWindow().isMaximized()
      ? remote.BrowserWindow.getFocusedWindow().restore()
      : remote.BrowserWindow.getFocusedWindow().maximize()
  })
}

module.exports = header
