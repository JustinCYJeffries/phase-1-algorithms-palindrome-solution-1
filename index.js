function isPalindrome(word) {
  // Write your algorithm here
  let wordArray = word.split('')
  let reverso = wordArray.reverse()
  let together = reverso.join('')
  return together === word
}

/* 
  reverse the input

  if input = the reverse 
    return true
  else return false
*/

/*
  split the word into an array, with each letter as an element
  reversed the order of elements using .reverse
  join the reversed together back into a string
  check if the string matches the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


module.exports = isPalindrome;
