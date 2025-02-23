const convertToCelsius = function(tempF) {
    let tempC = (tempF - 32) / 1.8;
    if (tempC === Number(tempC.toFixed(0))) {
      return tempC; 
    } else { 
      return Number(tempC.toFixed(1));
    }
};

const convertToFahrenheit = function(tempC) {
    let tempF = tempC * 1.8 + 32;
    if (tempF === Number(tempF.toFixed(0))) {
      return tempF;
    } else { 
      return Number(tempF.toFixed(1));
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
