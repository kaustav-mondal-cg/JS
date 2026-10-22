//Print the number from 1 to 30 and break the loop if the number is divisible by both 3 and 7

// for (let i = 1; i<=30; i++){
//      console.log(i);  
//     if(i%3==0 && i%7==0){
//         break;
//     } 
// }

//Print odd number from 1 to 20 using continue.

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }


//Print numbers from 1 to 25, but skip all numbers that are perfect squares (1, 4, 9, 16, 25).

// for(let i=1; i<=25; i++){
//     if(Number.isInteger(Math.sqrt(i))){  // ***  Number.isInteger() is used to determine wheather the passes value is an int or not. Math.sqrt() is used to find the square root of a number.
//         continue;
//     }
//     console.log(i);
// }


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                                                                                                                   |
// REVERSE FOR LOOP                                                                                                                                                                                  |
//                                                                                                                                                                                                   |
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

//Print all even numbers from 20 down to 2 using a reverse for loop.

// for (let i = 20; i>=2; i--){
//     console.log(i);
// }

//Print the multiplication table of 8 in reverse (from 8 × 10 = 80 down to 8 × 1 = 8).

// for (let i=10; i>=1; i--){
//     console.log("8 x "+ i + " = "+8)
// }

//Given an array [10, 20, 30, 40, 50], print all elements in reverse order (do not use .reverse()).

// array = [10,20,30,40,50];
// for (let i=array.length-1; i>=0; i--){
//     console.log(array[i]);
// }
//OR
// array = [10,20,30,40,50];
// let bag="";
// for (let i=array.length-1; i>=0; i--){
//     bag += array[i] + " ";
// }
// console.log(bag);

//Given a string "CodingGita", print all characters in reverse order (do not use .reverse() or .split()).

// let str="CodingGita";

// for (let i=str.length-1; i>=0; i--){
//     console.log(str[i]);
// }


//Print
// *
// **
// ***
// ****
// *****

// for(let i=1; i<=5; i++){
//     let s = "";
//     for(let j = 1; j<=i;j++){
//         s += "*" + " ";
//     }
//     console.log(s);
// }

// for(let i=1; i<=5; i++){
//     let s = "";
//     for(let j = 1; j<=5;j++){
//         s += "*" + " ";
//     }
//     console.log(s);
// }

// for(let i=1; i<=5; i++){
//     let s="";
//     for(let j=1;j<=i;j++){
//         s+="*"+" ";
//     }
//     console.log(s);
// }

// for (let i = 1; i <= 9; i += 3) {
//     let row = "";
//     for (let j = i; j < i + 3; j++) {
//         row += j;
//     }

//     console.log(row);
// }

// for (let i = 1; i <= 9; i += 3) {
//     for (let j = i; j < i + 3; j++) {
//         process.stdout.write(j.toString());
//     }
//     console.log();
// }

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
        process.stdout.write(matrix[i][j].toString());
    }
    console.log();
}
