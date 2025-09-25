// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [44, 66, 75, -2, 4, 96];

const allNumberIsPositive = numbers.every((number) => number > 0);

if (allNumberIsPositive) {
  console.log("all number is positive");
} else {
  console.log("not only positive number is here");
}
