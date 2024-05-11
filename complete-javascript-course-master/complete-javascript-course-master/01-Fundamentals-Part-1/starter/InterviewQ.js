const flattenArray = function (arr) {
  let outputArr = [];

  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      outputArr.push(...flattenArray(ele));
    } else {
      outputArr.push(ele);
    }
  });
  return outputArr;
};

const arr = [1, 2, 3, [4, 5, [6, 7, [8]], 9], 10];
console.log(flattenArray(arr));

console.log(...arr.flat(Infinity)); // with unbuit function
console.log(...arr.flat(3)); // with unbuit function

// var arr1 = [[1,2], [3,4],[4,5]];
// console.log(flattenArray(arr1))

const objectt = {
  name: "Nigar",
  age: 26,
  address: { flatNo: 112, city: "Pune" },
};

console.log(Object.keys(objectt));
console.log(Object.values(objectt));

const flattenObj = function (obj) {
  let outputObj = {};

  Object.keys(obj).forEach((key) => {
    console.log(typeof obj[key]);
    if (typeof obj[key] === "object") {
      // outputObj[key] = {...flattenObj(obj[key])}

      const temp = flattenObj(obj[key]);

      for (const j in temp) {
        outputObj[key + "." + j] = temp[j];
      }
    } else {
      outputObj[key] = obj[key];
    }
  });
  return outputObj;
};

// console.log(flattenObj(objectt))

let arrOfObj = [{ id: 5 }, { id: 6 }, { id: 5 }, { id: 7 }, { id: 6 }];
console.log(flattenObj(arrOfObj));

const reverseString = function (str) {
  return str.split("").reverse().join("");
};
console.log(reverseString("nigar"));

const rStr = function (s) {
  let n = s.length - 1;
  let char = s;
  let temp;

  for (let i = 0, j = n; i < j; i++, j--) {
    temp = char[i];
    char[i] = char[j];
    char[j] = temp;
  }

  return char;
};

console.log(rStr(["h", "e", "l", "l", "o"]));

const reverseWord = function (str) {
  return str
    .split(" ")
    .map((el) => el.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseWord("Commonlay Asked Javascript"));

//Number Pattern

//Triangle pattern (1)

// let n = 5;
// let string = "";

// for(let i =1; i <= n ; i++) {

//     for(let j = 1 ; j <= i ; j++ ) {

//         string  += j
//     }
//     string += '\n'
// }

// console.log(string)

//Triangle pattern (2)

// let nn = 5;
// let s= ""
// for(let i = 1 ; i <= n ; i++) {
//     for(let j = 1 ; j <= i; j++) {
//         s += i
//     }
//     s += '\n'

// }
// console.log(s)

//Triangle pattern (3)

let n = 4;
let string = "";
let count = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);

//Hoisting

var greeting = function () {
  console.log("Hi");
};
var greeting = function () {
  console.log("Hi");
};

// function greeting () {
//     console.log('Hello')
// }

// function greeting () {
//     console.log('Hi')
// }

greeting();
greeting();

function findSecondLargest(arr) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
// Example usage:
const array = [5, 2, 10, -8, 3];
const secondLargest = findSecondLargest(array);
console.log("Second largest element:", secondLargest);

const findLargest = function (arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
};

console.log(findLargest([5, 2, 10, 8, 3]));
