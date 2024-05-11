const foodPrrocessor = function (apple,orange){
    return `I have ${apple} apples and ${orange} oranges`

}

console.log(foodPrrocessor(5,0))


const foodP = (a,o) => `I have ${a} and ${o}`;

console.log(foodP(10,10))

const calAge = birthY => 2023 - birthY;

const yearOfRetire = (birthYear, name) => {
    const age = calAge(birthYear);
    const retire = 65 - age;

    if(retire > 0) {
        console.log(`${name} retire in ${retire} years`)
        return retire
    } else {
        console.log(`${name} has already retired`)
        return -1
    }

}

console.log(yearOfRetire(1991,'Jonas'))
console.log(yearOfRetire(1950, 'Mike'));

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }

  const years = [1990, 1967, 2002, 2010, 2018];

  for(let i = 0 ; i <= years.length - 1 ; i++) {
    console.log(calcAge(years[i]))
  }

  
//   const age1 = calcAge(years[0]);
//   const age2 = calcAge(years[1]);
//   const age3 = calcAge(years[years.length - 1]);
//   console.log(age1, age2, age3);


const Nigar = {
    firstname: 'Nigar',
    lastname: 'Shaikh',
    job: 'IT',
    friends : ['A',"n","s"],
    calAge: function(){
        return 2023-1997
    }
}

console.log(Nigar.calAge())

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}