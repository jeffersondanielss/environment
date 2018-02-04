const { environments } = require(`../../../config`)

const getEnvProp = (prop, environment) => {
  if ( environments[environment].hasOwnProperty(prop) ) {
    return environments[environment][prop]

  } else if ( prop === 'services' ) {
    return []
  } else {
    return {}
  }
}

  module.exports = {
    getEnvProp
  }