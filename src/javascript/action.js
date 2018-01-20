const action = (classe, callback) => {
  const btn = document.querySelector(classe)
  btn.addEventListener('click', callback, false)
}

module.exports = action
