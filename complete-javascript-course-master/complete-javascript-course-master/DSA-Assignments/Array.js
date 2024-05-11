// remove duplicates from array
const arr = [1, 1, 2, 2, 3, 3, 5, 6, 6];
const result = [...new Set(arr)];
console.log(result);

//_____________________________________________________________

// Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  let uniques = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[uniques] = nums[i];
      uniques++;
    }
  }
  nums.length = uniques;
  return uniques;
};
console.log(removeDuplicates([1, 1, 2]));
//____________________________________________________________________

// Best Time to Buy and Sell Stock II

const maxProfit = function (prices) {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    const [priceYesterday, priceToday] = [prices[i - 1], prices[i]];
    if (priceYesterday < priceToday) {
      profit += priceToday - priceYesterday;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//_________________________________________________________________________________

// Rotate Array

/*
he time and space complexity of the given code can be analyzed as follows:

Time Complexity:
The time complexity of the code mainly depends on the splice and unshift operations, as they involve modifying the nums array. Let's break down the code step by step:
nums.splice(nums.length - k, k): The splice method is used to remove k elements from the array starting from nums.length - k index. This operation has a time complexity of O(k) since it involves removing elements from the middle of the array.
nums.unshift(...nums.splice(nums.length - k, k)): The splice operation is performed first, and then the resulting array is passed to unshift method, which adds elements to the beginning of the nums array. Both operations have a time complexity of O(k) since they involve modifying the array.
Therefore, the overall time complexity of the code is O(k) due to the splice and unshift operations.

Space Complexity:
The space complexity of the code is determined by the additional space used during the execution of the operations. In this case, the splice operation creates a new array containing the removed elements, and the unshift operation modifies the original nums array in place. However, the space complexity of these operations is not directly affected by the size of the nums array.
Thus, the space complexity of the code is O(k) since it only depends on the number of elements k being moved in the array.

In summary:

Time complexity: O(k)
Space complexity: O(k)




Regenerate response

*/

var rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

//____________________________________________________________________________________________

//Contains Duplicate

const containDuplicate = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    else set.add(nums[i]);
  }
  return false;
};

console.log(containDuplicate([1, 2, 3, 1]));
//___________________________________________________________________________

//  Single Number

const singleNumber = function (nums) {
  const uniqueSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (uniqueSet.has(nums[i])) {
      uniqueSet.delete(nums[i]);
    } else {
      uniqueSet.add(nums[i]);
    }
  }

  return Array.from(uniqueSet)[0];
};

console.log(singleNumber([2, 2, 1]));

// time 0(n)  space=0(n)

//______________________________________________________________________________

var intersect = function (nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }
  const result = [];
  for (const n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1);
    }
  }
  return result;
};

console.log(intersect([1, 2, 1, 2], [2, 2]));

//time = 0(num1 + num2)

// reverse string iterarively
// const reverseString = function(str){
//     let n = str.length;
//     // swap characters starting from two corners

//     for(let i=0;i<parseInt(n/2,10);i++){
//         str = swap(str,i,n-i-1)
//     }

//     return str

// }

// const swap = function(str,i,j){
//     let char = str.split('');
//     temp = char[i]
//     char[i] = char[j]
//     char[j] = temp
//     return char.join('')

// }

// console.log(reverseString('Hello'))
//______________________________________________________________________________________________

// reverse string iterarively using two pointers

// const reverseString = function(str){
//     let n = str.length;
//     let char = str.split('')
//     let temp;

//     for(i=0,j=n-1;i<j;i++,j--){
//         temp = char[i]
//         char[i] = char[j]
//         char[j]=temp
//     }

//     return char.join('')
// }

// console.log(reverseString('Hello'))

// Time - 0(n)
//Space = 0(1)

//__________________________________________________________________________________________________

// reverse string recursively

// const revString = function(str){
//     if(str == "") return "";

//     else return revString(str.substr(1)) + str.charAt(0);

// }

// console.log(revString('nigar'))

//___________________________________________________________________________________________

// recusrsively
// function reverseString(str) {
//     if (str === "") // This is the terminal case that will end the recursion
//       return "";

