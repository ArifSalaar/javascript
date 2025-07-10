// map()

// In JavaScript, the map() method is used to transform each element of an array and return a new array with the results. It does not modify the original array.

const numbers = [11,22,33,44,55,66];
const double = numbers.map(num => num *2);
console.log("Double values of each elements", double)