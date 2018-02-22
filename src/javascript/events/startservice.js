const action = require(`../action`)
const service = require(`../actions/service`)

const startService = options => {
  const { serviceName, selector, host, envName } = options

  action(`#${envName} .content__box--${serviceName} .icon--up`, async () => {
    await service({ serviceName, cmd: 'start', selector, host })
    await service(options)
  })
}

module.exports = startService
