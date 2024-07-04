//strings
"Hello world"
var str="Hello world";
console.log(str.length);//this represents number of characters in the string

var str1="Hello";
var str2="World";
console.log(str1.concat(str2));//concat is used to combine two or more strings

console.log(str1.indexOf("o"));//indexof is used to find the index of specific character

console.log(str.slice(6));//slice is used to extract a portion of a string

console.log(str.replace("world","nepal"));//replace is used to replace specific character or a substring in a string

console.log(str.toUpperCase());//it is used to make the string uppercase

console.log(str.toLowerCase());//it is used to make the string lowercase

//arrays
var myarray=[1,"Hello",[2,3]];
console.log(myarray.length);//length is used to return the number of elements in the array

myarray.push("world")//push is used to add an element at the end of the array
console.log(myarray);

myarray.shift();//this is used to remove the first object of the array
console.log(myarray);

myarray.unshift(0);//this is used to add an element at the beginning of the array
console.log(myarray);

console.log(myarray.slice(1,2));// this method is used to extract a portion of the array

myarray.splice(1,1,"Hello world",[4,5]);
console.log(myarray);//this method is used to add or remove elements from the array

//LOOPS IN ARRAY

//for loop : it is the most basic way to iterate through an array
var number=[1,2,3,4,5];
for (var i=0;i<number.length;i++){
    console.log(number[i]);
}

//for each:
var numbers=[1,2,3,4,5];
numbers.forEach(function(number){
    console.log(number);
});

//map,filter and reduce

var num = [1, 2, 3, 4, 5];
var multiply = num.map(function(num) { //this method is used to create a new array with the result of a callback function
    return 2 * 2;
});
console.log(multiply);

var array = [1, 2, 3, 4, 5];
var even = array.filter(function(array) { //this method uses callback function as arguement
    return array % 2 === 0;
});
console.log(even);

var no = [1, 2, 3, 4, 5];
var add = no.reduce(function(abc, def) { // this method takes two arguements as the accumulator (abc) and current arguement (def)
}, 0);
console.log(add);

//date
var currentdate= new Date(); //this method is used to give current date of the system to the webpage
console.log(currentdate); 

var date = new Date(); 
date.setDate(12); //this method is used to set a new custom date by giving values
 
date.setFullYear(2024); //this method is used to set a new custom year by giving values

console.log(date);

var date = new Date();
console.log(date.toLocaleString());//this method is used to specify the format and timezone of date and time
console.log(date.toLocaleString('en-US', {timeZone: 'UTC'}));

//math
console.log(Math.random());//it is used to output a random number between 0 and 1

console.log(Math.floor(1.9));//it is used to round up the number down to the nearest integer

console.log(Math.ceil(2.7));//it is used to round up the number to the nearest integer

console.log(Math.max(1,8,2,9)); //it is used to find the maximum value of the given numbers

console.log(Math.min(5,7,2,3));//it is used to find the manimum value of the given numbers

console.log(Math.PI);//this gives the value of pi

//Number
console.log(Number("3.14"));//it is used to convert a value to a number

console.log(Number(true));//gives value 1 for true and 0 for false

console.log(parseFloat("2.76"));// it is used to convert strings into floating point numbers

console.log((Math.PI).toFixed(2));//tofixed is used to format a number based on specific number of decimal points

//BOOLEAN
var istrue = Boolean(1);//it is usde to give true false values and perform logical operations
console.log(true); 
var isfalse = Boolean(0);
console.log(false);

var x=true;
var y=false;
console.log(!x); // "!" operator is used to invert the boolean value
console.log(!y); 

var z = new Boolean(true);
console.log(z.valueOf()); //this returns the primitive value of boolean object






