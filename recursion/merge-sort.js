// Merge sort using recursion

function merge(left, right) {
    let sorted = [];

    while (left.length && right.length) {
        if(left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    return [...sorted, ...left, ...right];
}


function mergeSort(array) {
    if(array.length <= 1) return array;

    let mid = Math.floor(array.length/2);

    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid))

    return merge(left, right)
}

console.log(mergeSort([])) // []
console.log(mergeSort([0])) // [0]
console.log(mergeSort([4, 7, 5, 8, 2, 6, 1, 9, ])) // [1, 2, 4, 5, 6, 7, 8, 9]