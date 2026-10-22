// /*
//  * JavaScript Operators Assignment - Solutions
//  * File: js-operators-assignment.js
//  *
//  * Note: every question is wrapped in its own { } block so that variable
//  * names (a, b, x, y ...) can be reused without "already declared" errors.
//  * "Predict the output" answers are written in the comment: // Output: ...
//  */

// // =====================================================================
// // PART A: ARITHMETIC OPERATORS
// // =====================================================================
// console.log("===== PART A: ARITHMETIC =====");

// // ---------- 1. Addition + ----------
// console.log("--- A1 Addition ---");
// { // Q1: total collection
//   let classOneAmount = 15000;
//   let classTwoAmount = 12500;
//   let totalCollection = classOneAmount + classTwoAmount;
//   console.log("Total collection: ₹" + totalCollection); // 27500
// }
// { // Q2: total pages
//   let morningPages = 18;
//   let eveningPages = 25;
//   let totalPages = morningPages + eveningPages;
//   console.log("Total pages read:", totalPages); // 43
// }
// { // Q3: total items sold
//   let mondayItems = 125;
//   let tuesdayItems = 178;
//   let totalItems = mondayItems + tuesdayItems;
//   console.log("Total items sold:", totalItems); // 303
// }
// { let a = "10"; let b = 5; let result = a + b; console.log(result); } // Q4 Output: 105 (string concatenation)
// { let x = 5; let y = "3"; let result = x + y; console.log(result); } // Q5 Output: 53 (string)
// { let p = "Hello"; let q = "World"; let result = p + " " + q; console.log(result); } // Q6 Output: Hello World
// { let m = 0; let n = false; let result = m + n; console.log(result); } // Q7 Output: 0 (false becomes 0)
// { let val1 = 100; let val2 = "200"; let val3 = val1 + val2; console.log(val3); } // Q8 Output: 100200 (string)

// // ---------- 2. Subtraction - ----------
// console.log("--- A2 Subtraction ---");
// { // Q1: empty seats
//   let totalSeats = 80;
//   let occupiedSeats = 53;
//   console.log("Empty seats:", totalSeats - occupiedSeats); // 27
// }
// { // Q2: final marks
//   let marks = 500;
//   let marksLost = 35;
//   console.log("Final marks:", marks - marksLost); // 465
// }
// { // Q3: remaining boxes
//   let totalBoxes = 2500;
//   let boxesSent = 875;
//   console.log("Remaining boxes:", totalBoxes - boxesSent); // 1625
// }
// { let a = "10"; let b = 3; let result = a - b; console.log(result); } // Q4 Output: 7 (- converts string to number)
// { let x = "20"; let y = "5"; let result = x - y; console.log(result); } // Q5 Output: 15
// { let p = "abc"; let q = 1; let result = p - q; console.log(result); } // Q6 Output: NaN ("abc" is not a number)
// { let m = 10; let n = 0; let result = m / n; console.log(result); } // Q7 Output: Infinity
// { let val = 0 / 0; console.log(val); } // Q8 Output: NaN

// // ---------- 3. Multiplication * ----------
// console.log("--- A3 Multiplication ---");
// { // Q1: cost of notebooks
//   let notebookPrice = 45;
//   let notebookCount = 8;
//   console.log("Total cost: ₹" + notebookPrice * notebookCount); // 360
// }
// { // Q2: bottles in 6 hours
//   let bottlesPerHour = 120;
//   let hours = 6;
//   console.log("Bottles produced:", bottlesPerHour * hours); // 720
// }
// { // Q3: total plants
//   let rows = 7;
//   let plantsPerRow = 15;
//   console.log("Total plants:", rows * plantsPerRow); // 105
// }
// { let a = "5"; let b = 4; let result = a * b; console.log(result); } // Q4 Output: 20
// { let x = "10"; let y = "2"; let result = x * y; console.log(result); } // Q5 Output: 20
// { let p = "hello"; let q = 2; let result = p * q; console.log(result); } // Q6 Output: NaN
// { let m = 5; let n = "0"; let result = m * n; console.log(result); } // Q7 Output: 0
// { let val1 = 3; let val2 = "4"; let val3 = val1 * val2; console.log(val3); } // Q8 Output: 12

// // ---------- 4. Division / ----------
// console.log("--- A4 Division ---");
// { // Q1: pencils per student
//   let totalPencils = 144;
//   let students = 12;
//   console.log("Pencils per student:", totalPencils / students); // 12
// }
// { // Q2: average distance per hour
//   let distanceKm = 360;
//   let hours = 6;
//   console.log("Distance per hour (km):", distanceKm / hours); // 60
// }
// { // Q3: amount per department
//   let totalAmount = 72000;
//   let departments = 9;
//   console.log("Amount per department: ₹" + totalAmount / departments); // 8000
// }
// { let a = "20"; let b = 4; let result = a / b; console.log(result); } // Q4 Output: 5
// { let x = "100"; let y = "5"; let result = x / y; console.log(result); } // Q5 Output: 20
// { let p = 10; let q = 0; let result = p / q; console.log(result); } // Q6 Output: Infinity
// { let m = -10; let n = 0; let result = m / n; console.log(result); } // Q7 Output: -Infinity
// { let val = 0 / 0; console.log(val); } // Q8 Output: NaN

