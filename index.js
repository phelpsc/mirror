'use strict';
const DarkSky = require('dark-sky');
const forecast = new DarkSky('19420307beccd898b11977b6cbfc19c4');

//var latitude = 39.018290;
//var longitude = -77.073715;

forecast.latitude('39.018290').longitude('-77.073715').get().then(res => {
  console.log(res);
  console.log("The current weather is " + res.currently.summary + " and the temperature is " + res.currently.temperature + " degrees Farenheit.");
})
