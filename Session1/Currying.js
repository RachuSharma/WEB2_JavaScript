// exc 7. Currying

function unCurried(x, y) {
    return x + y
}

function curried(x) {
    return function (y) {
        return x + y
    }
}

console.log(curried(1)(2))

//Modify the range function from the previous exercise. If it is called with just a start argument, another function will be returned that expects just the end argument.

function range(start) {
    let numbers = [];
  
    return (end) => {
      for (let index = start; index <= end; index++) {
        numbers.push(index);
      }
      return numbers;
    };
  }

let rangeFrom3To = range(3);
let rangeFrom7To = range(7);

console.log(rangeFrom3To(3));
console.log(rangeFrom3To(8));
console.log(rangeFrom7To(9));