//     else
//       return reverseString(str.substr(1)) + str.charAt(0);
//   /*
//   First Part of the recursion method
//   You need to remember that you won’t have just one call, you’ll have several nested calls

//   Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
//   1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
//   2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
//   3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
//   4th call – reverseString("lo")      will return   reverseString("o")              + "l"
//   5th call – reverseString("o")       will return   reverseString("")               + "o"

//   Second part of the recursion method
//   The method hits the if condition and the most highly nested call returns immediately

//   5th call will return reverseString("") + "o" = "o"
//   4th call will return reverseString("o") + "l" = "o" + "l"
//   3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
//   2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
//   1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
//   */
//   }
//   reverseString("hello");

//____________________________________________________________________________________________________________

// plus one

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0; // e.g. [9] + 1 = [1,0]
    }
  }
  digits.unshift(1); // e.g [9,9] + 1 = [1,0,0]
  return digits;
};

console.log(plusOne([9]));

// time = 0(n)
//space = 0(1)

//___________________________________________________________________________________

// moves zero

const moveZeros = function (nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12]));

// time = 0(n)
// space = 0(1)

//_________________________________________________________________________

// Rotate Image

var rotate = function (matrix) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }

  return matrix;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// time - 0(n2)
// space = 0(1)

//____________________________________________________________

// 2D sudoku

const isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
      col = new Set(),
      box = new Set();

    for (let j = 0; j < 9; j++) {
      let rowCell = board[i][j];
      let colCell = board[j][i];
      let boxCell =
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];

      if (rowCell !== ".") {
        if (row.has(rowCell)) return false;
        row.add(rowCell);
      }

      if (colCell !== ".") {
        if (col.has(colCell)) return false;
        col.add(colCell);
      }

      if (boxCell !== ".") {
        if (box.has(boxCell)) return false;
        box.add(boxCell);
      }
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
// constant space and time complexicity because board has fixed dimension

//______________________________________________________________________________________

// Two sum

var twoSum = function (nums, target) {
  // bruteforce

  // for(let i=0;i<nums.length;i++){
  //     for(let j=i+1;j<nums.length;j++){
  //         if(nums[i] + nums[j] == target){
  //             return [i,j]
  //         }
  //     }
  // }

  // time - O(n2)
  //sace - constant

  // let map = {}
  // for(let i=0;i<nums.length;i++){
  //     var value = nums[i];
  //     var complementPair = target - value;
  //     if(map[complementPair] !== undefined){
  //         return [map[complementPair],i];
  //     } else {
  //         map[value] = i
  //     }
  // }

  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    hash[val] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let potentialKey = target - nums[i];
    if (hash[potentialKey] && hash[potentialKey] !== i) {
      return [i, hash[potentialKey]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

//________________________________________________________________________

// set matrix zeros

const setZeros = function (matrix) {
  const result = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        result.push([r, c]);
      }
    }
  }

  for (let address of result) {
    let row = address[0];
    let col = address[1];

    setZero(row, col, matrix);
  }

  return matrix;
};

const setZero = function (r, c, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    matrix[r][i] = 0;
  }
};

console.log(
  setZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

//________________________________________________________________________________________

// group anagrams

const anagrams = function (strs) {
  let result = {};

  for (let str of strs) {
    let sortedKey = str.split("").sort().join(""); // aet
    if (result[sortedKey]) {
      result[sortedKey].push(str);
    } else {
      result[sortedKey] = [str];
    }
  }

  return Object.values(result);
};

console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// time  - O(n * wlogw)
// space - O(nw)

// optimized

// const anagrams = function(strs){
//     let result = {};
//     const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//     for(let str of strs){

//         let key = str.split('').reduce((total, char) => total * primes[char.charCodeAt() -97],1)
//         if(result[key]){
//             result[key].push(str)
//         } else {

//             result[key] = [str];
//         }

//     }

//     return Object.values(result)
// }

// console.log(anagrams(["eat","tea","tan","ate","nat","bat"]))

//__________________________________________________________________

// longest substring brute force
// time - O(n3)
// space - 0(n2)
const longestSubstring = function (str) {
  let max = 0;
  for (let begin = 0; begin < str.length; begin++) {
    for (let end = begin; end < str.length; end++) {
      const substring = str.substring(begin, end + 1);
      //console.log(substring)
      if (isUnique(substring)) {
        if (substring.length > max) {
          max = substring.length;
        }
      }
    }
  }

  return max;
};

const isUnique = function (s) {
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) return false;
    set.add(s[i]);
  }

  return true;
};

