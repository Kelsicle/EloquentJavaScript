
const triangle = function() {
    let string = "*";
    for(let count = 0; count <7; count++){
        console.log(string);
        string = string + "*";
    }

    /*
    Solution from site:

    for (let line = "#"; line.length < 8; line += "#")
        console.log(line);

     */
};

const fizzBuzz = function() {
    for(let count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            console.log("Fizz-Buzz");
            continue;
        }
        if (count % 3 === 0) {
            console.log("Fizz");
            continue;
        }
        if (count % 5 === 0){
            console.log("Buzz");
            continue;
        }
        console.log(count);
    }

    /*
    Solution from site:

    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0) output += "Fizz";
        if (n % 5 == 0) output += "Buzz";
        console.log(output || n);
}

     */

};

const chessBoard = function(x) {
    let board = "";
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < x; j++) {
        if ((i + j) % 2 === 0) {
          board += " ";
        } else {
          board += "#";
        }
      }
      board += "\n";
    }

    console.log(board);

}

let val = 2;

console.log(++val);

val = 2;

console.log(val++ + '-->' + val);


/*
triangle();
console.log("\n====================\n");
fizzBuzz();
console.log("\n====================\n");
*/
chessBoard(16);
