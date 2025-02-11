// exc 2.4 Alphabetical Sorting
// short copy of the array
function numberShort(array) {
    return [...array].sort((a, b) => a - b);
}
const numbers = [1, 5, 2, 3, 4];

//short and print copy of the array
console.log(numbers);

function alphabeticalOrder(array) {
    return [...array].sort((a,b) => (  a === b ? 0 : a < b ? -1 : 1));
}

const letters = ["a", "d", "c", "a", "z", "g"];

//short and print copy of the array
console.log(alphabeticalOrder(letters));

// print the original array
console.log(letters);
