
// Declaration and Iteration
let fruits = ["Apple", "Banana", "Cherry"];
 fruits.forEach(fruit => console.log(fruit));
 console.log("displayed the string fruits")

// Array Methods
fruits.push("Mango"); 
 fruits.forEach(fruit => console.log(fruit));  
console.log("push completed")

fruits.pop(); 
 fruits.forEach(fruit => console.log(fruit));
console.log("pop completed");

fruits.shift(); 
 fruits.forEach(fruit => console.log(fruit));
console.log("shift completed");


fruits.unshift("Grapes");  
 fruits.forEach(fruit => console.log(fruit));
console.log("Unshift completed");

 
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num); 
squared.forEach(sno => console.log(sno));
