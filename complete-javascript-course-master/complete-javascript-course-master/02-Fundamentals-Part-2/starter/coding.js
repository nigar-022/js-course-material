// const arr = [1,2,3]

// console.log(arr.length)

// arr.length = 5;

// console.log(arr.length)

// arr.forEach(i => console.log(i))

// 2. Replacing elements of array

// const arr = [1,2,3,4,5]
// arr.splice(1,1,10)
// console.log(arr)

// const arr = [1,2,3,4,5]
//const result = arr.map(i => i % 2 == 0 ? i : i*2)
//const result = arr.filter(el => el >= 2)

// const isBigNumber = function (number) {
//   return number > 2
// }

// const isBigNumber = (number) => {
//   return number > 2
// }
// const result = arr.filter(isBigNumber)
// console.log(result)


// // prime numbers

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const isPrime = function (num) {

//   for(let i =2 ; num > i; i++){
//     if(num % 2 == 0){
//       return false
//     }
//   }
//   return num > 1
// }
// console.log(array.filter(isPrime))


// merging array
// const a = [1,2,3]
// const b = [4,5,6]

// const result = [...a,...b]
// console.log(result)


// const a = {
//   en: 'Hello',
//   de: 'Hola',
//   es: 'ola',

//   foods: {
//     starter: 'Pasta',
//     dinner: 'Chicken'

//   }

// }
// let b = {...a}

// b.foods.dinner = 'Mutton'
// console.log(b,a)

// const a = [1,2,3]
// let b = a.slice(0)



// const x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double";
// const splitedArray = x.split(",");
// const reverseStrings = [...new Set(splitedArray)]
//console.log(splitedArray.filter((item,index) => splitedArray.indexOf(item)==index))
// console.log(reverseStrings)

// const removeDuplicateString = function(str) {
//     const splitedString = str.split(",");
//     return [...new Set(splitedString)]
// } 

// console.log(removeDuplicateString("Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"))


// const a = [1, 1, 2, 3, 1, 5, 9, 4, 2];
// const b = [...new Set(a)]
//const c = a.filter((item,index) => a.indexOf(item) == index)
// console.log(a.reduce((unique,item) => {
//     return unique.includes(item) ? unique : [...unique,item]
// }, []))


// const reverseString = function(str){
//     return str.split("").reverse().join("")
// }

// console.log(reverseString("hello"))
// //console.log(result)

// const array1 = [1,2,3,4,5]
// const sum  = array1.reduce((previousValue,currenValue) => previousValue + currenValue, 1);
// console.log(sum)


// reverse each word in string

// const reverseString = function(str){

//     // SPlit string into seperate words then split and reverse each word individually and join.
//     return str.split(" ").map(s => s.split("").reverse().join("")).join(" ");
// }

// console.log(reverseString("Reverse each word in the sentence!"))


// let k = 1

// if(1){
//     function foo (){}
//     k += typeof foo
// }

// console.log(k)   // '1function'


// function handleClick(options ) {
//      options = options || {}
// }

// console.log(handleClick())


// function handleClick1(options = {}) {
//     // no code 
// }

// console.log(handleClick1())

// // Set only store unique values
// const array = [1,1,2,2,3,5,4]
// console.log([...new Set(array)])

