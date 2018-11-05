// Data Structures Exercises

// Range Function

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += step)
            array.push(i);
    }
    return array;
}

// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];
//
//     if (step > 0) {
//         for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//         for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
// }


const sum = (array) => {
    let total = 0;
    for (let i = 1; i < array.length; i++) {
        total += array[i]
    }
    return total;
};

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// Reverse Array

const reverseArray = (array) => {
    let returnArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        returnArray.push(array[i])
    }
    return returnArray
};

const reverseArrayInPlace = (array) => {
    let first = undefined;
    let last = undefined;
    for(let i = 0; i < array.length/2; i++){
        first = array[i];
        last = array[(array.length-1)-i];
        array[i] = last;
        array[(array.length-1)-i] = first;
    }
    return array;
};

// FROM SOLUTIONS:

// function reverseArray(array) {
//     let output = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         output.push(array[i]);
//     }
//     return output;
// }
//
// function reverseArrayInPlace(array) {
//     for (let i = 0; i < Math.floor(array.length / 2); i++) {
//         let old = array[i];
//         array[i] = array[array.length - 1 - i];
//         array[array.length - 1 - i] = old;
//     }
//     return array;
// }

const arrayToList = (array, val) => {
    if (array.length>1){
        let list = {
            value: val,
            rest: arrayToList(array.slice(1), val++)
        }
        return list;
    }
    else {
        let list = {
            value: val
        }
    }
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
console.log(arrayToList([1,2,3], 1));

