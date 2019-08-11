const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmVyZ2VsMDA3IiwiYSI6ImNqejUzdTBmbzA3ZnozY25raDRvbWlwcDEifQ.Z0IBtCx9CZFzzEbXZyW46g&limit=1`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

// const geocode = async (address) => {
//     const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmVyZ2VsMDA3IiwiYSI6ImNqejUzdTBmbzA3ZnozY25raDRvbWlwcDEifQ.Z0IBtCx9CZFzzEbXZyW46g&limit=1`)

//     if (response.status === 200) {
//         const data = await response.json()
//         return {
//             latitude: data.body.features[0].center[1],
//             longitude: data.body.features[0].center[0],
//             location: data.body.features[0].place_name
//         }
//     } else {
//         throw new Error('Unable to fetch puzzle')
//     }

// }

module.exports = geocode
