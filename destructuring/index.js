// Destructuring
// Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a single, clean line of code. there are array and objects destructuring.




// Array Destructuring
const values = [23,4,22,56,78];
const [a, b, c] = values;

console.log("Value of a is:" ,a );      // 23
console.log("Value of b is:" ,b );      // 4
console.log("Value of c is:" ,c );      // 22


// you can skip value too..
const [, , , d] = values;
console.log("Value of d id:", d)     //56




// Object Destructuring
const user = { name: "Ali", age: 25, address: "Model Town Lahore" };
const { name, address } = user;
console.log("Name is:", name);          // Ali
console.log("Address is:", address);    //Model Town Lahore

//you can also rename variables
const { name: userName } = user;
console.log("username is ", userName); 




//Destructuring helps unpack values from arrays/objects quickly.
//It improves code readability and structure.
//it Can be used in function parameters too.

function testing({ fullName, age }) {
  console.log(`Hello ${fullName}, age ${age}`);
}
testing({ fullName: "Jecklin", age: 30 });




//Destructuring in Loops (Array of Objects)
const users = [
  { name: "Peter", age: 22 },
  { name: "Umer", age: 25 }
];

users.forEach(({ name, age }) => {
  console.log(`${name} is ${age} years old.`);
});





//Destructuring in Function Parameters
function displayUser({ name, age, city }) {
  console.log(`${name}, ${age} years old from ${city}`);
}

const funUser = { name: "Ahmed", age: 30, city: "Lahore" };

displayUser(funUser);          





//Swapping Variables Using Array Destructuring
let x = 1, y = 2;

[x, y] = [y, x];

console.log("X swap value", x); // 2
console.log("Y swap value", y); // 1









