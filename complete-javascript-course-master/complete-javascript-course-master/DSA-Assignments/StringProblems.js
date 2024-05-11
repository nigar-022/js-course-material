const reverseString = function (str) {
  let len = str.length;
  let char = str;
  //let char = str.split('')

  for (let i = 0, j = len - 1; i < j; i++, j--) {
    temp = char[i];
    char[i] = char[j];
    char[j] = temp;
  }

  return char;
};
console.log(reverseString(["h", "e", "l", "l", "o"]));

const reverseString2 = function (s) {
  return s.split("").reverse().join("");
};
console.log(reverseString2("nigar"));

//__________________________________________________________________________________

// reverse integer number

const revNum = function (num) {
  let reverseNumber = num.toString().split("").reverse().join("");

  if (reverseNumber.endsWith("-")) {
    reverseNumber = "-" + reverseNumber;
    return parseInt(reverseNumber);
  }

  return reverseNumber;
};

console.log(revNum(123));

// reverse integer number solve second way

const reverseNumber = function (num) {
  if (num < 0) {
    return -1 * reverseNumber(-num);
  }

  result = num.toString().split("").reverse().join("");
  return result > 2 ** 31 - 1 ? 0 : result;
};
console.log(reverseNumber(-123));

///___________________________________________________________________________________________
//First Unique Character in a String
const firstUniqChar = function (s) {
  const characterCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    characterCount[char] = characterCount[char] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (characterCount[char] === 1) {
      return i;
    }
  }

  return -1;
};
console.log(firstUniqChar("leetcode"));

//____________________________________________________________________________________________________

//string anagrams

// const validAnagram = function(s,t){
//     if(s.length !== t.length) return false;
//     const sCount = {};
//     const tCount = {};
//     let len = s.length;

//     for(let i=0;i<len;i++){

//         sCount[s[i]] = sCount[s[i]] + 1 || 1;
//         tCount[t[i]] = tCount[t[i]] + 1 || 1;
//     }

//     for(let ch in sCount){
//         if(sCount[ch] !== tCount[ch]) return false
//     }
//      return true
// }

// console.log(validAnagram('rat','tar'))

const validAnagram = function (s, t) {
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

console.log(validAnagram("rat", "tar"));

//__________________________________________________________________________

// valid palindrome

const isValidPalindrome = function (s) {
  const str = s.replace(/[^a-z0-9]/gi, "");
  console.log(str);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};
console.log(isValidPalindrome("A man, a plan, a canal: Panama"));

//____________________________________________________________________________________

// String to Integer (atoi) - Implement parseInt()
var myAtoI = function (str) {
  let i = 0;
  let res = 0;
  let isNegative = false;

  // 1. Skip spaces
  while (str[i] === " ") {
    i += 1;
  }

  // 2. Optional +/-
  const maybeSign = str[i];
  if (maybeSign === "+" || maybeSign === "-") {
    isNegative = maybeSign === "-";
    i += 1;
  }

  // 3. Process numbers and stop once an invalid character is found
  for (; i < str.length; i += 1) {
    const code = str.charCodeAt(i) - 48; // '0' is 48
    if (code < 0 || code > 9) {
      break;
    }
    res *= 10;
    res += code;
  }

  if (isNegative) {
    res = -res;
  }

  return Math.max(-(2 ** 31), Math.min(2 ** 31 - 1, res));
};
console.log(myAtoI("   -42"));

//_________________________________________________________________________________________________

// Find the Index of the First Occurrence in a String (Implement strstr)

var strStr = function (haystack, needle) {
  if (needle === "" && haystack === "") {
    return 0;
  }

  for (var i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substr(i, needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("abcabcd", "abcd"));
//_________________________________________________________________

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        console.log(str.slice(0, i));
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));

//Length of Last Word

const lengthOfWord = function (s) {
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) != " ") {
      count++;
    } else {
      if (count > 0) return count;
    }
  }

  return count;
};