// // ---------- 5. Modulus % ----------
// console.log("--- A5 Modulus ---");
// { // Q1: students left over
//   let totalStudents = 53;
//   let groupSize = 5;
//   console.log("Students left over:", totalStudents % groupSize); // 3
// }
// { // Q2: candies left unpacked
//   let totalCandies = 128;
//   let candiesPerBox = 10;
//   console.log("Candies left unpacked:", totalCandies % candiesPerBox); // 8
// }
// { // Q3: even or odd (change givenNumber to test other numbers)
//   let givenNumber = 27;
//   let isEven = givenNumber % 2 === 0; // remainder 0 => even
//   console.log("Is " + givenNumber + " even?", isEven); // false (so it is odd)
// }
// { // Q4: toys left after packing
//   let totalToys = 237;
//   let toysPerBox = 6;
//   console.log("Toys left:", totalToys % toysPerBox); // 3
// }
// { // Q5: people left after full buses
//   let peopleWaiting = 185;
//   let busCapacity = 40;
//   console.log("People left:", peopleWaiting % busCapacity); // 25
// }
// { let a = 10; let b = 0; let result = a % b; console.log(result); } // Q6 Output: NaN
// { let x = 0; let y = 5; let result = x % y; console.log(result); } // Q7 Output: 0
// { let p = -10; let q = 3; let result = p % q; console.log(result); } // Q8 Output: -1 (sign follows the dividend)
// { let m = 10; let n = -3; let result = m % n; console.log(result); } // Q9 Output: 1
// { let val1 = -10; let val2 = -3; let val3 = val1 % val2; console.log(val3); } // Q10 Output: -1

// // ---------- 6. Exponentiation ** ----------
// console.log("--- A6 Exponentiation ---");
// { // Q1: cube volume
//   let side = 6;
//   console.log("Cube volume (cm³):", side ** 3); // 216
// }
// { // Q2: bacteria after 4 hours
//   let startBacteria = 1;
//   let hours = 4;
//   console.log("Bacteria after 4 hours:", startBacteria * 2 ** hours); // 16
// }
// { // Q3: cells in square arrangement
//   let cellsPerSide = 9;
//   console.log("Total cells:", cellsPerSide ** 2); // 81
// }
// { // Q4: 5 to the power 4
//   let base = 5;
//   let power = 4;
//   console.log("5^4 =", base ** power); // 625
// }
// { // Q5: total pixels
//   let pixels = 1024;
//   console.log("Total pixels:", pixels ** 2); // 1048576
// }
// { let side = -2; let area = side ** 2; console.log(area); } // Q6 Output: 4
// { let base = 2; let power = -1; let result = base ** power; console.log(result); } // Q7 Output: 0.5
// { let val = 2 ** -2; console.log(val); } // Q8 Output: 0.25
// { let x = 3; let y = 2; let z = x ** y; console.log(z); } // Q9 Output: 9
// { let a = 10; let b = 0; let result = a ** b; console.log(result); } // Q10 Output: 1 (anything ** 0 = 1)


// // =====================================================================
// // PART B: ASSIGNMENT OPERATORS
// // =====================================================================
// console.log("===== PART B: ASSIGNMENT =====");

// // ---------- 1. Simple Assignment = ----------
// console.log("--- B1 Simple Assignment ---");
// { let age = 18; console.log("Age:", age); }                    // Q1 (put your own age)
// { let penPrice = 15; console.log("Pen price: ₹" + penPrice); } // Q2
// { let daysInWeek = 7; console.log("Days in a week:", daysInWeek); } // Q3
// { let city = "Ahmedabad"; console.log("City:", city); }        // Q4 (put your own city)
// { let piValue = 3.14159; console.log("PI:", piValue); }        // Q5
// { let a, b, c; a = b = c = 10; console.log(a, b, c); }         // Q6 Output: 10 10 10
// { let x = 5; let y = x; x = 10; console.log(x, y); }           // Q7 Output: 10 5 (y keeps its own copy)
// { let p = 100; let q = p; let r = q; console.log(p, q, r); }   // Q8 Output: 100 100 100
// { let m = "Hello"; let n = m; m = "World"; console.log(m, n); } // Q9 Output: World Hello
// { let val1 = 25; let val2 = val1; let val3 = val2; console.log(val1, val2, val3); } // Q10 Output: 25 25 25

