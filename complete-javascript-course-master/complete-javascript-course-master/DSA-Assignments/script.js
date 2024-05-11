console.log("Hiii");
// *********************************************
//  1) TWO SUM
//******************************************* */

// Brute Force SOlution
function twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

const output = twoSum([2, 7, 11, 15], 9);
console.log(output);

// Time Complexity = O(n2)
// Space Complexity = O(1)

// Optimal SOlution

const twoSumOp = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let potentialKey = target - value;

    if (map[potentialKey] !== undefined) {
      return [map[potentialKey], i];
    } else {
      map[value] = i;
    }
  }
};

const output2 = twoSumOp([1, 5, 9], 10);
console.log(output2);

// Time = O(n) one loop to iterate array
// Space = O(n) for storing map

// *********************************************
// 2) Subtract the Product and Sum of Digits of an Integer
//*********************************************/

//Explaination
//https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3457223/beats-100-best-c-java-python-and-javascript-solution-complete-explanation/?languageTags=javascript

const subtractProductAndSum = function (n) {
  let sum = 0;
  let multiply = 1;

  while (n > 0) {
    let digit = n % 10;
    sum = sum + digit;
    multiply = multiply * digit;
    n = Math.floor(n / 10);
  }

  return multiply - sum;
};

console.log(subtractProductAndSum(234));

// Time = O(log n)
// Space = O(1)

var subtractProductAndSum2 = function (n) {
  let prod = 1;
  let sum = 0;
  // let s = n.toString();  //["234"]

  let s = n.toString().split(""); //["2","3","4"]
  for (let i = 0; i < s.length; i++) {
    let digit = parseInt(s[i]); // 2 => 3 => 4
    prod *= digit;
    sum += digit;
  }
  return prod - sum;
};
console.log(subtractProductAndSum2(234));

// Time = O(n)
//Space= = O(n)

// *********************************************
// 3) Remove Duplicates from Sorted Array
//******************************************* */

const removeDuplicates = function (nums) {
  let uniqueElementIndex = 1; // 0 index will always have unique

  for (let i = 0; i < nums.length - 1; i++) {
    // i can start with 0 as well
    if (nums[i] !== nums[i + 1]) {
      nums[uniqueElementIndex] = nums[i + 1];
      uniqueElementIndex++;
    }
  }

  nums.length = uniqueElementIndex; // not removing element from array [1,2,2]
  return uniqueElementIndex;
  // return nums;
};

console.log(removeDuplicates([1, 1, 2]));

// Time = O(n)
// Space = O(1)

// *********************************************
// 4) Contains Duplicate

//https://www.youtube.com/watch?v=1MfHpQcvhjE
//******************************************* */

//briteforce
//time - O(n2)
//space - o(1)

const containDuplicates2 = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};

console.log(containDuplicates2([1, 2, 3, 4]));

//optimized
// time - O(n)
//SPace - O(n)

const containDuplicates = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
  }
  return false;
};

console.log(containDuplicates([1, 2, 1, 4]));

//optimized
// time - O(n)
//SPace - O(n)

const containDuplicates3 = function (nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
};

console.log(containDuplicates3([1, 2, 3, 4, 1]));

// Time: O(n)     linear -> traverse whole array
// Space : O(n)   scale linear as we have larger array of integers. Worst case if duplicate is at the end then we traverse entire array.

// *********************************************
// 5) Plus One
//*********************************************/

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
};

console.log(plusOne([9]));

// Time - O(n)
// Space = O(1)

// *********************************************
// 5) Sqrt(x)
//*********************************************/

// https://leetcode.com/problems/sqrtx/solutions/3101509/3-different-solutions-using-js-o-1-o-n-o-logn/

var mySqrt = function (x) {
  var left = 1;
  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    var sqr = mid * mid;
    if (sqr > x) {
      right = mid - 1;
    } else if (sqr < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};

console.log(mySqrt(125));
// Time - O(log n) => binary search
// space - O(1)

// Second Approach

var mySqrt2 = function (x) {
  return Math.floor(Math.sqrt(x));
};
console.log(mySqrt2(4));

// *********************************************
//  7) Roman to Integer
//*********************************************/

const romanToInt = function (s) {
  // Create Hash Map
  const symbols = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = symbols[s[i]];
    const next = symbols[s[i + 1]];

    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));

// T = O(n)
// S = O(n)

// *********************************************
//  8) Single Number

// https://www.youtube.com/watch?v=XzQSPg6LFyY - Solution
//*********************************************/

// 1st sub optimized code using HashSet

const singleNumber = function (nums) {
  const setForUnique = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (setForUnique.has(nums[i])) {
      setForUnique.delete(nums[i]);
    } else {
      setForUnique.add(nums[i]);
    }
  }
  // console.log('Unique Set',setForUnique) // undefined
  return Array.from(setForUnique)[0];
};

console.log(singleNumber([2, 1, 2]));

// T =O(n) => Linear to traverse entire array
// S = O(n)  => Using set data structure set to store

// 2nf  optimized code using XOR

