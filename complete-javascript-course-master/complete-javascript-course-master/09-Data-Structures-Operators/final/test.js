const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    orderPasta: function(ing1,ing2) {
        console.log(`Here is pasta with ${ing1} and ${ing2}`)
    }
}  

const ingrediants = ['Sauce', 'Garlic Bread'];

restaurant.orderPasta(...ingrediants)

const newArr = [...restaurant.mainMenu,'Nigar']
console.log(newArr)


const mainMenuCopy = [...restaurant.mainMenu]

console.log([...restaurant.starterMenu,...restaurant.mainMenu])


let originalArray = [7,8,9,4,5];


copyArray = [...originalArray, ...[3,4]]
console.log('Orginal',originalArray)
console.log('Copy',copyArray)

copyArray[3] = 100;
console.log('Orginal',originalArray)
console.log('Copy',copyArray)


const newResto = {foundedIn: '1990', ...restaurant, founder: 'Hdhdhhd'};
console.log(newResto)

const restoCopy = {...restaurant}
restoCopy.name = '1232hjhkjrh';
console.log(restaurant.name);
console.log(restoCopy.name)




 const [pizza,,GB,...otherFood] =[...restaurant.mainMenu, ...restaurant.starterMenu];
 console.log(pizza,GB,otherFood)




 const add = function(...numbers){
    console.log(numbers)

 }

 add(1,2)
 add(357,4,6,3,2)