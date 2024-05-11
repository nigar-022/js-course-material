 // Swap Nodes in Pairs


//  function ListNode(val, next) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//  }


//   var swapPairs = function(head) {
    
//      let dummy = new ListNode();
//      dummy = head;
    
//      v1 = dummy, v2 = dummy.next, v3 = v2?.next;
//     if(!head || !head.next) return head;
  
//     v2.next = v1;
//     v1.next = swapPairs(v3);
//     return v2;
// };
// console.log(swapPairs([1,2,3,4]))


// Pascal Triangle

// var generate = function(numRows){
//     let pascalTriangle = new Array(numRows);

//     for(let i=0;i<numRows;i++){
//         let row = new Array(i+1);
//         row[0] =1;
//         row[row.length - 1] = 1;

//         for(let j=1;j<row.length-1;j++){
//             let rowAbove = pascalTriangle[i-1];
//             row[j] = rowAbove[j] + rowAbove[j-1];
//         }
//         pascalTriangle[i] = row;

//     }
//     return Array.from(pascalTriangle)
// }

// const data = generate(3);
// console.log(data)

// pascal triangle 

//________________________________________________________________________________________-

// fibonacci series

const fib = function(n){

    if(n <=2 ) return 1
    return fib(n-1) + fib(n-2)

}

console.log(fib(7))

//______________________________________________

// // fibonacci series memomization

// key is arg to function i.e. n abd value is return value

const fibo = function(n,memo={}){
    if(n in memo) return memo[n];

    if(n <=2 ) return 1
    memo[n] = fib(n-1,memo) + fib(n-2,memo)
    return memo[n]

}

console.log(fibo(7))



