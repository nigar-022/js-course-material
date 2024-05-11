let name = [];

let courses = ["HTML", "CSSS", "JS", "React"];

let names2 = new Array();

let courses2 = new Array("HTML", "CSSS", "JS", "React");

console.log(courses[1]);
console.log(courses[courses.length - 1]);

courses[2] = "Full stack";
console.log(courses);

courses.push("NodeJS");
console.log(courses);

courses.unshift("Typescript");
console.log(courses);

courses.pop();
console.log(courses);

courses.shift();
console.log(courses);

courses.splice(1, 2);
console.log(courses);

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

courses.forEach((el) => console.log(el));

console.log("concatenate", ...courses, ...courses2);
console.log(courses.toString());
