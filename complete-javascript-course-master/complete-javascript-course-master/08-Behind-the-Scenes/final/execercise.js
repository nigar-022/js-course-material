'use strict'

console.log(this)

const calcAge = function () {
    console.log(this);
};
calcAge();

const calAgeArrow = birthYear => {
    console.log(this)
    console.log(2023 - birthYear);
   
}
const res = calAgeArrow(1997);
console.log(res)

const nigar = {
    year: 1997,
    calAge: function(){
            console.log(this)
            console.log(2023 - 1997)
    }
}

nigar.calAge()


document.querySelector('.btn').addEventListener('click', function(){
    console.log(this)
})

setTimeout(() => {
    console.log(this)
},1000)

