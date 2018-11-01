
// Data Structures Exercises

// Range Function

function range(start, end, step = start < end ? 1 : -1){
    let array = [];
    if(step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i+= step)
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
        for (let i = 1; i < array.length; i++){
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
    for(let i = array.length-1; i >= 0; i--){
        returnArray.push(array[i])
    }
    return returnArray
};

const  reverseArrayInPlace = (array) => {
    let returnArray = []
    let first = undefined;
    let last = undefined;
    if (first<=last);
    for(let i = array.length-1; i >= 0; i--){

    }
};

console.log(reverseArray([1,2,3,4,5]));

