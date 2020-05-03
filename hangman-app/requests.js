const getPuzzleAsync = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle')
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    }
    throw new Error('Something went wrong')
}


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

const get_puzzle_promise = (wordCount) => new Promise((resolved, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (ev) => {
        if (ev.target.readyState === 4 && ev.target.status === 200) {
            let puzzle = JSON.parse(ev.target.response)
            resolved(puzzle.puzzle)
        } else if (ev.target.readyState === 4) {
            reject('Something went wrong buddy')
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})
const location_url = 'http://ipinfo.io/json?token=fab2c5384f3cc7'

const getLocation = () => fetch(location_url).then((response) => {
    if (response.status === 200) {
        return response.json()
    }
    throw new Error
})

getLocation().then((data) => {
    console.log(data)
    console.log('City: ', data.city)
    console.log('Country: ', data.country)
    console.log('Region: ', data.region)
}).catch((error) => {
    console.log(error)
})

const countries_url = 'https://restcountries.eu/rest/v2/all'
const getCountry = (countryCode) => fetch(countries_url).then((response) => {
    if (response.status === 200) {
        return response.json()
    }
    throw new Error
}).then((countries) => {
    return countries.find((country) => country.alpha2Code === countryCode)
})

getCountry('CL').then((country) => {
    console.log(country.name)
}).catch((error) => {
    console.log(error)
})

getLocation().then((location) => {
    return getCountry(location.country)
}).then((country) => {
    console.log('Working with promise chaining', country.name)
}).catch((error) => {
    console.log(error)
})


const getCountryAsync = async (countryCode) => {
    const response = await fetch(countries_url)
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }
    throw new Error
}


const getLocationAsync = async () => {
    const response = await fetch(location_url)
    if (response.status === 200) {
        return response.json()
    }
    throw new Error
}

getLocationAsync().then((location) => {
    return getCountryAsync(location.country)
}).then((country) => {
    console.log('Working with Async Await:', country.name)
}).catch((error) => {
    console.log(error)
})

const getCurrentCountry = async () => {
    const location = await getLocationAsync()
    return getCountryAsync(location.country)
}

getCurrentCountry().then((country) => {
    console.log('LAST function with Async', country.name)
}).catch((error) => {
    console.log(error)
})