/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let lowerStr = str.toLowerCase()
  let start = 0
  let end = str.length - 1

  while (start < end) {
    if (!/[a-zA-Z]/g.test(lowerStr[start])) start++
    else if (!/[a-zA-Z]/g.test(lowerStr[end])) end--
    else if (lowerStr[start++] === lowerStr[end--]) continue
    else return false
  }
  return true;
}

module.exports = isPalindrome;
