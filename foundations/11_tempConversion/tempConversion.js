const convertToCelsius = function(tempInF) {
  let celsius = (tempInF - 32) * (5/9)
  celsius = Math.round(celsius * 10)/10
  return celsius
};

const convertToFahrenheit = function(tempInCelsius) {
  let fahrenheit = ((9/5) * tempInCelsius) + 32
  fahrenheit = Math.round(fahrenheit * 10)/10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
