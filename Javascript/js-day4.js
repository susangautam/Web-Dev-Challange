//Encapuslation
function Person(name,age){
    let privateAge=age; //Encapsulation is a fundamental concept in OOPs that refer  to the practise of hiding the internal details of an object
    
    this.name=name;

    this.getAge = function(){
return privateAge;
    }}
let person= new Person("Susan",21 )
console.log(person.privateAge);
console.log(person.name);
console.log(person.getAge());

//Inheritance 
function People(name, age) {
    this.name = name;
    this.age = age;
}
People.prototype.greet = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
}
function Student(name, age, major) {
    People.call(this, name, age);
    this.major = major;
}
Student.prototype = Object.create(People.prototype);
Student.prototype.constructor = Student;
let student = new Student("Susan", 21, "IT"); // Inheritance allows developers to access the existing class from a new class
console.log(student.greet()); 
console.log(student.major); 

//Polymorphism

class Shape{
    constructor(names){
        this.names=names;
    }
    draw(){
        console.log(`Drawing a ${this.name}`);
    }
}
class Circle extends Shape{
    draw(){
        console.log(`Drawing a circle`);
    }
}
class  Square extends Shape{
    draw(){
        console.log(`Drawing a square`);
    }
}
let shape = new Shape("Shape"); //it refers to the ability of different objects to respond to the same method call in different ways
let circle = new Circle();
let square = new Square();

shape.draw;
circle.draw();
square.draw();

// Abstraction 
function Shapes(name) {
    if (this.constructor === Shapes) {
        throw new Error("Cannot instantiate abstract class Shape"); //implementation details of an object and exposing only the essential features to the user
    }
    this.name = name;
    this.draw = function() {
        throw new Error("Cannot call abstract method draw from Shape");
    }
}
function Circles() {
    Shapes.call(this, "Circle"); // Call the superclass constructor
    this.draw = function() {
        console.log("Drawing a Circle");
    }
}
Circles.prototype = Object.create(Shapes.prototype); // Set up inheritance
Circles.prototype.constructor = Circles; // Fix constructor pointer

let circles = new Circles();
circles.draw(); 
