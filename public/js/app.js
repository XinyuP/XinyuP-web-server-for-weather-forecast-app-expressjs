// This is the client side JavaScript
// Fetch API -- it is a browser based API, we can use it in all modern browsers
// it is not part of JavaScript. not accessible in node js



// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         }
//         else {
//             console.log(data.forecast)
//             console.log(data.location)
//         }
//     })
// })

// destructuring
fetch('http://localhost:3000/weather?address=beijing').then((response) => {
    response.json().then((error, {forecast, location } = {}) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(forecast)
            console.log(location)
        } 
    
    })

})


// console.log('client side js file is loaded')