// // ---------- 2. Add and Assign += ----------
// console.log("--- B2 += ---");
// { let totalMarks = 200; totalMarks += 35; console.log("Total marks:", totalMarks); }       // Q1: 235
// { let balance = 5000; balance += 1200; console.log("Balance: ₹" + balance); }              // Q2: 6200
// { let batteryPercent = 45; batteryPercent += 30; console.log("Battery:", batteryPercent + "%"); } // Q3: 75%
// { let score = 1250; score += 375; console.log("Score:", score); }                          // Q4: 1625
// { let totalBooks = 840; totalBooks += 160; console.log("Total books:", totalBooks); }      // Q5: 1000
// { let a = "10"; a += 5; console.log(a); }            // Q6 Output: 105 (string)
// { let x = 5; x += "3"; console.log(x); }             // Q7 Output: 53 (string)
// { let p = 0; p += false; console.log(p); }           // Q8 Output: 0
// { let m = 10; m += true; console.log(m); }           // Q9 Output: 11 (true becomes 1)
// { let val = "Hello"; val += "World"; console.log(val); } // Q10 Output: HelloWorld

// // ---------- 3. Subtract and Assign -= ----------
// console.log("--- B3 -= ---");
// { let waterLitres = 1000; waterLitres -= 375; console.log("Water left (L):", waterLitres); } // Q1: 625
// { let money = 500; money -= 180; console.log("Money left: ₹" + money); }                    // Q2: 320
// { let batteryPercent = 90; batteryPercent -= 45; console.log("Battery:", batteryPercent + "%"); } // Q3: 45%
// { let boxes = 2400; boxes -= 950; console.log("Boxes left:", boxes); }                      // Q4: 1450
// { let score = 2000; score -= 625; console.log("Score:", score); }                           // Q5: 1375
// { let a = "20"; a -= 5; console.log(a); }            // Q6 Output: 15
// { let x = "100"; x -= "50"; console.log(x); }        // Q7 Output: 50
// { let p = 10; p -= "abc"; console.log(p); }          // Q8 Output: NaN
// { let m = 5; m -= true; console.log(m); }            // Q9 Output: 4
// { let val = 20; val -= false; console.log(val); }    // Q10 Output: 20

// // ---------- 4. Multiply and Assign *= ----------
// console.log("--- B4 *= ---");
// { let population = 5000; population *= 3; console.log("Population:", population); }   // Q1: 15000
// { let dailyProduction = 120; dailyProduction *= 4; console.log("Daily production:", dailyProduction); } // Q2: 480
// { let savings = 2000; savings *= 2; console.log("Savings: ₹" + savings); }            // Q3: 4000
// { let plants = 50; plants *= 5; console.log("Plants:", plants); }                     // Q4: 250
// { let gameScore = 150; gameScore *= 3; console.log("Game score:", gameScore); }       // Q5: 450
// { let a = "10"; a *= 2; console.log(a); }            // Q6 Output: 20
// { let x = "5"; x *= "4"; console.log(x); }           // Q7 Output: 20
// { let p = "hello"; p *= 2; console.log(p); }         // Q8 Output: NaN
// { let m = 5; m *= "0"; console.log(m); }             // Q9 Output: 0
// { let val = 3; val *= "4"; console.log(val); }       // Q10 Output: 12

// // ---------- 5. Divide and Assign /= ----------
// console.log("--- B5 /= ---");
// { let clothLength = 1200; clothLength /= 4; console.log("One part (m):", clothLength); }   // Q1: 300
// { let budget = 80000; budget /= 8; console.log("Budget per project: ₹" + budget); }        // Q2: 10000
// { let sugarGrams = 960; sugarGrams /= 6; console.log("Sugar per packet (g):", sugarGrams); } // Q3: 160
// { let distanceKm = 450; distanceKm /= 5; console.log("Distance per trip (km):", distanceKm); } // Q4: 90
// { let totalMarks = 2500; totalMarks /= 10; console.log("Marks per student:", totalMarks); } // Q5: 250
// { let a = "100"; a /= 5; console.log(a); }           // Q6 Output: 20
// { let x = "200"; x /= "4"; console.log(x); }         // Q7 Output: 50
// { let p = 10; p /= 0; console.log(p); }              // Q8 Output: Infinity
// { let m = -10; m /= 0; console.log(m); }             // Q9 Output: -Infinity
// { let val = 0; val /= 0; console.log(val); }         // Q10 Output: NaN

// // ---------- 6. Modulus and Assign %= ----------
// console.log("--- B6 %= ---");
// { let candies = 137; candies %= 10; console.log("Candies left:", candies); }   // Q1: 7
// { let students = 250; students %= 7; console.log("Students left:", students); } // Q2: 5
// { let days = 1000; days %= 7; console.log("Days left after full weeks:", days); } // Q3: 6
// { let chairs = 89; chairs %= 5; console.log("Chairs left:", chairs); }         // Q4: 4
// { let months = 365; months %= 12; console.log("Months left after full years:", months); } // Q5: 5
// { let a = 10; a %= 0; console.log(a); }              // Q6 Output: NaN
// { let x = 0; x %= 5; console.log(x); }               // Q7 Output: 0
// { let p = -10; p %= 3; console.log(p); }             // Q8 Output: -1
// { let m = 10; m %= -3; console.log(m); }             // Q9 Output: 1
// { let val = -10; val %= -3; console.log(val); }      // Q10 Output: -1

