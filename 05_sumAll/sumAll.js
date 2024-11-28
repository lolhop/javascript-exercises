const sumAll = function (a, b) {
    let sum = 0;
    if (typeof a === 'number' && a > 0 && b > 0 && typeof b === 'number' && Number.isInteger(a) && Number.isInteger(b)) {

        if (a < b) {
            for (let i = a; i <= b; i++) {
                sum += i;
            }
        }
        else {
            for (let i = b; i <= a; i++) {
                sum += i;
            }
        }
    } else {
        return `ERROR`;
    }
    return sum;
};
 //legit!!
// Do not edit below this line
module.exports = sumAll;
