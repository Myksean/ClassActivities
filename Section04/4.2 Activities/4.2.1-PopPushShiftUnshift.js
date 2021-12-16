const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let last1 = nums.pop();
let last2 = nums.pop();
// remove each of the first two items with shift(), saving each item to a variable
let first1 = nums.shift();
let first2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.unshift(last1, last2);
nums.push(first2, first1);

console.log(nums);
