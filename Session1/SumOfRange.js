/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
 */

let range = (start, end) => {
    let numbers = [];
  
    for (let index = start; index <= end; index++) {
      numbers.push(index);
    }
    return numbers;
  };
  
  /* Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and verify that it returns 55. */
  
  let sum = (arrayNumber) => {
    let finalSum = 0;
    arrayNumber.forEach((element) => {
      finalSum += element;
    });
  
    return finalSum;
  };
  
  /* As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].  */
  let rangeWithStep = (start, end, step = 1) => {
    let numbers = [];
  
    if (start < end) {
      for (let index = start; index <= end; index += step) {
        numbers.push(index);
      }
    } else if (start > end) {
      for (let index = start; index >= end; index += step) {
        numbers.push(index);
      }
    }
    return numbers;
  };
  
  console.log(sum(range(1, 10)));
  console.log(range(1, 10));
  console.log(rangeWithStep(1, 10, 2));
  console.log(rangeWithStep(5, 2, -1));
  