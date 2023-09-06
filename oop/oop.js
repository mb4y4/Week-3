class Person {
    constructor(name, age, isStudent) {
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
}

const Person1 = new Person('John', 25, true);
const Person2 = new Person('Mary', 27, false);


console.log(Person1.name);
console.log(Person2.isStudent);


Person.prototype.greetings = function(){
    console.log(`Hello! My name ${this.name}, I am ${this.age} years old.`);
}

Person2.greetings()

//encapsulation
class Counter { 
    constructor() {
    let count =0 ;
    this.increment = function() {
        count++;
    };
    this.getCount = function() {
        return `The current value of the counter: ${count}`;
    };
    };

}

const counter = new Counter();
counter.increment();
let result= counter.getCount();

console.log (result);
//console.log(counter.getCount());

//inheritance from Ezekiel's folder
