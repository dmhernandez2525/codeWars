
// Details
// In this kata, you must create a digital root function.

// Given n, take the sum of the digits of n. 
// A digital root is the recursive sum of all the digits in a number.
// continue reducing in this way until a single-digit number is produced. 
// If that value has more than one digit,
// Here's how it works:
// This is only applicable to the natural numbers.
// digital_root(16)

// => 7
// => 1 + 6
// digital_root(942)

// => 15 ...
// => 9 + 4 + 2
// => 6
// => 1 + 5
// digital_root(132189)

// => 24 ...
// => 1 + 3 + 2 + 1 + 8 + 9
// => 6
// => 2 + 4
// digital_root(493193)

// => 29 ...
// => 4 + 9 + 3 + 1 + 9 + 3
// => 11 ...
// => 2 + 9
// => 2
// => 1 + 1


// Solution
function digitalRootStep(n) {
  if (n < 10){return n}
  let memo = digitalRootStep(Math.floor(n / 10)) 
  return memo + (n % 10) 
}


function digital_root(n) {
  if(n < 10){return n};
  return digital_root(digitalRootStep(n))
}