console.log(window);
console.log(document.body);
document.body.style.background="skyblue"
// alert("Enter again")
//location.href="https://www.linkedin.com/in/susan-gautam-20502b311/" this redirects into the given link

let myid=document.getElementById("myid"); //this allows developers to access a specific element on a webpage
   myid.innerHTML="This is the modified text"

let elements = document.getElementsByClassName("class"); //this allows developers to access multiple elements on a webpage by their class name
    for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "This is the modified text in div";
        }

let box = document.getElementsByName("myname");//it is used to change the value by using name attribute
    for (let j = 0; j < box.length; j++) {
    box[j].value = "This is my new value";
        }
let paragraph = document.getElementsByTagName("p");//it is used to access the <p> elements on the webpage and modify them
        for (let k = 0; k < paragraph.length; k++) {
            paragraph[k].innerHTML = "this is a new paragraph";
        }

let inner = document.getElementById("inner");//it is used to access the content of <div> element and change its text
            inner.innerHTML = "<p>This is modified inner html</p>";

let outer = document.getElementById("outer");//it is used to access the content of <div> element and change its content
        outer.outerHTML = "<div><p>This is modified outer text</p></div>";

