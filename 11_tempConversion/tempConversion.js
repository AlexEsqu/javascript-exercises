const convertToCelsius = function(tempF) {
  let result =  (tempF - 32) * (5 / 9);
  if (Number.isInteger(result))
    return result;
  return parseFloat(result.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  let result = tempC * (9/5) + 32;
  if (Number.isInteger(result))
    return result;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
