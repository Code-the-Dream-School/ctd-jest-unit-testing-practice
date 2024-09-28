function fahrenheitToCelsius(degreesFahrenheit) {
  // The equation to convert from fahrenheit to celsius is
  //  (<degrees in fahrenheit> - 32) * 5/9 = <degrees in celsius>
  let degreesCelsius = ((degreesFahrenheit - 32) * 5) / 9;

  return degreesCelsius;
}

function celsiusToFahrenheit(degreesCelsius) {
  // The equation to convert from celsius to fahrenheit is
  //  (<degrees in celsius> * 9/5) + 32 = <degrees in fahrenheit>
  let degreesFahrenheit = (degreesCelsius * 9) / 5 + 32;

  return degreesFahrenheit;
}

function getFirstStringFromArray(list) {
  // if list doesn't have a length property or it is 0 then it either isn't an array or
  // it is an empty array. In either case, return null.
  if (!list.length) {
    return null;
  }

  let index = 0;

  while (index < list.length) {
    if (typeof list[index] === "string") {
      return list[index];
    }
    index++;
  }

  return null;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  getFirstStringFromArray,
};
