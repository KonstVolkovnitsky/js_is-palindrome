'use strict';

/**
 * Implement isPalindrome function:
 *
 * A palindrome is a word, phrase, or other sequence of characters which reads
 * the same backward as forward, such as 'madam' or 'racecar'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases. Empty string is a valid
 * palindrome.
 *
 *
 * isPalindrome('A man, a plan, a canal: Panama') === true
 * isPalindrome('race a car') === false
 *
 * @param {string} str
 *
 * @return {boolean}
 */
function isPalindrome(str) {
  const lettersArray = str.match(/\w/gi);
  const IsNotEmptyArray = lettersArray !== null;
  if (IsNotEmptyArray) {
    return lettersArray
      .join()
      .toLowerCase() === lettersArray
      .reverse().join()
      .toLowerCase();
  } else if (str === '') {
    return true;
  }
}

module.exports = isPalindrome;
