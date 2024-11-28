const repeatString = function (string, num) {
if (num > 0) {
  return string.repeat(num);
} else if (num < 0 ) {
    return `ERROR`;
} else {
  return ``;
}

//legit

}
  
  module.exports = repeatString;
  