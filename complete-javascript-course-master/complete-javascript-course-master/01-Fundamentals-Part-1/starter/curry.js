const add  = function(num1,num2){
    return num1 + num2
}

console.log(add(2,3))

const data = [1,2,3,4,5]

const res = data.reduce((prev,curr) => prev + curr,10)
console.log(res)




// sum (2) (3) ()

// function sum(x) {
//     return function(y) {

//         return function() {
//             return x + y
//         }
        
//     }
// }

//arrow function

const sum2 = x => y => () =>x + y
console.log(sum2(2)(3)())

// const firstData = sum(2);
// const secondData = firstData(3)
// console.log(secondData)

// const result = sum(2)(3)();
// console.log(result)


function sumInfi(a) {   // 5  => 9
    return function(b){  //4  => 5
        if(b) return sumInfi(a + b)   //first a is 2 and b is 5=3 => 5 + 4 =9 => 9+5 = 14

        return a
    }
}

// arrow function

const sum3 = a => b =>  b ? sum3(a+b) : a ;
console.log(sum3(1)(2)())

console.log(sumInfi(2)(3)(4)(5)())


//Find the sum of sum(2)(3)..n and sum(2,3)

function sum4 (a,b){
    return arguments.length === 2 ? a + b : (b) => a+b
}
console.log(sum4(5)(5))
console.log(sum4(5,5))


function sum(...args) {
    function add(...args2) {
      return sum(...args, ...args2);
    }
  
    const t = [...args].reduce((acc, curr) => acc + curr, 0);
    add.value = t;
  
    return add;
  }
  
  //const result1 = sum(2, 3).value;
 //const result2 = sum(2)(3).value;
//const result3 = sum(2, 3)(4).value;
//   const result4 = sum(2, 3)(4, 5).value;
const result5 = sum(2, 3)(4, 5)(6).value;
 
console.log(result5)
  
//   console.log({ result1, result2, result3, result4, result5 });


