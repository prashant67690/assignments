/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphabet(character) {
  return /^[a-zA-Z]$/.test(character);
}

function isPalindrome(str) {
  let convertedStr = "";
  for (let i = 0; i < str.length; i++) {
    const strToLower = str[i].toLowerCase();
    if (strToLower !== " " && strToLower >= "a" && strToLower <= "z") {
      convertedStr += strToLower;
    }
  }

  let i = 0;
  let j = convertedStr.length - 1;

  while (i < j) {
    if (convertedStr[i] !== convertedStr[j]) {
      return false;
    }
    j--;
    i++;
  }
  return true;
}

console.log(isPalindrome("race car"));

module.exports = isPalindrome;
