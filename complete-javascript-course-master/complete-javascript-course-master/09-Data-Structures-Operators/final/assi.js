// const arr = [1,2,3,4,5,[8,9]];
// console.log(arr)

// const newArr = Object.assign(arr);
// console.log(newArr);

// newArr[2] = 10;
// console.log(newArr,arr)



// const add = function(...numbers) {
//     console.log(numbers)
// }

// add(2,3);
// add(4,5,6);

// const x = [9,8,7];
// add(...x)

//+++++++++++++++++++protoype++++++++++++++++

function a (name){
    console.log(name);
    this.name = name;
}
console.log(a.prototype)

var b = new a ('JAvascript');
console.log(b.__proto__)

a.prototype.car = "BMW";
console.log(a.prototype.car);
console.log(b.__proto__);

a.prototype.calculateAge = function(){
    console.log('age is', 2022 - 1997);
}
console.log(a.prototype);
console.log(b.__proto__);