// // ---------- 7. Exponentiation and Assign **= ----------
// console.log("--- B7 **= ---");
// { let gardenSide = 10; gardenSide **= 2; console.log("Garden area (m²):", gardenSide); } // Q1: 100
// { let boxEdge = 4; boxEdge **= 3; console.log("Box volume (cm³):", boxEdge); }           // Q2: 64
// { let sizeFactor = 3; sizeFactor **= 2; console.log("Area growth factor:", sizeFactor); } // Q3: 9
// { let side = -2; side **= 2; console.log(side); }    // Q4 Output: 4
// { let base = 2; base **= -1; console.log(base); }    // Q5 Output: 0.5
// { let val = 2; val **= -2; console.log(val); }       // Q6 Output: 0.25
// { let x = 3; x **= 0; console.log(x); }              // Q7 Output: 1
// { let a = 10; a **= 1; console.log(a); }             // Q8 Output: 10


// // =====================================================================
// // PART C: COMPARISON & RELATIONAL OPERATORS
// // =====================================================================
// console.log("===== PART C: COMPARISON =====");

// // ---------- 1. Loose Equality == ----------
// console.log("--- C1 == ---");
// { let storedPassword = 1234; let enteredPassword = "1234"; console.log(storedPassword == enteredPassword); } // Q1: true (type ignored)
// { let userAnswer = 0; let defaultAnswer = false; console.log(userAnswer == defaultAnswer); }  // Q2: true
// { let userInput = ""; let submittedFlag = false; console.log(userInput == submittedFlag); }   // Q3: true
// { let backendValue = null; let frontendValue = undefined; console.log(backendValue == frontendValue); } // Q4: true
// { let scoreDeviceOne = 500; let scoreDeviceTwo = "500"; console.log(scoreDeviceOne == scoreDeviceTwo); } // Q5: true
// { let a = 0; let b = false; console.log(a == b); }       // Q6 Output: true
// { let x = ""; let y = false; console.log(x == y); }      // Q7 Output: true
// { let p = "0"; let q = 0; console.log(p == q); }         // Q8 Output: true
// { let m = []; let n = 0; console.log(m == n); }          // Q9 Output: true ([] -> "" -> 0)
// { let val1 = []; let val2 = false; console.log(val1 == val2); } // Q10 Output: true

// // ---------- 2. Loose Inequality != ----------
// console.log("--- C2 != ---");
// { let codeOne = "SAVE10"; let codeTwo = "SAVE20"; console.log(codeOne != codeTwo); }   // Q1: true
// { let userRole = "admin"; let defaultRole = "guest"; console.log(userRole != defaultRole); } // Q2: true
// { let correctAnswer = 42; let userAnswer = "40"; console.log(correctAnswer != userAnswer); } // Q3: true
// { let emailInput = ""; let emptyFlag = false; console.log(emailInput != emptyFlag); }  // Q4: false ("" == false)
// { let userId = null; let validId = 101; console.log(userId != validId); }              // Q5: true
// { let a = 0; let b = false; console.log(a != b); }       // Q6 Output: false
// { let x = ""; let y = false; console.log(x != y); }      // Q7 Output: false
// { let p = "0"; let q = 0; console.log(p != q); }         // Q8 Output: false
// { let m = null; let n = undefined; console.log(m != n); } // Q9 Output: false
// { let val1 = []; let val2 = 0; console.log(val1 != val2); } // Q10 Output: false

// // ---------- 3. Strict Equality === ----------
// console.log("--- C3 === ---");
// { let storedPassword = 1234; let enteredPassword = "1234"; console.log(storedPassword === enteredPassword); } // Q1: false (number vs string)
// { let accountOne = 1234567890; let accountTwo = 1234567890; console.log(accountOne === accountTwo); }         // Q2: true
// { let featureFlag = true; let requiredState = 1; console.log(featureFlag === requiredState); }               // Q3: false
// { let databaseValue = null; let cacheValue = undefined; console.log(databaseValue === cacheValue); }         // Q4: false
// { let scoreOne = 85; let scoreTwo = 85; console.log(scoreOne === scoreTwo); }                                // Q5: true
// { let a = 0; let b = false; console.log(a === b); }      // Q6 Output: false
// { let x = ""; let y = false; console.log(x === y); }     // Q7 Output: false
// { let p = "0"; let q = 0; console.log(p === q); }        // Q8 Output: false
// { let m = null; let n = undefined; console.log(m === n); } // Q9 Output: false
// { let val = NaN; console.log(val === val); }             // Q10 Output: false (NaN is never equal to anything)

// // ---------- 4. Strict Inequality !== ----------
// console.log("--- C4 !== ---");
// { let stringId = "101"; let numberId = 101; console.log(stringId !== numberId); }     // Q1: true
// { let booleanStatus = true; let numericStatus = 1; console.log(booleanStatus !== numericStatus); } // Q2: true
// { let password = "abc123"; let confirmPassword = "abc124"; console.log(password !== confirmPassword); } // Q3: true
// { let serverData = null; let localData = undefined; console.log(serverData !== localData); } // Q4: true
// { let playerOne = 10; let playerTwo = 20; console.log(playerOne !== playerTwo); }     // Q5: true
// { let a = 0; let b = false; console.log(a !== b); }      // Q6 Output: true
// { let x = ""; let y = false; console.log(x !== y); }     // Q7 Output: true
// { let p = "0"; let q = 0; console.log(p !== q); }        // Q8 Output: true
// { let m = null; let n = undefined; console.log(m !== n); } // Q9 Output: true
// { let val = NaN; console.log(val !== val); }             // Q10 Output: true

