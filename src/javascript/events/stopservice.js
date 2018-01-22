const action = require(`../action`)
const service = require(`../actions/service`)

const stopService = serviceName => {
  action(`.content__box--${serviceName} .icon--off`, async () => {
    await service(
      `${serviceName}`,
      'stop',
      `.content__box--${serviceName} .box__area`
    )
    await service(
      `${serviceName}`,
      'status',
      `.content__box--${serviceName} .box__area`
    )
  })
}

module.exports = stopService
