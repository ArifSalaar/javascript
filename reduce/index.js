// reduce()

// The reduce() method executes a reducer function on each element of the array, resulting in a single output value (like a number, string, object, or array).It’s commonly used for calculating totals, merging values, or accumulating results from an array.


//exp1
const numbers = [23,45,23,12,33];
const sum = numbers.reduce((acc, curr) => acc + curr,0);
console.log("Sum of numbers is:", sum);



//exp2 = Shopping Cart – Calculate Total Price

const cart = [
    {product: "watch", price: 340 },
    {product: "shoes", price: 430},
    {product: "laptop", price: 43000},
];

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
console.log("Total price is :", totalPrice);


//exp3 = Employee Salaries – Get Total Salary

const employees = [
  { name: "Alena", salary: 30000 },
  { name: "Sarah", salary: 77000 },
  { name: "Peter", salary: 99000 }
];

const totalSalary = employees.reduce((acc, person) => acc + person.salary, 0);

console.log("Total Salary is:", totalSalary); 