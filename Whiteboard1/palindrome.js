/* eslint-disable prettier/prettier */
//Create a function that determines if a string
//input is a palindrome.
//A palindrome is a piece of data that is the
//same forwards and backwards.


//First attempt - Roughly 1hr,10min to complete
function myPalindrome(x) {
  let string = x;
  let backward = "";
  let y = "";
  for (let i = 0; i < string.length; i++) {
    y = string.at(i);
    backward = y + backward;
  }
  if (string === backward) {
    console.log("True");
  } else {
      console.log("False");
    }
  }

//Refactored version
function refactPalindrome(string) {
  let backward = string.split("").reverse().join("");
  //Return is better if using output in another function
  if (string === backward) {
    console.log(`${string} is a palindrome.`);
  } else {
      console.log(`${string} is NOT a palindrome.`);
    }
};

myPalindrome("racecar");
myPalindrome("burn");
refactPalindrome("racecar");
refactPalindrome("burn");