// // ---------- 5. Greater Than > ----------
// console.log("--- C5 > ---");
// { let age = 20; let votingAge = 18; console.log("Can vote:", age > votingAge); }              // Q1: true
// { let cartTotal = 650; let freeShippingLimit = 500; console.log("Free shipping:", cartTotal > freeShippingLimit); } // Q2: true
// { let playerScore = 1200; let requiredScore = 1000; console.log("Level unlocked:", playerScore > requiredScore); } // Q3: true
// { let monthlyIncome = 40000; let minimumRequired = 30000; console.log("Loan approved:", monthlyIncome > minimumRequired); } // Q4: true
// { let stepsToday = 11000; let stepTarget = 10000; console.log("Target exceeded:", stepsToday > stepTarget); } // Q5: true
// { let a = 5; let b = 5; console.log(a > b); }            // Q6 Output: false
// { let x = "10"; let y = "2"; console.log(x > y); }       // Q7 Output: false (two strings => compared alphabetically, "1" < "2")
// { let p = "5"; let q = 10; console.log(p > q); }         // Q8 Output: false (string becomes number: 5 > 10)
// { let m = null; let n = 0; console.log(m > n); }         // Q9 Output: false (null becomes 0)
// { let val = undefined; console.log(val > 0); }           // Q10 Output: false (undefined becomes NaN)

// // ---------- 6. Less Than < ----------
// console.log("--- C6 < ---");
// { let marks = 30; let failThreshold = 35; console.log("Failed:", marks < failThreshold); }    // Q1: true
// { let expenses = 8000; let budget = 10000; console.log("Under budget:", expenses < budget); } // Q2: true
// { let itemsLeft = 7; let lowStockLimit = 10; console.log("Low stock:", itemsLeft < lowStockLimit); } // Q3: true
// { let vehicleSpeed = 40; let minimumSpeed = 50; console.log("Too slow:", vehicleSpeed < minimumSpeed); } // Q4: true
// { let remainingMinutes = 4; let warningLimit = 5; console.log("Warning needed:", remainingMinutes < warningLimit); } // Q5: true
// { let a = 5; let b = 5; console.log(a < b); }            // Q6 Output: false
// { let x = "10"; let y = "2"; console.log(x < y); }       // Q7 Output: true (string comparison)
// { let p = null; let q = 1; console.log(p < q); }         // Q8 Output: true (0 < 1)
// { let m = null; let n = 0; console.log(m < n); }         // Q9 Output: false
// { let val = undefined; console.log(val < 0); }           // Q10 Output: false (NaN < 0)

// // ---------- 7. Greater Than or Equal >= ----------
// console.log("--- C7 >= ---");
// { let age = 18; let votingAge = 18; console.log("Eligible to vote:", age >= votingAge); }     // Q1: true
// { let percentage = 75; let minimumPercentage = 75; console.log("Scholarship granted:", percentage >= minimumPercentage); } // Q2: true
// { let userAge = 14; let minimumAge = 13; console.log("Subscription allowed:", userAge >= minimumAge); } // Q3: true
// { let currentScore = 500; let minimumScore = 500; console.log("Can proceed:", currentScore >= minimumScore); } // Q4: true
// { let experienceYears = 3; let requiredYears = 2; console.log("Eligible:", experienceYears >= requiredYears); } // Q5: true
// { let a = 5; let b = 5; console.log(a >= b); }           // Q6 Output: true
// { let x = null; let y = 0; console.log(x >= y); }        // Q7 Output: true (null -> 0)
// { let p = undefined; let q = 0; console.log(p >= q); }   // Q8 Output: false
// { let m = "5"; let n = 5; console.log(m >= n); }         // Q9 Output: true
// { let val = "10"; let limit = 5; console.log(val >= limit); } // Q10 Output: true

// // ---------- 8. Less Than or Equal <= ----------
// console.log("--- C8 <= ---");
// { let peopleInLift = 7; let maxCapacity = 8; console.log("Safe to add one more:", peopleInLift <= maxCapacity); } // Q1: true
// { let fileSizeMB = 5; let maxAllowedMB = 5; console.log("Upload allowed:", fileSizeMB <= maxAllowedMB); }   // Q2: true
// { let participantAge = 12; let maxJuniorAge = 12; console.log("Junior:", participantAge <= maxJuniorAge); }   // Q3: true
// { let dataUsedGB = 9.5; let dataLimitGB = 10; console.log("Within limit:", dataUsedGB <= dataLimitGB); }    // Q4: true
// { let classStrength = 40; let maxAllowed = 40; console.log("Valid capacity:", classStrength <= maxAllowed); } // Q5: true
// { let a = 5; let b = 5; console.log(a <= b); }           // Q6 Output: true
// { let x = null; let y = 0; console.log(x <= y); }        // Q7 Output: true
// { let p = undefined; let q = 0; console.log(p <= q); }   // Q8 Output: false
// { let m = "5"; let n = 5; console.log(m <= n); }         // Q9 Output: true
// { let val = "3"; let limit = 5; console.log(val <= limit); } // Q10 Output: true


