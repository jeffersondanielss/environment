const {getFocusedWindow} = require('electron').remote.BrowserWindow

const action = require(`./action`)

const header = () => {
  action('.sidebar__btn--close', () => {
    getFocusedWindow().close()
  })

  action('.sidebar__btn--minimize', () => {
    getFocusedWindow().minimize()
  })

  action('.sidebar__btn--maximize', () => {
    return getFocusedWindow().isMaximized() ?
      getFocusedWindow().restore() :
      getFocusedWindow().maximize()
  })
}

module.exports = header
