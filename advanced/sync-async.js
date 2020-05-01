const getCountry = (code, callback) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (ev) => {
        if (ev.target.readyState === 4 && ev.target.status === 200) {
            const data = JSON.parse(ev.target.response)
            const country = data.find((country) => {
                return country.alpha2Code === code
            })
            if (country) {
                callback( undefined, country.name)
            } else {
                callback('Code does not exist', undefined)
            }
        } else if (ev.target.readyState === 4) {
            callback('Something went wrong', undefined)
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all')
    request.send()
}

getCountry('CO', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(country)
    }
})