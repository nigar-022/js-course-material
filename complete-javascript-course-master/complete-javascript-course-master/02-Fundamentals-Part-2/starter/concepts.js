// ++++++++++++++Execution context and call stack+++++++++++


// const name = 'Nigar';

// const first = () => {

//     let a =1;
//     const b = second();
//     a = a + b;
//     return a;
// }

// const second = () => {
//     var  c = 2;
//     return c;
// }

// const x = first();
// console.log('x',x)


// ++++++++++++promise ++++++++++++++

console.log('start1')

setTimeout(() => {
    console.log('timeout 1')
}, 0)

setTimeout(() => {
    console.log('timeout 2')
}, 0);

new Promise((resolve,reject) => {
    console.log('promise1');

    if(false){
        resolve('promise resolved')
    }
    else {
        reject('error')
    }
}).then((res) => console.log(res))
.catch((err) => console.log(err))


const promise = new Promise((resolve,reject) => {
    if(true) {
        resolve('resolve')
    } else {
        reject('error')
    }
})
.then((res) => console.log(res))
.catch((error) => console.log(error))


async function x () {
    console.log('start2')
    try{
    const result = await promise;
    console.log(result)
    console.log('end2')

    } catch(error) {
        console.log(error)
    }

}
x()
console.log('end1')



const greet = function(name){
    console.log('Hello', `${name}`)
}

const processInput = function(callback){
    var name = 'Nigar';
    callback(name);
}

processInput(greet);


// document.getElementById('button').addEventListener('click', () => {
//     console.log('item clicked')
// })



const getData = async() => {
    const data = await "Hello World";   
    return data;
}

getData()
.then((data) => console.log(data))
.catch((error) => console.log(error))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//SCOPE

const myName = 'Nigar';
'use strict'
function first() {
    const age = 26;

    if(age <= 30) {
        const decade = 3;
        console.log(decade)
        var milenial =true
        
    console.log(milenial)
    }

    console.log(milenial)
    function second(){
        const job = 'teacher'

        console.log(`${myName} is a ${age}-old ${job} `)
    }
    second()

}


console.log(first())


//Prototype

function Person (name) {
    this.name = name

}

Person.prototype.greet = function( ) {
    console.log(`Hello ${this.name}`)
}


const p1 = new Person('Nigar')
const p2 = new Person('NigarS')
console.log(p1,p2)

p1.greet()
p2.greet()


// hoisting

// console.log(name)
// let name = 'Nigar'