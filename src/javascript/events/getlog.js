const action = require(`../action`)
const logger = require(`../actions/logger`)

const getlog = () => {
  action('.content__box.content__box--full svg', logger)
}

module.exports = getlog
