'use strict';
let count  = 0;

for(count;count<4;count++){
    for(count;count<4;count++)
    {}
}

console.log(count +1)


// var promise = new Promise((resolve,reject) => {
// 	resolve('Geeks For Geeks');
// })

// promise
// 	.then((successMessage) => {
// 	//success handler function is invoked
// 		console.log(successMessage);
// 	}, (errorMessage)=> {
// 		console.log(errorMessage);
// 	})


    // const first = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 50, 'first')
    //   })
    //   const second = new Promise((resolve, reject) => {
    //     setTimeout(resolve, 100, 'second')
    //   })
      
    //   Promise.race([first, second]).then(result => {
    //     console.log(result) // second
    //   })
      
// function first() {
//     var name = 'nigar';

//     function second(){
//         console.log(name);
//     }

//      second();
// }

// first()
//+++++++++++++++++++++++++++++++++++++++++++++++

// prototype

// function a(name){
//     this.name = name
// }
// console.log(a.prototype)

// var b = new a('JS');
// console.log(b)

// function Person(name, job, yearOfBirth){   
//     this.name= name;
//     this.job= job;
//     this.yearOfBirth= yearOfBirth;
// }
// // this will show Person's prototype property.
// console.log(Person.prototype);

// Person.prototype.calculateAge= function(){
//     console.log('The current age is: '+(2022- this.yearOfBirth));
// }


// console.log(Person.prototype);


// let Person1= new Person('Jenni', 'clerk', 1997); 
// console.log(Person1)
// Person1.calculateAge()












//++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Call apply bind

const luftansa = {
    airline: 'Loftansa',
    iataCode: 'LH',
    bookings : [],

    book: function (flightNum,name) {
        console.log(this)
        console.log(`${flightNum} ${name} ${this.airline} ${this.iataCode}`)
        //this.bookings.push({ flight: `${this.iataCode} ${flightNum}`,name})

    }
    
}

luftansa.book(201 , 'Nigar');

console.log(luftansa)

const eurowins = {
    airline: 'Eurowins',
    iataCode : 'EW',
    bookings:[],

}


const book = luftansa.book;
console.log(book)

// book(301,'As');  // normal function call

book.call(eurowins, 111 , 'NS')
console.log(eurowins);

book.call(luftansa, 112 , 'NiS')
console.log(eurowins);

const dat = [121 , 'AC']
book.apply(eurowins, dat)

const bookEW = book.bind(eurowins);
bookEW(131 , 'AN')
console.log(bookEW)