const singleNumberX = function (nums) {
  var result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

console.log(singleNumberX([2, 1, 2]));

// T = O(n)
// S = O(1)

// *********************************************
// 9) MOVE ZEROS
//*********************************************/

// 1St Opproach non optimize

const moveZeros = function (nums) {
  let nArray = new Array(nums.length);
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nArray[j++] = nums[i];
    }
  }
  for (let i = j; i < nums.length; i++) {
    nArray[i] = 0;
  }

  return nArray;
};

console.log(moveZeros([0, 1, 0, 3, 12]));
// Time = O(n)
// Space = O(n)

// 2nd Opproach without creating new array

const moveZeros2 = function (nums) {
  let nCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nCount++] = nums[i];
    }
  }
  for (let i = nCount; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeros2([0, 1, 0, 3, 12]));
// Time = O(n)
// Space = O(1)

// *********************************************
//  10) MERGE SORTED ARRAY
//******************************************* */
//https://leetcode.com/problems/merge-sorted-array/solutions/3436053/beats-100-best-c-java-python-and-javascript-solution-two-pointer-stl/?orderBy=most_votes&languageTags=javascript

//Iterative
const mergeA = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }
  return nums1.sort((a, b) => a - b); // log n
};

console.log(mergeA([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// Optimized Two Pointer

const mergeOp = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = nums1.length - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal > sVal) {
      nums1[i] = fVal;
      i--;
      first--;
    } else {
      nums1[i] = sVal;
      i--;
      second--;
    }
  }
  return nums1;
};
console.log(mergeOp([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// T - O(n + m)
// S = O(1)

// *********************************************
//  11) Palindrome Number
//******************************************* */

/**How to reverse the number
original number: 543
reverse number: 0

//Get the last digit of the original number
original % 10 = 543 % 10 = 3
//Put this digit as the last one in the reverse number
reverse * 10 + digit = 0 * 10 + 3 = 0 + 3 = 3
reverse: 3
//Remove this digit from the original number
original / 10 = 543 / 10 = 54.3
~~54.3 = 54
original: 54

//Repeat
original % 10 = 54 % 10 = 4
reverse * 10 + digit = 3 * 10 + 4 = 30 + 4 = 34
reverse: 34
original / 10 = 54 / 10 = 5.4
~~5.4 = 5
original: 5

//Repeat
original % 10 = 5 % 10 = 5
reverse * 10 + digit = 34 * 10 + 5 = 340 + 5 = 345
reverse: 345
original / 10 = 5 / 10 = 0.5
~~0.5 = 0
original: 0

input: 543
output: 345
So if the reverse number is equal to the original number, then it is a palindrome

345 != 543 //not palindrome
272 == 272 //is palindrome */

const isPalindrome = function (x) {
  if (x < 0) return false;

  var reverse = 0;
  var copy = x;

  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);

    //That ~~ is a double NOT bitwise operator.
    //It is used as a faster substitute for Math.floor() for positive numbers. It does not return the same result as Math.floor() for negative numbers, as it just chops off the part after the decimal (see other answers for examples of this).
  }
  return reverse === x;
};

const result = isPalindrome(121);
console.log(result);

const isPalindrome2 = function (x) {
  if (x < 0) return false;

  return x === parseInt(x.toString().split("").reverse().join("")); // 121 => '121' => ['1','2','1'] => ['1','2','1'] => ['121'] => 121
};
const res = isPalindrome2(121);
console.log(res);

// Time = O(n)
// Space = O(1);

// *********************************************
//  12) Longest Common prefix
//******************************************* */

const longestCommomPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommomPrefix(["flower", "flow", "flight"]));

//Time = O(n2)
//space = O(1)

// *********************************************
//  13) Valid parenthesis
//******************************************* */

const isValid = function (s) {
  if (s.length % 2 !== 0) return false; //if size is odd its not balanced

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);

    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()[]{}"));

//time = O(n)
//space = O(n)

// *********************************************
//  14) Valid Anagram
//******************************************* */

const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  s = s.split("").sort().join("");

  t = t.split("").sort().join("");

  return s === t;
};

console.log(isAnagram1("rat", "tan"));
// Time = O(log n) => sort take log n time
//space = O(1)

//Optimized
//https://leetcode.com/problems/valid-anagram/solutions/3261552/easy-solutions-in-java-python-javascript-and-c-look-at-once/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const count = {};

  let len = s.length;

  for (let i = 0; i < len; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;
    count[s[i]]++;
    count[t[i]]--;
  }

  for (let ch in count) {
    if (count[ch] !== 0) return false;
  }
  return true;
};
console.log(isAnagram("rat", "tar"));

//time = O(n)
//space = O(n) / O(1)

// *********************************************
//  15) Count String Occurance
//******************************************* */

function countOfString(string) {
  return string.split("").reduce((accumlator, currentValue) => {
    let currentCount =
      accumlator[currentValue] !== undefined ? accumlator[currentValue] : 0;

    if (currentCount) {
      currentCount += 1;
    } else {
      currentCount = 1;
    }

    accumlator[currentValue] = currentCount;
    return accumlator;
  }, {});
}

console.log(countOfString("Hello there"));

const arr = [11, 22, 33, 44, 11, 22, 33, 66];