// // =====================================================================
// // PART D: LOGICAL OPERATORS
// // =====================================================================
// console.log("===== PART D: LOGICAL =====");

// // ---------- 1. Logical AND && ----------
// console.log("--- D1 && ---");
// { let username = "admin"; let password = 1234; console.log("Valid login:", username === "admin" && password === 1234); } // Q1: true
// { let isLoggedIn = true; let hasPermission = true; console.log("Can access page:", isLoggedIn && hasPermission); }        // Q2: true
// { let inStock = true; let price = 800; console.log("Can be bought:", inStock && price < 1000); }                          // Q3: true
// { let marks = 75; let attendance = 80; console.log("Passed:", marks > 65 && attendance > 70); }                           // Q4: true
// { let isWeekend = true; let isHoliday = false; console.log("Party happens:", isWeekend && isHoliday); }                   // Q5: false
// { let a = 0; let b = 10; let result = a && b; console.log(result); }   // Q6 Output: 0 (&& returns the first falsy value)
// { let x = 5; let y = 10; let result = (x > 3 && y) || 0; console.log(result); } // Q7 Output: 10
// { let p = "Hello"; let q = ""; let r = "World"; let result = p && q && r; console.log(result); } // Q8 Output: (empty line) because q = "" is falsy
// { let val = 5; let condition = val && (val = 0); console.log(condition); console.log(val); }    // Q9 Output: 0 then 0
// { let x = 10; let y = 20; let result = (x && y) && (x > y); console.log(result); }              // Q10 Output: false

// // ---------- 2. Logical OR || ----------
// console.log("--- D2 || ---");
// { let passwordCorrect = true; let otpValid = false; console.log("Login allowed:", passwordCorrect || otpValid); } // Q1: true
// { let isMember = false; let hasCoupon = true; console.log("Discount applies:", isMember || hasCoupon); }           // Q2: true
// { let age = 16; let height = 155; console.log("Entry allowed:", age > 18 || height > 150); }                       // Q3: true
// { let emailGiven = true; let phoneGiven = false; console.log("Form valid:", emailGiven || phoneGiven); }            // Q4: true
// { let score = 900; let timeBonus = true; console.log("Level opens:", score > 1000 || timeBonus); }                  // Q5: true
// { let a = 0; let b = false; let c = ""; let d = null; let e = 42; let result = a || b || c || d || e; console.log(result); } // Q6 Output: 42
// { let x = "Hello" || 0; let y = 0 || "Hi"; console.log(x, y); }  // Q7 Output: Hello Hi
// { let a = 10; let b = 20; let result = (a < 5) || (b > 15); console.log(result); } // Q8 Output: true
// { let val = 5; let condition = val || (val = 0); console.log(condition); console.log(val); } // Q9 Output: 5 then 5 (|| stops at first truthy)
// { let x = "" || 0 || false || null || undefined || "OK"; console.log(x); }       // Q10 Output: OK

// // ---------- 3. Logical NOT ! ----------
// console.log("--- D3 ! ---");
// { let isBanned = false; console.log("Can login:", !isBanned); }                 // Q1: true
// { let isCompleted = false; console.log("Task pending:", !isCompleted); }        // Q2: true
// { let isOn = true; console.log("Light is off:", !isOn); }                       // Q3: false
// { let isActive = false; console.log("Cannot access premium:", !isActive); }     // Q4: true
// { let isReadOnly = false; console.log("Can edit:", !isReadOnly); }              // Q5: true
// { let a = 0; let b = 1; console.log(!a, !b); }                // Q6 Output: true false
// { let x = "Hello"; let y = ""; console.log(!x, !y); }         // Q7 Output: false true
// { let val = 5; let result = !val; console.log(result); }      // Q8 Output: false
// { let a = 10; let b = 20; let result = !(a && b); console.log(result); } // Q9 Output: false
// { let x = 0; let y = 1; let result = !(x || y); console.log(result); }   // Q10 Output: false

