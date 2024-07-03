//naming variables
var x;
var x=10;
let y=20;
const z=10;
console.log(x);
var b=x+y;
console.log(b)

var str1="hello";
var str2="world";
var str3=str1 + "" +str2
console.log(str3)

//objects
let obj={name:"Susan",age:30};
obj.age=31 //the age property of obj has now been changed to 31

//operators
let p=5;
let q=10;
let r=11;
let n=p+q*r;
console.log(n);

//if-else conditions
let k=6;
if (k>5){
    console.log("k is greater than 5");
}
else {
    console.log("K is smaller than 5")
;}
 
//switch case
let m=6;
switch(m){
    case 1:
        console.log("m is 1");
        break;
        case 2:
            console.log("m is 2");
            break;
            case 3:
                console.log("m is 3");
                break;
                default:
                console.log("m is something else")
}

    let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("fruit is an apple");
    break;
  case "banana":
    console.log("fruit is a banana");
    break;
  case "orange":
    console.log("fruit is an orange");
    break;
  default:
    console.log("fruit is something else");
}

//ternary-operators
 let d=10;
 let c=20;
 let max;
 max =(d>c)? d:c;
 console.log(max);

 //for-loop
let person = {
    first : "susan",
    age : 21,
    occupation : "developer"
};

 for (let key in person){
    console.log(key+":"+person[key]);
 }

 let numbers=[1,2,3,4,5];
 for (let number of numbers){
    console.log(numbers);
 }

 //while conditions
 let i=1;
 while (i<=10){
    console.log(i);
    i++;
 }
 let input="";
 while(input !=="yes" && input !=="no"){
    input=prompt("Please enter 'yes' or 'no':"); //prompt is used to keep the loop until the user gives valid input
 }

 //function
 function square(x){
    return x*x;
 }
 let result=square(5);
 console.log(result);