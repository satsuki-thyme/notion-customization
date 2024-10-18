/*

  count word

*/
(() => {
  document.querySelector(`body`).innerHTML += `<div class="count-word">Count</button>`
  let countWordButton = document.querySelector(`.count-word`)
  countWordButton.onclick = () => {
    let contentsWrapper = document
    .querySelector(`.notion-peek-renderer .notion-page-content`)
    if (contentsWrapper) {
      alert(countWord(contentsWrapper))
    }
    else {
      alert(countWord(document.querySelector(`.layout .notion-page-content`)))
    }
  }
  function countWord(elem) {
    let count = 0
    elem
    .querySelectorAll(`.notranslate`)
    .forEach(e => {
      count += e.textContent.replace(/\r?\n/g, ``).length
    })
    return count
  }
})()
