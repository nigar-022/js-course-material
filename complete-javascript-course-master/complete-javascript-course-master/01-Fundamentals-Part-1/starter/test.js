
// var arr = [[1,2], [3,4],[4,5]] output - [1,2,3,4,5]
//

var arr1 = [[1,2], [3,4],[4,5]];

var result = [].concat(...arr1)
console.log(result)

console.log(new Set(result))

//++++++++++++++++++++++++++++++++++++++++++++

const a = arr1.reduce((prev,next) => {
    return prev.concat(next)
})

console.log(a)         // 

//+++++++++++++++++++++++

var output = (function(x) {
delete x;
return x;
}
)(0);
console.log(output);                 // 0


//++++++++++++++++++++++++++++++
var X = { foo : 1 }; 
var output = (function() 
{ 
delete X.foo; 
return X.foo; 
} 
)(); 
console.log(output);                // undefined


// ++++++++++++++++++++++++++++++++++

var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(Employee);
delete Emp1.company 
console.log(Emp1.company);
delete Employee.company 
console.log(Employee.company);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var arr1 = [[1,2], [3,4],[4,5]];

const res = [].concat(...arr1)
console.log(new Set(res))


//++++++++++++++++++++++++++++++++++++++++++++++

const promise = new Promise((resolve,reject) => {

    let a = true;

    if (a) {
        resolve()
    } else {
        reject()
    }
})

.then(console.log('Sucess'))
.catch(console.log('failure'))