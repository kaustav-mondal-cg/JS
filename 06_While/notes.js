// while(condition){
//     // code to be executed
//     // updation
// }

// let i=5;
// while(i>0){
//     console.log(i);
//     i--;
// }

// let sum = 0;
// let j = 1;
// while(j<=10){
//     sum += j;
//     j++
// }
// console.log(sum)

// let num = 1;
// while(num<=50){
//     console.log(num);
//     num++;
// }   

// let num = 1234;
// let reverse = 0;
// while(num>0){
//     let rem = num%10;
//     reverse = reverse*10 + rem;
//     num = Math.floor(num/10);
// }
// console.log(reverse)

// do{
//     //code
// } while(condition);
// let i = 15;
// do{
//     console.log("hello")
//     i++

// }while(i<=10)

// let i = 5;
// while(i<=10){
//     console.log("hello")
//     i++
// }
// let i=10;
// do{
//     console.log(i)
//     i--
// }while(i>0)











let mat = [
    [10,20,30,40,50],
    [60,70,80,90,100],
    [110,120,130,140,150],
    [160,170,180,190,200]
]

let rows = mat.length;
let cols = mat[0].length;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        console.log("Element at row", i, "and column", j, "is", mat[i][j]);
    }
} 

for (let i = 0; i < rows; i++) {
    let bag = ""
    for (let j = 0; j < cols; j++) {
        bag += mat[i][j] + " ";
    }
    console.log("Bag:", bag);
}
//  let mat1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < mat1.length; i++) {
//     let bag = ""
//     for (let j = 0; j < mat1[0].length; j++) {
//         bag += mat1[i][j] + " ";
//     }
//     console.log(bag);
// }

// let matrix = [];
// for(let i=0; i<3; i++){
//     bag=""
//     matrix[i] = [];
//     for(let j=0; j<4; j++){
//        cellvalue = (i+1) * (j+1);
//        matrix[i][j] = cellvalue;
//        bag += matrix[i][j] + " ";

//     }
// }
// console.log(bag)