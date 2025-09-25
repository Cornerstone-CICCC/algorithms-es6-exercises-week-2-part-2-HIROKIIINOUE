// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [45, 7, 11, 67, 9, 41, 401];

const includedEvenNumber = numbers.some((number) => number % 2 === 0);

if (includedEvenNumber) {
  console.log("even number is included");
} else {
  console.log("only odd number is here");
}
