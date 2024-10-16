let countWord = () => {
  document.querySelector(`body`).innerHTML += `<div class="count-word">Count</button>`
  let countWordButton = document.querySelector(`.count-word`)
  let count = 0
  countWordButton.onclick = () => {
    let contentsWrapper = document
    .querySelector(`.notion-peek-renderer .notion-page-content`)
    if (contentsWrapper) {
      countWord(contentsWrapper)
    }
    else {
      countWord(document.querySelector(`.layout .notion-page-content`))
    }
    alert(count)
  }
  function countWord(elem) {
    elem
    .querySelectorAll(`.notranslate`)
    .forEach(e => {
      count += e.textContent.length
    })
  }
}
countWord()
