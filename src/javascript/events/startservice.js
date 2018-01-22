const action = require(`../action`)
const service = require(`../actions/service`)

const startService = serviceName => {
  console.log('start')
  action(`.content__box--${serviceName} .icon--up`, async () => {
    await service(
      `${serviceName}`,
      'start',
      `.content__box--${serviceName} .box__area`
    )
    await service(
      `${serviceName}`,
      'status',
      `.content__box--${serviceName} .box__area`
    )
  })
}

module.exports = startService
