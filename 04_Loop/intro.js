// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// for (let i=1; i<=10; i++) {
//     console.log("9 * "+ i + " = " +9 * i);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum += i;
// }
// console.log(sum);

// let mult = 1;
// for (let i = 1; i <= 10; i++){
//     mult *= i;
// }
// console.log(mult);


// let s ="";
// for (let i = 1; i <= 5; i++){
//      s += "*"+" ";
// }console.log(s)


// ARRAY

// let arr = [ 10, 20, 30, 40, 50];

// for (let i = 0; i<=arr.length; i++){
//     console.log(arr[i]);
// }

// let arr=[1,2,3,4,5]
// for (let i=0; i<arr.length; i++){
//     console.log(arr[i]**2);
// }


// let str="Coding gita";

// for (let i=0;i<str.length; i++){
//     console.log(str[i]);
// }



let str="Coding gita";

for (let i=0;i<str.length; i++){
    if(str[i]==(" ")){
        continue;
    }
    console.log(str[i]);
}