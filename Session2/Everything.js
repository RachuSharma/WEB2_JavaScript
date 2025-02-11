// 2.7 some method for arrays
// This function checks if every element in the array passes the test

function every (array, predicate ){
    for (let element of array){
        if (!predicate(element)) return false;
    }
    return true;
}


console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// trying some method for arrays using the every method
function every2(array, predicate){
    return !array.some(element => !predicate(element));
}
console.log(every2([1, 3, 5], n => n < 10));