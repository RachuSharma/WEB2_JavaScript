// exc 2.6 Some method for arrays
// this function checks if there is at least one positive number in the array

function checkPositive(array) {
    return array.some(num => num > 0)
}
console.log(checkPositive([1, 2, 3, -4, 5]))
console.log(checkPositive([-1, -2, -3, -4, -5]))
console.log(checkPositive([1, -2, -3, -4, -5]))
