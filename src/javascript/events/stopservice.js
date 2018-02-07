const action = require(`../action`)
const service = require(`../actions/service`)

const stopService = options => {
  const { serviceName,  cmd,  selector,  host, envName } = options

  action(`#${envName} .content__box--${serviceName} .icon--off`, async () => {
    await service({ serviceName,  cmd: 'stop',  selector,  host })
    await service(options)
  })
}

module.exports = stopService