// // ---------- 4. Mixed Logical Operators ----------
// console.log("--- D4 Mixed ---");
// { let isMember = true; let isBanned = false; console.log("Can enter:", isMember && !isBanned); } // Q1: true
// { let isStudent = true; let isSenior = false; let isBanned = true; console.log("Discount:", (isStudent || isSenior) && !isBanned); } // Q2: false
// { let nameGiven = true; let emailGiven = false; let phoneGiven = true; console.log("Form valid:", nameGiven && (emailGiven || phoneGiven)); } // Q3: true
// { let isAdmin = true; let hasToken = false; let isSuspended = false; console.log("Access allowed:", (isAdmin || hasToken) && !isSuspended); } // Q4: true
// { let score = 1200; let timeBonus = false; let extraLife = true; console.log("Level opens:", score > 1000 && (timeBonus || extraLife)); } // Q5: true
// { let a = 0; let b = 10; let c = 20; let result = a || b && c; console.log(result); } // Q6 Output: 20 (&& runs before ||)
// { let p = true; let q = false; let r = true; let result = p && q || r; console.log(result); } // Q7 Output: true
// { let x = 10; let y = 20; let result = !(x && y) || (x > 5 && y < 30) && true; console.log(result); } // Q8 Output: true
// { let a = 5; let b = 0; let c = 10; let result = a && b || c; console.log(result); } // Q9 Output: 10
// { let val1 = false; let val2 = true; let val3 = false; let result = !(val1 || val2) && val3 || true; console.log(result); } // Q10 Output: true


// // =====================================================================
// // PART E: INCREMENT / DECREMENT
// // =====================================================================
// console.log("===== PART E: ++ / -- =====");

// // ---------- Part a ----------
// { let counter = 5; counter++; console.log("Counter:", counter); }          // Q1: 6
// { let lives = 3; lives--; console.log("Lives left:", lives); }             // Q2: 2
// { let score = 10; score++; console.log("Score:", score); }                 // Q3: 11
// { let items = 8; items--; console.log("Items:", items); }                  // Q4: 7
// { let count = 0; count++; count++; console.log("Count:", count); }         // Q5: 2

// // ---------- Part b ----------
// { // Q6: post-increment
//   let x = 5;
//   let y = x++; // y gets the OLD value (5), THEN x becomes 6
//   console.log("x:", x, "y:", y); // x: 6 y: 5
//   // Why different: x++ returns the current value first and increases x afterwards.
// }
// { // Q7: pre-increment
//   let a = 5;
//   let b = ++a; // a becomes 6 FIRST, then b gets the NEW value (6)
//   console.log("a:", a, "b:", b); // a: 6 b: 6
//   // Difference from Q6: ++a increases first and returns the new value, so both are equal.
// }
// { // Q8: post-decrement
//   let lives = 3;
//   let previousLives = lives--;
//   console.log("lives:", lives, "previousLives:", previousLives); // lives: 2 previousLives: 3
// }
// { // Q9: pre-increment
//   let attempts = 0;
//   let currentAttempts = ++attempts;
//   console.log("attempts:", attempts, "currentAttempts:", currentAttempts); // attempts: 1 currentAttempts: 1
// }
// { // Q10: ++ then --
//   let points = 100;
//   points++;
//   points--;
//   console.log("Points:", points); // 100
// }

// // ---------- Part c ----------
// { let x = 10; let y = x++; let z = ++x; console.log(x, y, z); } // Q11 Output: 12 10 12
// { let a = 5; let b = a-- + ++a; console.log(a, b); }           // Q12 Output: 5 10   (5 + 5; a: 5 -> 4 -> 5)
// { let m = 7; let n = --m + m++; console.log(m, n); }           // Q13 Output: 7 12   (6 + 6; m: 7 -> 6 -> 7)
// { let p = 3; let q = p++ + ++p + p; console.log(p, q); }       // Q14 Output: 5 13   (3 + 5 + 5)
// { let val = 0; val = val++ + ++val; console.log(val); }        // Q15 Output: 2      (0 + 2)


// // =====================================================================
// // PART F: typeof OPERATOR
// // =====================================================================
// console.log("===== PART F: typeof =====");

// // ---------- Part a ----------
// { let name = "Rahul"; console.log(typeof name); }       // Q1: string
// { let age = 25; console.log(typeof age); }              // Q2: number
// { let isStudent = true; console.log(typeof isStudent); } // Q3: boolean
// { let city; console.log(typeof city); }                 // Q4: undefined
// console.log(typeof null);                               // Q5: object (famous JS quirk)

// // ---------- Part b ----------
// console.log(typeof 42);        // Q6: number
// console.log(typeof "Hello");   // string
// console.log(typeof true);      // boolean
// console.log(typeof undefined); // undefined

// console.log(typeof null);      // Q7: object
// console.log(typeof {});        // object
// console.log(typeof []);        // object (arrays are objects)

// console.log(typeof NaN);       // Q8: number
// console.log(typeof Infinity);  // number
// console.log(typeof function(){}); // function

// { // Q9
//   let price = 99.99;
//   let message = "Welcome";
//   let isActive = false;
//   console.log("Type of price is:", typeof price);       // number
//   console.log("Type of message is:", typeof message);   // string
//   console.log("Type of isActive is:", typeof isActive); // boolean
// }
// { let value = null; console.log(typeof value); console.log(typeof value === "object"); } // Q10 Output: object, true

// // ---------- Part c ----------
// console.log(typeof typeof 100);   // Q11: string
// console.log(typeof typeof "Hi");  // string
// console.log(typeof typeof true);  // string (typeof always returns a string)

