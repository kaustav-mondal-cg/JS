// // ==================== Q1. CONCEPTUAL UNDERSTANDING ====================

// // A function is a reusable block of code designed to perform a specific task.

// // Four advantages:
// // 1. Code reusability
// // 2. Reduces code duplication
// // 3. Makes code easier to read
// // 4. Makes debugging and maintenance easier


// // ==================== Q2. FUNCTION DECLARATION ====================

// function greetStudent(name) {
//     return `Hello ${name}, welcome to CodingGita!`;
// }

// console.log(greetStudent("Kaustav"));
// console.log(greetStudent("Rahul"));


// // ==================== Q3. HOISTING ====================

// // Function declarations can be called before their definition
// // because JavaScript hoists function declarations.

// sayHello();

// function sayHello() {
//     console.log("Hello, JavaScript!");
// }


// // ==================== Q4. FUNCTION EXPRESSION ====================

// const calculateAverage = function (a, b, c) {
//     return (a + b + c) / 3;
// };

// console.log(calculateAverage(80, 90, 70)); // 80


// // ==================== Q5. PARAMETERS VS ARGUMENTS ====================

// // Parameters: x and y
// // Arguments: 12 and 5

// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(12, 5)); // 60


// // ==================== Q6. RETURN STATEMENT ====================

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(24)); // true
// console.log(isEven(17)); // false


// // ==================== Q7. MULTIPLE PARAMETERS ====================

// function findPercentage(obtainedMarks, totalMarks) {
//     return (obtainedMarks / totalMarks) * 100;
// }

// console.log(findPercentage(456, 500)); // 91.2


// // ==================== Q8. FUNCTION WITHOUT RETURN ====================

// // A function without a return statement returns undefined.

// function displayMessage() {
//     console.log("Hello!");
// }

// let result = displayMessage();
// console.log(result); // undefined


// // ==================== Q9. SIMPLE INTEREST ====================

// const calculateSimpleInterest = function (principal, rate, time) {
//     return (principal * rate * time) / 100;
// };

// console.log(calculateSimpleInterest(10000, 5, 2)); // 1000


// // ==================== Q10. MIXED CONCEPT ====================

// // a) Function declarations can be called before their definition.
// // Function expressions cannot generally be called before initialization.

// function studentMessage(name, marks) {
//     return `Student ${name} has scored ${marks} marks.`;
// }

// console.log(studentMessage("Aman", 85));
// console.log(studentMessage("Riya", 92));


// // ==================== Q11. FUNCTION SCOPE ====================

// // Local scope: A variable declared inside a function is accessible
// // only inside that function.
// // Global scope: A global variable can be accessed inside functions.

// let course = "JavaScript";

// function displayAge() {
//     let age = 20;
//     console.log(age); // 20
// }

// displayAge();

// // console.log(age); // ReferenceError: age is not defined

// function displayCourse() {
//     console.log(course);
// }

// displayCourse(); // JavaScript


// // ==================== Q12. ANALYZE STUDENT ====================

// function analyzeStudent(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;

//     return `${name} scored total ${total} with average ${average}`;
// }

// console.log(analyzeStudent("Aman", 80, 90, 70));
// console.log(analyzeStudent("Riya", 75, 85, 95));


// // ==================== Q13. NESTED FUNCTIONS ====================

// // A nested function is a function declared inside another function.

// function studentReport(name, m1, m2, m3) {
//     function total() {
//         return m1 + m2 + m3;
//     }

//     return `${name} total marks: ${total()}`;
// }

// console.log(studentReport("Aman", 80, 90, 70));


// // ==================== Q14. REPORT CARD GENERATOR ====================

// function generateReport(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;
//     let result = average >= 40 ? "Pass" : "Fail";

//     return `Student Name: ${name}
// Total Marks: ${total}
// Average: ${average.toFixed(2)}
// Result: ${result}`;
// }

// console.log(generateReport("Aman", 80, 70, 90));
// console.log(generateReport("Riya", 30, 35, 25));


// // ==================== Q15. UTILITY FUNCTIONS ====================

// function sumOfThree(a, b, c) {
//     return a + b + c;
// }

// function averageOfTwo(x, y) {
//     return (x + y) / 2;
// }

// function maxOfTwo(a, b) {
//     return a > b ? a : b;
// }

// function fullName(first, last) {
//     return `${first} ${last}`;
// }

// console.log(sumOfThree(10, 20, 30));   // 60
// console.log(averageOfTwo(10, 20));     // 15
// console.log(maxOfTwo(25, 40));         // 40
// console.log(fullName("Aman", "Shah")); // Aman Shah


// // ==================== Q16. GRADE CALCULATOR ====================

// const calculateGrade = function (percentage) {
//     if (percentage >= 90) {
//         return "A+";
//     } else if (percentage >= 80) {
//         return "A";
//     } else if (percentage >= 70) {
//         return "B";
//     } else if (percentage >= 60) {
//         return "C";
//     } else if (percentage >= 40) {
//         return "D";
//     } else {
//         return "F";
//     }
// };

// console.log(calculateGrade(95)); // A+
// console.log(calculateGrade(82)); // A
// console.log(calculateGrade(67)); // C
// console.log(calculateGrade(45)); // D
// console.log(calculateGrade(32)); // F


// // ==================== Q17. SHOPPING DISCOUNT ====================

// function calculateFinalPrice(price, discountPercent) {
//     return price - (price * discountPercent / 100);
// }

// console.log(calculateFinalPrice(2500, 15)); // 2125
// console.log(calculateFinalPrice(1200, 10)); // 1080


// // ==================== Q18. TEMPERATURE CONVERTER ====================

// const celsiusToFahrenheit = function (c) {
//     return (c * 9 / 5) + 32;
// };

// const fahrenheitToCelsius = function (f) {
//     return (f - 32) * 5 / 9;
// };

// console.log(celsiusToFahrenheit(0));   // 32
// console.log(celsiusToFahrenheit(100)); // 212

// console.log(fahrenheitToCelsius(32));  // 0
// console.log(fahrenheitToCelsius(212)); // 100


// // ==================== Q19. MIXED ADVANCED ====================

// // a) A function expression using const/let cannot be called before
// // initialization. Accessing it earlier causes a ReferenceError.

// // b) Nested function example: calculate rectangle area.

// function rectangleArea(length, width) {
//     function multiply() {
//         return length * width;
//     }

//     return `Rectangle area: ${multiply()}`;
// }

// console.log(rectangleArea(10, 5)); // Rectangle area: 50


// // ==================== Q20. CHALLENGE QUESTION ====================

// function processStudent(name, m1, m2, m3) {
//     function calculateTotal() {
//         return m1 + m2 + m3;
//     }

//     let total = calculateTotal();
//     let average = total / 3;
//     let result = average >= 40 ? "Pass" : "Fail";

//     return `Student: ${name}
// Total: ${total}
// Average: ${average.toFixed(2)}
// Result: ${result}`;
// }

// console.log(processStudent("Aman", 80, 90, 70));
// console.log(processStudent("Riya", 30, 35, 25));
// console.log(processStudent("Karan", 65, 75, 85));

// function compareAverages(avg1, avg2) {
//     if (avg1 > avg2) {
//         return "First average is higher";
//     } else if (avg2 > avg1) {
//         return "Second average is higher";
//     } else {
//         return "Both averages are equal";
//     }
// }

// console.log(compareAverages(80, 70));
// console.log(compareAverages(60, 90));
// console.log(compareAverages(75, 75));