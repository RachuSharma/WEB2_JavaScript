// 7exc 8. A List

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
        },
    },
}

function arrayToList(array) {
    let list = null;
    for (let index = array.length - 1; index >= 0; index--) {
        list = { value: array[index], rest: list };
    }
    return list;
}


function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])))
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)))
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1))
// → 20
