const get_puzzle = (callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (ev) => {
        if (ev.target.readyState === 4 && ev.target.status === 200) {
            const data = JSON.parse(ev.target.response)
            callback(undefined, data.puzzle)
        }
        else if (ev.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3')
    request.send()
}

const get_puzzleSync = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
    request.send()
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
    }
    else if (request.readyState === 4) {
        throw new Error('An error has taken place')
    }
}