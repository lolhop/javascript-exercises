const leapYears = function(yearinput) {
    if ((yearinput % 4 === 0) && (yearinput % 100 != 0 || yearinput % 400 === 0)){
        return true;
    } else {
        return false;
    }
};
// LEGIT LEGIT LETS GO
// Do not edit below this line
module.exports = leapYears;
