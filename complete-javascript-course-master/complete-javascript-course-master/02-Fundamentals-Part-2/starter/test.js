// const result ="rxx=1xkasqt9aka.1nekmbr1&v=1; GUCS=AUxHjsOA; BX=89bjrhten2bip&b=3&s=20; GUC=AQEBAQFdcnReRUIgDQTM&s=AQAAAFvErWag&g=XXEuZA; firstview=1567698522; breaking-news=3"

// const r = result.split(';');

// console.log(r.indexOf('BX'))

// const keyss = Object.keys(r);
// console.log(keyss)


// const arr = [1,2,3,4,5];

// const result = arr.reduce((previousValue,curretValue) => (previousValue + curretValue),1);

// console.log(result)

// const Nigar = {

// }

// const xyz = {

// }
// .call(xyz,7,6);

// .apply(xyz, [7,6])

// const b = bind(xyz)
// b(7,6)



// function first(){
//     var name = 'Nigar';


//     function second(){
//         console.log(name)
//     }

//     second()
// }

// first()


// function addNumbers(n1, n2, n3) {
//     return n1 + n2 + n3;
// }
    
// function addNumbers(n1, n2) {
//     return n1 + n2;
// }
    
// var sum = addNumbers(1, 2, 3);
// console.log(sum)


(function(){
    var a = b =  42;

   })();
   console.log(typeof a);
   console.log(typeof b);


   (function(){
    let a = b = 42;
   })();
   console.log(typeof a);
   console.log(typeof b);



//    1 - '1' * 2  // -1

//    const [x,y] = '1234';
//    console.log(x,y)



// let a = true;


// setTimeout(() => {
//     clearInterval(id)
//     // a = false;
//     // console.log(a)
// },5000)

// console.log(a)

// while (a){
//     console.log('hello')
// }

// let id = setInterval(() => {
    
//     console.log('hello');
    
// }, 200)



// const students = [
//     { name: "Alex", grade: 15 },
//     { name: "Devlin", grade: 15 },
//     { name: "Eagle", grade: 13 },
//     { name: "Sam", grade: 14 },
//     ];


   // sort array of Object;


   const array1 = [1, 30, 4, 21, 100000];
//    console.log(array1.sort());

array1.sort(function(a,b){
    return a -b;
})

console.log(array1)

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });

  console.log(items)
  
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(items)