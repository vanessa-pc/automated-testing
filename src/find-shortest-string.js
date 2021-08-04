"use strict";

/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param {string[]} stringArray - array of strings
 * @returns {string} - the shortest string
 */
function findShortestString(stringArray) {
  let shortestString = stringArray[0];
  for (let str of stringArray) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString;
}

// export function so it can be used in test file
module.exports = findShortestString;
