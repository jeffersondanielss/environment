const action = require(`../action`)
const logging = require(`../actions/logging`)

const getlog = () => {
  action('.content__box.content__box--full svg', logging)
}

module.exports = getlog
