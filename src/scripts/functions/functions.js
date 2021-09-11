import { divLyrics } from '../functions/selectors.js'

function showMessage(type, message) {
    cleanResult()
    const span = document.createElement('span')
    span.textContent = message
    divLyrics.appendChild(span)
}

function addLyrics(lyrics) {
    cleanResult()
    const span = document.createElement('pre')
    span.textContent = lyrics
    divLyrics.appendChild(span)
}

function cleanResult() {
    while(divLyrics.lastChild){ divLyrics.lastChild.remove() }
}

export { showMessage, addLyrics }