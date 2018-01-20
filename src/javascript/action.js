const action = (classe, callback) => {
  let btn = document.querySelector(classe)
  btn.addEventListener('click', callback, false)
}

module.exports = action
