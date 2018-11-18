// High Order Functions Exercises

// Flattening an Array

array = [[1,2,3], [4,5], [6]];
console.log(array.reduce((a, b) => a.concat(b), []));

// A Loop

const loop = (start, test, update, body) => {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
};

// Every

const every = (array, predicate) => {
    for(let element of array){
        if(!predicate(element)) return false
    }
    return true
};

const every2 = (array, predicate) => {
  return !array.some(element => !predicate(element))
};

console.log(every2([1, 3, 5], n => n < 10));

