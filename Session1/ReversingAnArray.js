// exc 8. Reversing An Array

function reverseArray(arr) {
    let reversedArray = [];
    for (let index = arr.length - 1; index >= 0; index--) {
        reversedArray.push(arr[index]);
    }
    return reversedArray;
}
console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];


function reverseArrayInPlace(arr) {
    for (let index = 0; index <= arr.length; index++)
     {
        let value = arr.pop();
        arr.splice(index, 0, value);
    }
}
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]