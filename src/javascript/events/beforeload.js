const beforeload = element => {
  document.querySelector(element).innerHTML = 'loading...'
}

module.exports = beforeload
