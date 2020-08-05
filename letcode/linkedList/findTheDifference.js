// https://leetcode.com/problems/find-the-difference/

// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

var findTheDifference = function(s, t) {
    let frequencies = {};

    for (let char of s) {
        if (frequencies[char] === undefined) {
            frequencies[char] === 1;
        }  else {
            frequencies[char]++;
        }
    }

    for (let char of t) {
        if (frequencies[char] !== undefined && frequencies[char] > 0) {
            frequencies[char]--;
        } else {
            return char;
        }
    }

    return -1; // if all are the same 
};
