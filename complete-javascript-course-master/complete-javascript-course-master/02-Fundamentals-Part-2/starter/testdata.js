//let arr = [a, b, c, b, a, a, d, c];
// const arr = ['a', 'b', 'c', 'b', 'a', 'a', 'd', 'c'];
const arr = [11,22,33,44,11,22,33,66]

const count= [];

for(const n of arr){        
    count[n] =   count[n] ? count[n] +1 : 1;
}

console.log(count);

function countOfString(string) {
    return string.split("").reduce((accumlator, currentValue) => {
       
      let currentCount = accumlator[currentValue] !== undefined ? accumlator[currentValue] : 0;

      if (currentCount) { 
        currentCount = currentCount + 1; // If previously counted + 1
      } else {
        currentCount = 1; // Else initialize with first occurence.
      }
      
      accumlator[currentValue] = currentCount;
      return accumlator;
    }, {});
  }
  
  console.log(countOfString("Hello there"));
  

// function countOccurences(string, word) {
//     return string.split(word).length - 1;
//  }
//   var data = countOccurences("thequickbrownfoxjumpsoverthelazydog","t");
//   console.log(data);



// const lufthansa = {
//     airline: 'airoplane',
//     icataCode: 'A23',

//     book: function(flightNum,name){
//         console.log(`${name} booked ${this.airline} ${flightNum}`)
//     }
// }
// lufthansa.book(213,'Sarah Williaams')
// console.log(lufthansa)

// const eurowings = {
//     airline: 'euwo',
//     icataCode: 'FG12'
// }

// lufthansa.book.call(eurowings,314,'John Williams')
// console.log(eurowings)
// lufthansa.book.apply(eurowings,[314,'John Williams'])
// console.log(eurowings)

// const flightData = [567,'Swiss']
// lufthansa.book.apply(eurowings,flightData)

// var display = (x , y=2) => {  
//     console.log(x + y);  
// }  
// display(1,5);  


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const lufthansa = {
//   airline: 'Lufthansa',
//   iatacode: 'LH',


//   book: function(flightNum,name) {
//     console.log(this)
//     console.log(`${name} booked seat  on ${this.airline} flight 
//     ${this.iatacode} ${flightNum}`)
//   }
// }

// lufthansa.book(121,'Jonas')

// const eurowins = {
//   airline: 'eurowins',
//   iatacode: 'EW'
// }


// const book = lufthansa.book;
// console.log(book)

// // book(232,'Seth')

// book.call(eurowins,233,'Seth')
// console.log(eurowins)

// const bookArr = [565,'NS']
// book.apply(eurowins,bookArr)

// const bookEw = book.bind(eurowins)
// bookEw(34,'K')