console.log(longestSubstring("abcabcbb"));

// longest substring optimal

const lengthOfLongestSubstring = function (s) {
  let max = 0;
  let begin = 0;
  let set = new Set();
  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[begin]);
      begin = begin + 1;
    }

    set.add(s[end]);
    max = Math.max(max, end - begin + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

//____________________________________________________________________________

// longest palindrome substring

const longestPalindrome = function (str) {
  if (str.length < 1 || str == null) return;

  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let oddPalindrome = expandFromCenter(str, i, i);
    let evenPolindrome = expandFromCenter(str, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPolindrome.length > longest.length) {
      longest = evenPolindrome;
    }
  }
  return longest;
};

function expandFromCenter(str, left, right) {
  let i = 0;

  while (str[left - i] && str[left - i] === str[right + i]) {
    i++;
  }
  i--;

  return str.slice(left - i, right + i + 1);
}

console.log(longestPalindrome("babad"));

//_________________________________________________________________________

// Increasing Triplet Subsequence

const increasingTriplet = function (nums) {
  let min = nums[0];
  let secondMinUpdatedAfterMin = Infinity;

  // for(let i=1;i<nums.length;i++){
  //     if(nums[i] <= min){
  //         min = nums[i];
  //     } else if(nums[i] <= secondMinUpdatedAfterMin) {
  //         secondMinUpdatedAfterMin = nums[i]

  //     } else {
  //         return true
  //     }
  // }

  for (let val of nums) {
    if (val <= min) {
      //i
      min = val;
    } else if (val <= secondMinUpdatedAfterMin) {
      //j
      secondMinUpdatedAfterMin = val;
    } else {
      return true; //k
    }
  }
  return false;
};

console.log(increasingTriplet([5, 4, 3, 2, 1]));

//

var countAndSay = function (n) {
  var str = "1";
  for (var i = 1; i < n; i++) {
    var strArray = str.split("");
    str = "";
    var count = 1;
    // Loop through current nth level line
    for (var j = 0; j < strArray.length; j++) {
      // Next digit is different
      if (strArray[j] !== strArray[j + 1]) {
        // Go to next non-matching digit
        str += count + strArray[j];
        count = 1;
      } else {
        count++;
      }
    }
  }
  return str;
};
console.log(countAndSay(4));

//_____________________________________________________________________________

// var threeSum = function(nums) {
//     nums.sort((a,b) => a-b);

//     const result = [];

//     for(let i=0;i<nums.length;i++){
//         if(nums[i] === nums[i-1]) continue
//         let target = nums[i] * -1;

//         let subResult = twoSum(i+1,target,nums);
//         result.push(...subResult);

//     }
//     return result

// };

// const twoSum = function(j,target,nums){

//     let k=nums.length-1;
//     const result = [];
//     while(j < k){
//         let leftVal = nums[j];
//         let rightVal = nums[k];

//         if(leftVal + rightVal > target){
//             k--;

//         } else if(leftVal + rightVal < target){
//             j++;
//         } else {
//              result.push([(target * -1),leftVal,rightVal])
//             while(j<k && nums[j] === nums[j+1]) j++;
//             while(j<k && nums[k] === nums[k-1]) k--;

//             j++;
//             k--;
//         }
//     }
//     return result

// }
// console.log(threeSum([-1,0,1,2,-1,-4]))

//

const findMaxConsecitiveOne = function (nums) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 0;
    } else {
      currentCount++;
    }
  }

  return Math.max(currentCount, maxCount);
};

console.log(findMaxConsecitiveOne([1, 0, 1, 1, 0, 1]));

//Time complexity: O(n)
//Space complexity: O(1)
