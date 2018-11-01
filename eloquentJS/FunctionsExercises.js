
// Functions Chapter Exercises

// Minimum Function

let minFunc = (a, b) => {
    if(a === null || b === null)
        return "Null Value Found";
    if(a===b)
        return a;
    if(a<b)
        return a;
    else
        return b;
};


// Recursive isEven

let isEven = (a) => {
    if (a < 0)
        a *= -1;
    if (a === 1) {
        console.log("False");
        return false;
    }
    if (a === 0) {
    console.log("True");
    return true;
    }
    else
        isEven(a-2);
};



isEven(-5);
console.log(minFunc(5,6));