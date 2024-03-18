console.log("JavaScript is running...");

// ------------ Arrays ------------

// let mixArray = [10, "A string", [2, 3, 4], { myKey: "myValue" }, true];

// console.log(mixArray);

// console.log(mixArray[0]); // Returns the element at index 0 from the array
// mixArray.push("Dinosaur"); // the Array.push() method will append a new element to the array

// console.log(mixArray);

// // console.log(mixArray.slice(0, 3)); // Slice will return a section of the array from the startIndex to the endIndex ex. index 0 to 3

// mixArray.pop(); // Array.pop() will remove the last element in the array

// console.log(mixArray);

// mixArray.shift();

// console.log(mixArray); // Array.shift() will remove the first element in the array

// mixArray.unshift(200); // Array.unshift(arg) will add a new element at the beginning of the Array (index 0)

// console.log(mixArray);

// console.log(mixArray.length); // Array.length will return the length of the array.

// console.log(mixArray[mixArray.length - 1]); // Will return the last element in the array

// console.log(mixArray.reverse()); // Array.reverse() will reverse the order of the elements in the array

// console.log(mixArray);

// let copyOfMixArray = [...mixArray]; // the spread (...) operator will copy with contents of an iterable object (ex. arrays, objects, strings)

// console.log(mixArray.includes(10)); // will return TRUE

// ------------ Objects ------------

// let car = {
//   type: "Supercar", // type => KEY, Supercar -> Value
//   brand: "Bugatti", // These are Key-Value pairs
//   year: 2016,
//   color: "White",
//   subCar: { color: "red" }, // Object Nesting
//   numsArray: [1, 2, 3],
//   // A function can be included as a property in an object, and it is formally referred to as a method
//   greeting: () => console.log("Hello world!"),
//   updateColor: (colorArg) => (car.color = colorArg),
// };

// let key = "type";
// console.log(car["type"]); // Returns value of the "Type" key inside the car object
// console.log(car[key]); // Returns value of the "Type" key inside the car object
// console.log(car.type); // Returns value of the "Type" key inside the car object
// console.log(car.subCar.color); // Returns value of the "subCar" key inside the car object, and then the value of the "color"  key inside that one
// console.log(car["subCar"]["color"]); // Returns value of the "subCar" key inside the car object, and then the value of the "color"  key inside that one
// console.log(Object.keys(car)); // Returns an array of all the keys in the object car
// console.log(Object.values(car)); // Returns an array of all the values in the object car
// console.log(Object.entries(car)); // Returns an array of arrays that include both the key and the value for each entry
// car.greeting(); // This will invoke the greeting method from the car object

// console.log(car.color);
// car.updateColor("blue");
// console.log(car.color);

// ------------ Functions ------------

// Function Intro
// We want to create a function that will take 2 numbers as inputs, and return the sum of those numbers
// function sum(a, b) {
//   // a and b are our inputs
//   //   debugger;
//   console.log(a + b);
//   let sum = a + b;
//   return sum; // returns the value of the sum variable to the caller (invoker)
// }

// let sumOfFourAndTwo = sum(4, 2);
// sum(8, 10);
// sum(4, 12);

// console.log(sumOfFourAndTwo + 10);

// console.log(sumDec(3, 4));
// console.log(sumEx(6, 4));
// console.log(sumArr(10, 4));

// Function Declaration -> Hoisted
function sumDec(a, b) {
  return a + b;
}
// Function Expression
const sumEx = function (a, b) {
  return a + b;
};
// Arrow Function
const sumArr = (a, b) => a + b; // Implicit Returns

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumbers = nums.filter((num) => num % 2 == 0);
// console.log(evenNumbers);

// Scope refers to the visibility of variables in different components of your code.

// function newScope() {
//   // Creating a new blocked scope
//   let num = 10;
// }
// if (true) {
//   let num2 = 5;
// }
// console.log(num);
// console.log(num2);

// Closures
// function func1(a, b) {
//   function func2(c) {
//     console.log(a, b, c); // Inner function can see and modify outer function's variables
//     return c;
//   }
//   func2(10);
//   console.log(c); // Outer function cannot see the inner functions' variables
// }

// func1(2, 4);

// let globalVar = "Hello Worlds!"; // Global Scope when there are no curly braces

// function vendingMachine() {
//   // Inventory of snacks and drinks
//   let inventory = {
//     S1: { item: "Coca-Cola", count: 2 },
//     C1: { item: "Ruffles", count: 2 },
//     S2: { item: "Pepsi", count: 2 },
//     C2: { item: "Doritos", count: 2 },
//   };

//   // Function to check and dispense item from machine
//   function dispenseItem(code, callbackFn) {
//     // 'S1', handleResponse
//     // Check if inventory includes requested item
//     if (inventory[code] && inventory[code].count > 0) {
//       inventory[code].count--; // Decrement the count
//       // 'Dispense' Item
//       callbackFn(null, `Dispensing ${inventory[code].item}...Enjoy!`); // handleResponse()
//     } else {
//       callbackFn("Item not available", null); // handleResponse()
//     }
//   }
//   return {
//     selectItem: function (code, callback) {
//       // code = 'S1', callback = handleResponse
//       dispenseItem(code, callback); // code = 'S1', callback = handleResponse
//     },
//     inventoryStatus: function () {
//       return inventory;
//     },
//   };
// }

// function handleResponse(err, result) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// }

// const machine = vendingMachine();
// machine = {
//     selectItem: fn(),
//     inventoryStatus: fn(),
// }

// machine.selectItem("S1", handleResponse);
// machine.selectItem("S1", handleResponse);
// machine.selectItem("S1", handleResponse);
// machine.selectItem("S1", handleResponse);
// machine.selectItem("S2", handleResponse);
// machine.selectItem("S2", handleResponse);
// machine.selectItem("S2", handleResponse);
// machine.selectItem("S2", handleResponse);
// machine.selectItem("C1", handleResponse);
// machine.selectItem("C1", handleResponse);
// machine.selectItem("C1", handleResponse);
// machine.selectItem("C1", handleResponse);
// machine.selectItem("C1", handleResponse);
// machine.selectItem("C1", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// machine.selectItem("C2", handleResponse);
// console.log(machine.inventoryStatus());

// function sumToTen(a, sum) {
//   if (sum >= 10) return sum;
//   sum += a;
//   return sumToTen(a + 1, sum);
// }

// console.log(sumToTen(1, 0));
