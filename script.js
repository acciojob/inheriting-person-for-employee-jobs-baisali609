// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;

	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
	}
}

function Employee extends Person {
	constructor(name, age, jobTitle){
		super(name,age);
		this.jobtitle = jobTitle;
	}

	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}

const Person = new Person("Alice", 25);
Person.greet;
const Employee = new Employee("Alice", 25, "Manager");
Employee.jobGreet;

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