function countOfArr(arr) {
  const count = {};

  for (const a of arr) {
    count[a] = count[a] ? count[a] + 1 : 1;
  }

  return count;
}

console.log(countOfArr(arr));

// *********************************************
//  16) Majority Element
//******************************************* */

//https://leetcode.com/problems/majority-element/solutions/51608/javascript-solution-without-sort/

const majorityElement = function (nums) {
  let count = {};

  for (const a of nums) {
    count[a] = count[a] ? count[a] + 1 : 1;

    if (count[a] > nums.length / 2) {
      return a;
    }
  }

  // return count
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

const mElement = function (nums) {
  let count = [];

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;

    if (count[nums[i]] > nums.length / 2) {
      return count[nums[i]];
    }
  }
};

console.log(mElement([3, 2, 3]));

// *********************************************
//  17) ROTATE ARRAY
//******************************************* */

//Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

//bruteforce
const rotateArray = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
    console.log(`steps ${i}`, nums);
  }
  return nums;
};
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
/*
Time Complexity:
The code consists of a loop that iterates k times, where k is the given value. Within each iteration, the code performs two operations: unshift and pop. Let's break down the time complexity of these operations:
nums.unshift(nums.pop()): The pop operation has a time complexity of O(1) since it removes the last element from the array. The unshift operation, on the other hand, has a time complexity of O(n) in the worst case since it involves shifting all elements to the right to make space for the new element at the beginning. However, since it is performed k times, the total time complexity for the unshift operation is O(k * n).
Considering that the loop iterates k times, the overall time complexity of the code can be approximated as O(k * n).

Space Complexity:
The space complexity of the code is determined by the additional space used during the execution of the operations. In this case, the space complexity is primarily influenced by the size of the nums array.
The space complexity of the given code is O(n) since it does not use any significant additional space in relation to the size of the input array.

In summary:

Time complexity: O(k * n)
Space complexity: O(n)
*/

//another way

//f k is greater it's obvious we are getting zero/1.
//and if it's not , lets take nums=[1,2,3,4,5] & k=3 then after applying  k= k/nums.length we will get 3 as it is as remainder

const rotateArray2 = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7], 3));

/*
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
*/

//Optimized

//https://leetcode.com/problems/rotate-array/solutions/558971/faster-than-99-56-javascript/?envType=study-plan-v2&envId=top-interview-150

/**In summary, the space complexity is O(1) and the time complexity is O(n), where 'n' is the number of elements in the nums array. 
 * Space Complexity:

The space complexity of the code is O(1). This is because the code operates on the input array nums in place and does not use any additional data structures or allocate extra memory that depends on the size of nums.
Time Complexity:

The time complexity of this code is O(n), where 'n' is the number of elements in the nums array.
The code consists of the following operations:
k = k % nums.length;: This operation takes O(1) time as it involves simple arithmetic on integers.
nums.reverse();: The reverse method is used to reverse the entire nums array, and it takes O(n) time since it reverses all 'n' elements of the array.
reverseNums(nums, 0, k - 1);: This function reverses the first 'k' elements of the nums array. The reverseNums function iterates over these 'k' elements once, which takes O(k/2) time.
reverseNums(nums, k, nums.length - 1);: This function reverses the remaining 'n - k' elements of the nums array. Similar to the previous reversal, it takes O((n - k)/2) time.
The total time complexity of the code is O(1) + O(n) + O(k/2) + O((n - k)/2), which simplifies to O(n).
In summary, the space complexity is O(1) and the time complexity is O(n), where 'n' is the number of elements in the nums array. This code efficiently rotates the array in place.
 * 
 * 
 * 
*/

const rotateArray3 = function (nums, k) {
  k = k % nums.length;
  nums.reverse();

  reverseNums(nums, 0, k - 1);
  reverseNums(nums, k, nums.length - 1);

  return nums;
};

const reverseNums = function (nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

//console.log(rotateArray3([1, 2], 3));
console.log(rotateArray3([1, 2, 3, 4, 5, 6, 7], 3));

// *********************************************
//  18) Best Time to Buy and Sell Stock

//******************************************* */

/**psuedo
 * [7,1,5,3,6,4]

buy-letft = 0
sell-right = 1
max_profit = 0

while r < price.length
if
      l > r

      update left = right index
else
      l < r

      calculate profit

      update my maxinum profit by comparing proft, max_profit
while end
right++
 * 
 * 
 */

const maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max_Profit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      max_Profit = Math.max(max_Profit, profit);
    } else {
      left = right;
    }

    right++;
  }
  return max_Profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//space = O(1)
//Time = O(n)

// *********************************************
//  18) Best Time to Buy and Sell Stock 2

//******************************************* */

const maxProfit2 = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

//time - O(n)
//space = O(1)

// *********************************************
//  19) Remove Element

//******************************************* *

/*
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

const removeElement = function (nums, val) {
  let uniqueEleIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== val) {
      nums[uniqueEleIndex++] = nums[i];
    }
  }

  return uniqueEleIndex;
};

console.log(removeElement([3, 2, 2, 3], 3));

// Time = O(n)
// Space = O(1)
