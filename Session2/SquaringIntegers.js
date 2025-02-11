//exc 2.1 Squaring Integers
// this function squares only the positive integers in the array
function squareList(array) {
    return array.filter(num => num > 0 && num % 1 === 0).map(num => num * num)
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
// → [25, 9]