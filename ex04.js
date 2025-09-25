// Includes Exercise
// Instructions: Create an array of at least five different fruits as strings. Write code to check if the array includes the fruit "apple".

const fruits = ["banana", "apple", "orange", "peach", "grape", "melon"];

const includedApple = fruits.includes("apple");

if (includedApple) {
  console.log("apple is included");
} else {
  console.log("apple is not here");
}
