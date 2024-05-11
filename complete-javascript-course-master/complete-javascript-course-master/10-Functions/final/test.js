const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');

    return [first.toUpperCase(), ...others].join(' ');
}


const tranformer = function(str,fn){

    console.log(`Orginal String is: ${str}`)
    console.log(`Transformed Sting is: ${fn(str)}`)
    console.log(`Transformed by : ${fn.name}`)

}

tranformer('Javascript is best', upperFirstWord)



//Callback

const high5 = function() {
    console.log('Hey Hiii....')
}

document.body.addEventListener('click', high5);

const greet = function(greetingMessage) {

    return function(name){
        console.log(`${greetingMessage} ${name}`)
    };
}

console.log(greet('hey'))
const greeterHey = greet('hey');
console.log(greeterHey)
greeterHey('Jonas');

console.log(greet('Hello')('Nigae'))

window.isPrivate  = 29

// IIE

// function runOnce(){
//     console.log('called')

//     var isPrivate = 29;
//     console.log(isPrivate)  // 29
// }
// //console.log(isPrivate)   // 23
// runOnce();

// (function() {
//     console.log('called once')
// })()

// window.isPrivate  = undefined
// const greeting = "Hello world"; 
// (function () {
//     console.log(greeting);
//     var isPrivate = 29;
//     console.log(isPrivate)
// })()
// console.log(isPrivate)  // error
// console.log(greeting);

//Closure


const secureBooking = function(){
    let passengerCount = 0;

    return function(){
        passengerCount++;
        console.log(passengerCount);
    }
}

console.log(secureBooking())
const booker = secureBooking();
console.log(booker)

booker()