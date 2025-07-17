/*

  count word

*/
(() => {
  let shortcutKey = [`Control`, `Alt`, `Shift`, `C`]
  document.querySelector(`body`).innerHTML += `<div class="count-word">Count</button>`
  let countButton = document.querySelector(`.count-word`)
  let keydown = {}
  window.onkeydown = e => {
    keydown[e.key] = true
    if (
      shortcutKeyDown()
      &&
      !otherKeyDown()
    ) {
      counterBody()
      keydown.forEach(e => {
        e = false
      })
    }
    function otherKeyDown() {
      w = false
      Object.keys(keydown)
      .filter(e => keydown[e])
      .filter(e => !shortcutKey.includes(e))
      .forEach(e => {
        if(keydown[e]) {
          w = true
        }
      })
      return w
    }
  }
  window.onkeyup = e => {
    keydown[e.key] = false
  }
  countButton.onclick = () => {
    counterBody()
  }
  function shortcutKeyDown() {
    let w = Object.keys(keydown)
    .filter(e => keydown[e])
    .filter(e => shortcutKey.includes(e))
    return w.length === shortcutKey.length ? true : false
  }
  function counterBody() {
    let selection = window.getSelection()
    if (selection.type === `Caret`) {
      let contentsWrapper = document
      .querySelector(`.notion-peek-renderer .notion-page-content`)
      if (contentsWrapper) {
        alert(count(contentsWrapper))
      }
      else {
        alert(count(document.querySelector(`.layout .notion-page-content`)))
      }
    }
    if (selection.type === `Range`) {
      alert(selection.toString().replace(/[\r\n]/g, ``).length)
    }
    if (selection.type === `None`) {
      alert(`The selected paragraph/block itself is not supported.`)
    }
    function count(elem) {
      let count = 0
      elem
      .querySelectorAll(`.notranslate`)
      .forEach(e => {
        count += e.textContent.replace(/\r?\n/g, ``).length
      })
      return count
    }
  }
})()
