// const compareString = function (str1, str2) {
//   if (str1.length !== str2.length) return false;

//   // newString1 = str1.split("").sort().join("");
//   // newString2 = str2.split("").sort().join("");

//   // if (newString1 === newString2) return true;

//   const charCount = {};

//   for (let i = 0; i < str1.length; i++) {
//     const char1 = str1[i];
//     const char2 = str2[i];

//     charCount[char1] = (charCount[char1] || 0) + 1;
//     charCount[char2] = (charCount[char2] || 0) - 1;
//   }
//   for (let count in charCount) {
//     if (charCount[count] !== 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(compareString("listen", "silent"));

// //optimized

const lastWordLen = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) !== " ") {
      count++;
    } else {
      if (count > 0) return count;
    }
  }
};

console.log(lastWordLen("fly me   to   the moon"));

const checkEvenOdd = function (arr) {
  const result = [];

  for (const a of arr) {
    if (a % 2 === 0) {
      result.push(a * 2);
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(checkEvenOdd(arr));
