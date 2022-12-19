const request = require('postman-request');
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// encodeURIComponent(latitude+','+longitude)
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=48ff11e343fef3921bb5cb441725bdf2&query=' + latitude + ',' + longitude + '&units=f';

    request({ url, json: true }, (error, {body}) => {
		// error handling
		if (error) {
			// fails at a low level (like wifi connection)
			callback('Unable to connect weather service!', undefined);
		} else if (body.error) {
			// invalid input
			callback('Unable to find location', undefined);
		} else {
			callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " Fahrenheit out. It feels like " + body.current.feelslike +" Fahrenheit out.")
		}
	});
};

module.exports = forecast;

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })
