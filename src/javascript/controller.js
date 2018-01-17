const action = require(`./action`)
const config = require(`../../config`)
const log = require('./log')

const controller = () => {
  action('.log', async () => {
    const options = config

    const data = await log(options)
    console.log(data.toString())
  })
}

module.exports = controller