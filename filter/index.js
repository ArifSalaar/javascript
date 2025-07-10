// filter()

// It is mainly used to filter out specific items from an array based on a condition.
//Returns a new array with only the matching elements.
//Does not change the original array.
//If no elements pass the test, it returns an empty array.
//Commonly used for searching, filtering conditions, or removing unwanted data.



// Exp1
const ages = [12,45,9,67,45,56,21];
const adults = ages.filter(age => age >= 18);
console.log("Adults are", adults);



//Exp2 filter only even number from array
const numbers = [4,56,343,32,23,5,80];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("EvenNumbers are", evenNumbers );