const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', function(){
 if(pass_field.type === "password"){
   pass_field.type = "text";
   showBtn.textContent = "HIDE";
   showBtn.style.color = "black";
 }else{
   pass_field.type = "password";
   showBtn.textContent = "SHOW";
   showBtn.style.color = "darkgray";
 }
});