// { let a = 10; let b = "10"; console.log(typeof a === typeof b); console.log(typeof a == typeof b); } // Q12 Output: false, false

// console.log(typeof null === "object"); // Q13: true
// console.log(typeof [] === "object");   // true
// console.log(typeof {} === "object");   // true

// { let x; console.log(typeof x); x = null; console.log(typeof x); x = 0; console.log(typeof x); } // Q14 Output: undefined, object, number

// console.log(typeof NaN === "number");      // Q15: true
// console.log(typeof Infinity === "number"); // true
// console.log(typeof (1 / 0));               // number


// // =====================================================================
// // PART G: TYPE COERCION
// // =====================================================================
// console.log("===== PART G: TYPE COERCION =====");

// // ---------- Part a ----------
// console.log(Number("25") + 10);        // Q1: 35
// console.log(String(100) + " rupees");  // Q2: 100 rupees
// console.log(Boolean(0));               // Q3: false
// console.log(Boolean("Hello"));         // Q4: true
// console.log(+"50" * 2);                // Q5: 100

// // ---------- Part b ----------
// console.log("10" - 5);   // Q6: 5
// console.log("10" + 5);   // 105
// console.log("10" * 2);   // 20
// console.log("10" / 2);   // 5

// console.log("5" - "2");  // Q7: 3
// console.log("5" + "2");  // 52
// console.log("5" * "2");  // 10
// console.log("5" / "2");  // 2.5

// console.log(Number("123"));     // Q8: 123
// console.log(Number("123abc"));  // NaN
// console.log(Number(true));      // 1
// console.log(Number(false));     // 0
// console.log(Number(null));      // 0
// console.log(Number(undefined)); // NaN

// console.log(Boolean(0));     // Q9: false
// console.log(Boolean(""));    // false
// console.log(Boolean("0"));   // true (non-empty string)
// console.log(Boolean([]));    // true
// console.log(Boolean({}));    // true
// console.log(Boolean(null));  // false

// console.log(String(100));       // Q10: 100
// console.log(String(true));      // true
// console.log(String(null));      // null
// console.log(String(undefined)); // undefined
// console.log(100 + "");          // 100

// // ---------- Part c ----------
// console.log("5" + 3 + 2);   // Q11: 532   (left to right: "53" then "532")
// console.log(5 + 3 + "2");   // 82         (8 then "82")
// console.log("5" - 3 + 2);   // 4          (2 + 2)
// console.log(5 - "3" + "2"); // 22         (2 then "22")

// console.log(true + true);      // Q12: 2
// console.log(true + false);     // 1
// console.log(true + "false");   // truefalse
// console.log(false + "true");   // falsetrue

// console.log(null + 5);         // Q13: 5
// console.log(undefined + 5);    // NaN
// console.log(null + "5");       // null5
// console.log(undefined + "5");  // undefined5

// console.log([] + []);   // Q14: (empty string)
// console.log([] + {});   // [object Object]
// console.log({} + []);   // [object Object]
// console.log({} + {});   // [object Object][object Object]

// { // Q15
//   let a = "10"; let b = 5;
//   let c = a + b; let d = a - b; let e = +a + b;
//   console.log(c, typeof c); // 105 string
//   console.log(d, typeof d); // 5 number
//   console.log(e, typeof e); // 15 number
// }

// console.log(!!"Hello");    // Q16: true
// console.log(!!"");         // false
// console.log(!!0);          // false
// console.log(!!1);          // true
// console.log(!!null);       // false
// console.log(!!undefined);  // false

// console.log(Number(""));        // Q17: 0
// console.log(Number(" "));       // 0
// console.log(Number("0"));       // 0
// console.log(Number("  25  ")); // 25
// console.log(Number("25px"));    // NaN

// { // Q18
//   let val1 = "5"; let val2 = 2;
//   console.log(val1 + val2);   // 52
//   console.log(+val1 + val2);  // 7
//   console.log(val1 - val2);   // 3
//   console.log(val1 * val2);   // 10
//   console.log(val1 / val2);   // 2.5
// }


// // =====================================================================
// // BONUS MIXED PRACTICE
// // =====================================================================
// console.log("===== BONUS =====");

// { // Q19
//   let count = 5;
//   console.log(typeof count++); // number
//   console.log(count);          // 6
//   console.log(typeof ++count); // number
//   console.log(count);          // 7
// }
// { let x = "10"; let y = ++x; console.log(x, y, typeof x, typeof y); } // Q20 Output: 11 11 number number
// { let a = "5"; let b = a++; console.log(a, b, typeof a, typeof b); } // Q21 Output: 6 5 number number (a++ converts to number first)

// console.log(typeof (1 + "2")); // Q22: string
// console.log(typeof (1 - "2")); // number
// console.log(typeof (1 * "2")); // number
// console.log(typeof (1 / "2")); // number

// { // Q23
//   let val = null;
//   console.log(typeof val);  // object
//   console.log(val + 1);     // 1
//   console.log(val - 1);     // -1
//   console.log(val * 1);     // 0
//   console.log(Boolean(val)); // false
// }