// 1480. Running Sum of 1d Array

var runningSum = function (nums) {
  for (i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};
console.log(runningSum([1, 2, 3, 4])); // accepted

//time complexity = O(n) - we are perfoming same number of operation on array
// space complexity = O(1) -  solution does not create data stucture propotional in size to our input

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1672. Richest Customer Wealth
var maximumWealth = function (accounts) {
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = accounts[i].reduce((a, b) => a + b, 0);

    if (sum > maxWealth) {
      maxWealth = sum;
    }
  }
  return maxWealth;
};
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);

////time complexity = O(n * m ) - we are perfoming same number of operation on array i,j
// space complexity = O(1) -  solution does not create data stucture propotional in size to our input

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var fizzBuzz = function (n) {
  const result = [];

  for (i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      result.push("Fizz");
    } else if (i % 5 == 0) {
      result.push("Buzz");
    } else {
      result.push(String(i)); 
    }
  }
  return result;
};
console.log(fizzBuzz(5));



//Time:O(n)
//Space=O(n)
