const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/9146fb1049d5157a91c26ef41c1a6601/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const summary = body.daily.data[0].summary
            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            callback(undefined, `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast
