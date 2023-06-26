// Using iteration method
function fibs(n) {
    let fibArray = [0, 1];
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return fibArray;
    }

    for (i=0; i < n-2; i++) {
        fibArray.push(fibArray[fibArray.length -1] 
            + fibArray[fibArray.length - 2]);
    }
    return fibArray;
}

console.log(fibs(0)) // []
console.log(fibs(2)) // [0, 1]
console.log(fibs(5)) // [0, 1, 1, 2, 3]
console.log(fibs(8)) // [0, 1, 1, 2, 3, 5, 8, 13]

// Using recursion method
function fibs(n, fibArray = [0, 1]) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return fibArray;
    }

    fibArray.push(fibArray[fibArray.length -1] 
        + fibArray[fibArray.length - 2]);

    return fibs(n-1, fibArray);
}

console.log(fibs(0)) // []
console.log(fibs(2)) // [0, 1]
console.log(fibs(5)) // [0, 1, 1, 2, 3]
console.log(fibs(8)) // [0, 1, 1, 2, 3, 5, 8, 13]