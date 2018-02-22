const { environments } = require(`../../../config`)

const getEnvProp = (prop, environment) => {
  if (Object.hasOwnProperty.call(environments[environment], prop)) {
    return environments[environment][prop]
  } else if (prop === 'services') {
    return []
  }

  return {}
}

module.exports = {
  getEnvProp
}
