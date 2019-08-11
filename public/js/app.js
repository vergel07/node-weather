const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageSummary = document.querySelector('#message-summary')
const messageTemperature = document.querySelector('#message-temperature')
const messageOtherSummary = document.querySelector('#message-other-summary')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value

    messageOne.textContent = 'Loading...'
    messageSummary.textContent = ''
    messageTemperature.textContent = ''
    messageOtherSummary.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageSummary.textContent = data.summary
            messageTemperature.textContent = data.temperature
            messageOtherSummary.textContent = data.otherSummary
        }    
    })
})
})