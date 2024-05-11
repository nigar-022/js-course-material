// ES6


// function User (name) {
//     this.name = name;

// }


class User {
    constructor(name){
        this.name = name
    }
}

const jeff = new User('Jeff');
console.log(jeff.name)