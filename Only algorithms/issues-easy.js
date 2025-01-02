// ISSUE 1

// 709. To Lower Case
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"

// This problem copy from leetcode


// let toLowerCase = function(s) {
//     return s.toLowerCase();
// };

// TestCases
// console.log(toLowerCase("Hello")) // "hello"
// console.log(toLowerCase("here")) // "here"
// console.log(toLowerCase("LOVELY")) // "lovely"


// ISSUE 2

// 58. Length of Last Word
// Easy
// Topics
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:
// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// First way

// let lengthOfLastWord = function(s) {
//     return s.trim().split(" ").pop().length;
// };

// TestCases
// console.log(lengthOfLastWord("Hello World")) // 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
// console.log(lengthOfLastWord("luffy is still joyboy")) // 6

// Second way
// let lengthOfLastWord = function(s) {
//     let trimmedS = s.trim();
//     let newStr = trimmedS.split(" ");
//     let lasWord = newStr[newStr.length - 1];
//     return newStr[lasWord].length;
// };

// TestCases
// console.log(lengthOfLastWord("Hello World")) // 5
// console.log(lengthOfLastWord(" ")) // 0