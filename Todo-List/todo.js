let addlist= document.getElementById('task');
let todolist = document.getElementById('todo-list')
let inputfield = document.getElementById('input-box')

addlist.addEventListener('click',function(){
    var paragraph  = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputfield.value;
    todolist.appendChild(paragraph); 
})
