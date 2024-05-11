// for loop let and var set timeout => 


// for(var i =0 ; i<= 5 ; i++)
// {
//     console.log(i)
// }

// for(let i =0 ; i<= 5 ; i++)
// {
//     console.log(i)
// }

for(let i =0 ; i< 5 ; i++)
{
    setTimeout(() => console.log(i))
}

for(var i =0 ; i< 5 ; i++)
{
    setTimeout(() => console.log(i))
}


// immediately invoke function

(function(){
    console.log('hi')
})();