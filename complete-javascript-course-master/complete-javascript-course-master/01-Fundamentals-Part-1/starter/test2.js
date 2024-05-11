var findDuplicate = (nums) => {
  let sorted_arr = nums.slice().sort();
  let results = [];
  for (let i = 0; i < sorted_arr.length; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};
let duplicatedArray1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(duplicatedArray1));

const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(duplicatedArray);
console.log(
  `The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`
);

var input = [2, 2, 2, 2];

var duplicates = input.reduce(function (acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
  return acc;
}, []);

console.log(duplicates);

var findDuplicate = (nums) => {
  var duplicates = nums.reduce(function (acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc;
  }, []);
  return duplicates;
};

console.log(findDuplicate([2, 2, 2, 2]));
// var lengthOfLongestSubstring = function(s){
//     let count = 0;
//     for(let i= 0; i<s.length; i++){
//         let char = s.charAt(i);
//         let set = new Set([char]);

//         for (let j =i+1 ; j<s.length;j++){
//             let char = s.charAt(j);

//             if(set.has(char)){
//                 break
//             } else {
//                 set.add(char)
//             }

//             count = Math.max(count,set.size);
//         }
//     }
//     return count;
// }

// let result = lengthOfLongestSubstring('abcabcbb');
// console.log(result)

// var lengthOfLongestSubstring = function(s){
//     let count = 0;

//     let i =0;
//     let j =0;
//     let n = s.length;
//     let set = new Set();

//     while(i<n && j< n){
//         let char = s.charAt(j);
//         if(!set.has(char)){
//             set.add(char);
//             j++;
//             count = Math.max(count,j - i);
//         } else {
//              break
//             // set.delete(s.charAt(i));
//             // i++
//         }
//     }
//     return count
// }

// let result = lengthOfLongestSubstring('abcabcbb');
// console.log(result)

// const removeDuplicates = (str) => {
//     const arr = str.split("");
//     const arr2 = [];

//     arr.forEach((el, i) => {
//      if (!arr2.includes(el)) {
//         arr2.push(el);
//        }
//      });
//      return arr2.join("").replace(",", "").replace("", " ");
//     };

//     console.log(removeDuplicates( "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"));

// // var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double";
// //console.log([...new Set(x.split(','))])

// var x = [111,121,111]

// console.log([...new Set(x)])

// function first(){
//     var name = 'Nigar';

//     function second(){
//         console.log(name);
//     }
//     second()
// }

// first();

// function a(name){
//     this.name = name;
// }

// var b = new a('JS');
// console.log(b)

// var promise = new Promise((resolve,reject) => {
//     var a= true
//     if(a){
//         resolve()
//     } else {
//         reject()
//     }
// })

// .then(console.log('Sucess'))
// .catch(console.log('error'))

// list

// abc         xyz
// xyz         abc
// sdf

// var arr = [[1,2], [3,4],[4,5]] output - [1,2,3,4,5]
//

// var arr1 = [[1,2], [3,4],[4,5]];

// var result = [].concat(...arr1)
// console.log(result)

// console.log(new Set(result))

// //++++++++++++++++++++++++++++++++++++++++++++

// const a = arr1.reduce((prev,next) => {
//     return prev.concat(next)
// })

// console.log(a)         //

//+++++++++++++++++++++++

// var output = (function(x) {
// delete x;
// return x;
// }
// )(0);
// console.log(output);                 // 0

// //++++++++++++++++++++++++++++++
// var X = { foo : 1 };
// var output = (function()
// {
// delete X.foo;
// return X.foo;
// }
// )();
// console.log(output);                // undefined

// // ++++++++++++++++++++++++++++++++++

// var Employee =
// {
// company: 'xyz'
// }
// var Emp1 = Object.create(Employee);
// delete Emp1.company
// console.log(Emp1.company);
// delete Employee.company
// console.log(Employee.company);

// ES6

// function User (name) {
//     this.name = name;

// }

// class User {
//     constructor(name){
//         this.name = name
//     }
// }

// const jeff = new User('Jeff');
// console.log(jeff.name)