console.log(lengthOfWord("   fly me   to   the moon  "));
// Time = O(n)
//Space = O(1)

//Shorter with trim and lastIndexOf:

const lengthOfWordS = function (s) {
  s = s.trim();
  return s.length - s.lastIndexOf(" ") - 1;
};
console.log(lengthOfWordS("   fly me   to   the moon  "));

// Time = O(n)
//Space = O(1)

// And with trim and split:
const lengthOfWordSS = function (s) {
  const arr = s.trim().split(" ");
  return arr[arr.length - 1].length;
};

console.log(lengthOfWordSS("   fly me   to   the moon  "));

// Time = O(n)
//Space = O(n) traversing an array

// return count of vowels

const countOfVowels = function (str) {
  // return str.match(/[aeiou]/gi).length;

  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (const s of str) {
    if (vowels.includes(s)) {
      count++;
    }
  }

  return count;
};

console.log(countOfVowels("Nigar"));
//In summary, the time complexity of the code is O(n), and the space complexity is O(1).

// Reverse string

// const reverseString = function (str) {
//   let l = 0;
//   let r = str.length - 1;
//   let arr = str.split("");

//   while (l < r) {
//     [arr[l], arr[r]] = [arr[r], arr[l]];
//     l++;
//     r--;
//   }
//   return arr.join("");
// };

// console.log(reverseString("hello"));

// Reverse words in string

const reverseWord = function (str) {
  //return str.trim().split(" ").reverse().join(" ");

  let arr = str.split(" ");

  let reverseStr = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == "") continue;

    if (reverseStr.length > 0) {
      reverseStr = reverseStr + " " + arr[i];
    } else {
      reverseStr = reverseStr + arr[i];
    }
  }
  return reverseStr;
};

console.log(reverseWord("   hello world  "));

//time - O(n+m)
//space = O(n)

// const reverseWord = function (str) {
//   let arr = str.trim(" ").split(" ");

//   let l = 0;
//   let r = arr.length - 1;

//   while (l < r) {
//     [arr[l], arr[r]] = [arr[r], arr[l]];
//     l++;
//     r--;
//   }
//   return arr.join(" ");
// };
// console.log(reverseWord("   hello world  "));

//time =O(n)
//space = O(n)

//  Reverse vowels in string

// const reverseVowels = function (str) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let l = 0;
//   let r = str.length - 1;
//   let arr = str.split("");

//   while (l < r) {
//     if (!vowels.includes(arr[l])) l++;
//     else if (!vowels.includes(arr[r])) r--;
//     else {
//       [arr[l], arr[r]] = [arr[r], arr[l]];
//       l++;
//       r--;
//     }
//   }
//   return arr.join("");
// };

// console.log(reverseVowels("hello"));

const reverseVowels = function (str) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let l = 0;
  let r = str.length - 1;
  let arr = str.split("");

  while (l < r) {
    if (!vowels.has(arr[l])) l++;
    else if (!vowels.has(arr[r])) r--;
    else {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  return arr.join("");
};

console.log(reverseVowels("hello"));

// T = O(n)
// S = O(n)

// const countVowels = function (str) {
//     const vowels = str.match(/[aeiou]/gi);

//     return str.replace(vowels, () => vowels.pop());
//   };

//   console.log(countVowels("hello"));

// T = O(n)
// S = O(n)

//
// const countVowels = function (str) {
//   //return str.match(/[aeiou]/gi).length;

//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (const s of str) {
//     if (vowels.includes(s)) {
//       count++;
//     }
//   }

//   return count;
// };

console.log(countVowels("nigar"));

// Remove Vowels
const removeVowels = function (str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let arr = str.toLowerCase().split("");
  let result = [];

  for (const a of arr) {
    if (!vowels.includes(a)) {
      result.push(a);
    }
  }

  return result.join("");
};

console.log(removeVowels("hEllo"));

// palindrom number

const checkPalindrom = function (x) {
  let arr = Array.from(String(x));
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    if (arr[l] !== arr[r]) return false;

    l++;
    r--;
  }

  return true;
};

