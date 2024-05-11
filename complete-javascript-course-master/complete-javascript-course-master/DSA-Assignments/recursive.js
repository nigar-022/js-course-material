// Recursive
// Factorial

const factorial = function (n) {
    if(n == 1) return 1;
    return n * factorial(n-1);

}

console.log(factorial(4))

// Iterative

const fact = function(n) {
    let result = 1; 

   for(let i = 2; i<= n ; i++) {
        result = result * i;
         
    }
    return result
    
    
}

console.log(fact(5))


// *********************************************
//  1) CLIMBING STAIRS
//******************************************* */
//Recursion

var memo = new Array(45);
const climbStairs = function(n) {
   
    if( n <=2 ) return n;
    if (memo[n]) return memo[n];
    memo[n] = climbStairs(n - 1) + climbStairs(n -2);
    return memo[n]
}

console.log(climbStairs(40))
//  // T.C: O(N)
    // S.C: O(N)

//Iterative
/**
dp[i] represents the total number of different ways to take i steps
So, we want to get dp[n].
dp[n] = dp[n-1] + dp[n-2] because we can either take 1 or 2 steps.

We have two base cases: dp[1] = 1 and dp[2] = 2 because
there is one way to take 1 step and there are two ways to take 2 steps (1 step + 1 step OR 2 step) */

const climbStairsI = function(n){
    const dp = new Array(n);
    dp[1] = 1;
    dp[2] =2;

    for(let i =3;i<=n;i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n]
}
console.log(climbStairsI(4))

 // T.C: O(N)
    // S.C: O(N)

// *********************************************
// Fibonacci Series
//*********************************************/

const fib = function(n){
    if(n < 2) return n

    return fib(n - 1) + fib(n - 2)

}

console.log(fib(4));

//iterative

const fib2  = function(n) {
    let r = [0,1];

    for(let i = 2;i <= n;i++) {
        r[i] = r[i - 1] + r[i - 2]
    }
     return r[n]
}
console.log(fib2(5))



// *********************************************
// MEMOMIZATION
//*********************************************/


const add = (n) => n + 10;
console.log(add(10))


const memoAdd = function() {
    let cache = {};

    return function (n) {
        // let n = args[0];

        if(n in cache) {
            console.log('cached')
            return cache[n]
          
        } else {
            console.log('calculated')
            let result = n + 10;
            cache[n] = result
            return result
        }
    }
    
}

const newAdd = memoAdd()
console.log(newAdd(10))
console.log(newAdd(10))
console.log(newAdd(10,20))


const multiply = (a,b) => a * b;
const addS = (a,b) => a + b;

const memomized = function(fn) {
    var cache = {}
    return function (...args) {
        var argId = args.toString();
        if(cache[argId]){
            console.log('cached')
            return cache[argId]
        } else {
            console.log('calculated')
            var value = fn(...args)
            cache[argId] = value;
            return value;
        }
    }
}


let memomizedMultiply = memomized(multiply);
console.log(memomizedMultiply(2,3))
console.log(memomizedMultiply(2,3))

let memomiazedAdd = memomized(addS);
console.log(memomiazedAdd(2,3))
console.log(memomiazedAdd(2,3))


// *********************************************
// CHUNK ARRAY (SPLIT)
//*********************************************/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;
const chunks = [];

for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
  chunks.push(chunk);
}

console.log(chunks);


const perChunk = 2 // items per chunk    

const inputArray = ['a','b','c','d','e']

const result = inputArray.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

console.log(result); // result: [['a','b'], ['c','d'], ['e']]
