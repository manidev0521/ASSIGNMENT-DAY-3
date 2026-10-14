const stustudents = [
  {
    name: "Maniiii", 
    age: 25,
    major: "Computer Science"
  },
  {
    name: "muthuraj",
    age: 20,
    major: "Mathematics"
  },
  {
    name:"Kaliraj",
    age: 22,
    major: "Engineering"
 }
];  
stustudents.filter(student => student.age > 21)
.map(student => student.name)
.join("| ");
stustudents.push({ name: "moorthy", age: 21, major: "computer science" }, { name: "saravanan", age: 23, major: "Chemistry" });
stustudents.pop();
stustudents.shift();
stustudents.unshift({ name: "perumal", age: 21, major: "Physics" });
stustudents.splice(0, 1, { name: "Madhavan", age: 24, major: "Biology" });
console.log(stustudents.filter(student => student.age > 21).map(student => student.name)
.join("| "));  
 
const students = { name: "Maniiii", age: 25, major: "Computer Science", greet() { return `Hello, my name is ${this.name}`; } };
console.log(students.greet());
students.age = 26;
console.log(students.age);
students.major = "Mathematics";
console.log(students.major);
students.updateMajor = function(newMajor) { this.major = newMajor; };
students.updateMajor("Physics");
console.log(students.major);
students.deleteMajor = function() { delete this.major; };
students.deleteMajor();
console.log(students.major);
students.addcity = function() { this.city ; };
students.addcity("chennai");
console.log(students.chennai);


const prices = [120, 60, 899];
const total = prices.reduce((sum, price) => sum + price, );
console.log(total); 

const students = [
  { name: "Maniiii", age: 25, major: "Computer Science" },
  { name: "muthuraj", age: 20, major: "Mathematics" },
  { name: "Kaliraj", age: 22, major: "Engineering" }
];

const totalAge=students.find(student => student.age > 21).age;
console.log(totalAge);

function makeGreeter(greeting) {
  return function (name) {
    return greeting + " " + name;
  };
}
console.log(makeGreeter("Hello")("kalimuthu"));

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();