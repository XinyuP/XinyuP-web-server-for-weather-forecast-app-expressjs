// This is the client side JavaScript
// Fetch API -- it is a browser based API, we can use it in all modern browsers
// it is not part of JavaScript. not accessible in node js




// console.log('client side js file is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault() // prevemt default behavior which is to refresh the browser
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            }
            else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })



    // // destructuring
    // fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    //     response.json().then((error, {forecast, location } = {}) => {
    //         if (error) {
    //             console.log(error)
    //         }
    //         else {
    //             console.log(forecast)
    //             console.log(location)
    //         }     
    //     })
    // })

})
