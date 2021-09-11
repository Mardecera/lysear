import * as DOM from '../functions/selectors.js'
import * as UI from '../functions/functions.js'

const QUERY_NOT_FOUND = 'Cancion o artista no encontrados :('
const INPUT_ERRORS = 'Todos los campos son necesarios...'

export class App{
    constructor() {
        this.init()
    }

    init() {
        window.onload = () => {
            DOM.formLyrics.addEventListener('submit', async (event) => {
                event.preventDefault()

                const artistName = DOM.inputArtistName.value
                const songName = DOM.inputSongName.value

                if (artistName !== '' & songName !== '') {
                    const lyrics = await this.getLyrics(artistName, songName)

                    // DOM.divLyrics.textContent = `hola \r jio`
                    if (lyrics === undefined) { UI.showMessage('error', QUERY_NOT_FOUND) }
                    else{ UI.addLyrics(lyrics) }
                } else { UI.showMessage('error', INPUT_ERRORS) }
            })
        }
    }

    async getLyrics(artistName = String, songName = String) {
        const url = `https://api.lyrics.ovh/v1/${artistName}/${songName}`

        try {
            const request = await fetch(url)
            const json = await request.json()
            return json.lyrics
        } catch (error) {
            console.log(error)
        }
    }
}
