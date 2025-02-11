// exc 2.2 Flattening
// this function flattens an array of arrays into a single array

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => [...flat, ...current], []));
// → [1, 2, 3, 4, 5, 6]