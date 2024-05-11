// var promise = new Promise((resolve, reject) => {

//     console.log("pending")
//     var a = true;
//     // fetch('')
//     if (a) {
//         resolve(a)
//     } else {
//          reject()
//     }
// })


// .then((ab) => console.log(ab))
// .finally(() => console.log('finally get execute'))
// .catch(() => console.log('error'))



// function myFunc() {console.log('10')}
// console.log(myFunc)
// const data = myFunc();
// console.log('data', data);


// var obj = Object.keys({a: 10});
// console.log(obj)
// var obj2 = Object.values({a: 10});
// console.log(obj2)

// var array = Object.keys([10])
// console.log(array)

// var arr2 = Object.values([10])
// console.log(arr2)



// 
//check color is present in array 
// if present remove array
// if not add into array

// const colors = ['pink','red','blue','black'];

// if(colors.includes('red')){

//     colors.pop();
//     colors.splice()
//     console.log(colors)
// }
// else {
//     colors.push();
//     console.log(colors)
// }

// const arr1  = [1,2,3];

// const reducer = (previousValue, currentValue) => (previousValue + currentValue);

// console.log(arr1.reduce(reducer));

// Array.prototype.reduce1 = function(){
//     reduce(function(previousValue,currentValue){
//         return previousValue + currentValue
//     }, intialValue)


//     //reduce1 = (previousValue , currentValue) => previousValue + currentValue;
// }

// let a = true;

// setTimeout(() => {
//     a =false;
// },2000)

// while(a){
//     console.log('Hello')                  // infinite hello and agter 2 sec it stop
// }


// const  p = new Promise((res) => res("1"))
// p.then(res => console.log(res))
// .then(() => console.log("2"))
// .then(() => console.log("3"))
// .finally(() => console.log("4"))
// .then(() => console.log("5"))   // 1 2 3 4 5


// const value = {number : 10};

// const multiply = ( x = {...value}) => {
//   console.log((x.number *= 2))
// }

// multiply()
// multiply(value)                           // 20


// print longest non repeating substting

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
    
//     arr.forEach((el) => {
//      if (!arr2.includes(el)) {
//         arr2.push(el);
//        }
//      });
//      return arr2.join("").replace(",", " ").replace("", " ");
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




// function abc(){
//     console.log(a,b,c)
//     const b = 40;
//     let c = 20;
//     var a = 10;
// }

// abc()

// implicit and explicit binding
// const obj = {
//     name: "Nigar",
//     display: () => {
//         console.log(this)
//     }
// }

// const obj2 = {
//     name: 'NS'
// }

// obj.display();

// obj.display.call(obj2)


// Count substrings with same first and last characters

// Space efficient javascript program to count all
// substrings with same first and last characters.
// function countSubstringWithEqualEnds(s)
// {
//     var result = 0;
//     var n = s.length;
  
//     // Iterating through all substrings in
//     // way so that we can find first and last
//     // character easily
//     for(i = 0; i < n; i++)
//         for(j = i; j < n; j++)
//             if (s.charAt(i) == s.charAt(j))
//                 result++;
  
//     return result;
// }
  
// // Driver code
// var s = "abcab";
// console.log(countSubstringWithEqualEnds(s));
 


// const arr=[2,2,3,4,6]
// const arr2 = []


// for(let i = 0;i<arr.length;i++){
  
//     if(!arr2.includes(arr[i])) {
//       arr.pop()
//       //console.log(arr2)
//     }
//     console.log(arr2)    
//   }
// //   console.log(arr2)    