console.log(checkPalindrom(10));

// Check string palindrom
// const checkPalindrom = function (str) {
//   let l = 0;
//   let r = str.length - 1;

//   let arr = str.toLowerCase().split("");

//   while (l <= r) {
//     if (arr[l] !== arr[r]) return false;
//     l++;
//     r--;
//   }

//   return true;
// };

// console.log(checkPalindrom("Noon"));

//const checkPalindrom = function (str) {
//   const alphaN = str.toLowerCase().replace(/[^a-z0-9]/gi, "");

//   let arr = alphaN.split("");
//   let l = 0;
//   let r = alphaN.length - 1;

//   while (l <= r) {
//     if (arr[l] !== arr[r]) return false;
//     l++;
//     r--;
//   }

//   return true;
// };

// console.log(checkPalindrom("5?36@6?35"));

// Valid Plaidnrom

//So, s.toLowerCase().replace(/[^a-z0-9]/gi,'') will convert the string s to lowercase and remove any character that is not a lowercase letter or a digit. In this specific case, it will remove all non-alphanumeric characters. The resulting string would be "amanaplanacanalpanama".
/*
/[^a-z0-9]/gi: This is a regular expression pattern. Here's what it means:
[]: Denotes a character set.
^: Inside the character set, ^ indicates negation, meaning it matches any character not in the set.
a-z: Matches any lowercase letter from 'a' to 'z'.
0-9: Matches any digit from '0' to '9'.
/: These are delimiters indicating the start and end of the regular expression.
g: This is a flag indicating a global search (i.e., find all matches rather than stopping after the first match).
i: This is a flag indicating case-insensitive search.
'': This is the replacement string. Since it's empty, it means that any characters matching the pattern will be replaced with nothing (i.e., removed).* */
const validPalindrom = function (str) {
  const alpaNumStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let l = 0;
  let r = alpaNumStr.length - 1;

  while (l < r) {
    if (alpaNumStr[l] !== alpaNumStr[r]) return false;
    l++;
    r--;
  }

  return true;
};

console.log(validPalindrom("A man, a plan, a canal: Panama"));

// compare string

const compareString = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  // newString1 = str1.split("").sort().join("");
  // newString2 = str2.split("").sort().join("");

  // if (newString1 === newString2) return true;

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    charCount[char1] = (charCount[char1] || 0) + 1;
    charCount[char2] = (charCount[char2] || 0) - 1;
  }
  for (let count in charCount) {
    if (charCount[count] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(compareString("abc", "bca"));

//Anagram

const anagramStrings = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char1 = str1[i];
    const char2 = str2[i];

    charCount[char1] = (charCount[char1] || 0) + 1;
    charCount[char2] = (charCount[char2] || 0) - 1;
  }
  for (let count in charCount) {
    if (charCount[count] !== 0) {
      return false;
    }
  }
  return true;
};

console.log(anagramStrings("listen", "silent"));

// Time = O(n)
//space = O(1)

//

const anagram = function (str1, str2) {
  if (str1.length !== str2.length) return false;

  str1.split("").sort();
  str1.split("").sort();

  for (const s of str1) {
    if (str1 === str2) return true;
  }

  return false;
};

console.log(anagram("abc", "abc"));
const reverEachWordString = function (str) {
  let reverseWord = "";
  let reverseString = "";

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      reverseString = reverseString + reverseWord + " ";
      reverseWord = "";
    } else {
      reverseWord = str[i] + reverseWord;
    }
  }
  return reverseString;
};

console.log(reverEachWordString("Commonlay Asked Javascript"));

const findLongestWord = function (str) {
  let words = str.split(" ");

  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
};

console.log(findLongestWord("nigar shaikh"));
