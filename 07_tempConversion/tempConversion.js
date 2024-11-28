function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(finput) {
  console.log(finput);
  let cconverted = ((finput - 32 ) * 5/9);
  let crounded = round(cconverted, 1);
    return crounded;
};

const convertToFahrenheit = function(cinput) {
  let fconverted = (cinput * 9/5 + 32);
  let frounded = round(fconverted, 1);
  return frounded
};

// LEGIT

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit

};
