let inputBox = document.querySelector(".input-box"),
        textarea = inputBox.querySelector("textarea"),
        signalNum = inputBox.querySelector(".signal_num");

      textarea.addEventListener("keyup", () => {
        let valLenght = textarea.value.length; 

        signalNum.innerText = valLenght; 
        valLenght > 0 ? inputBox.classList.add("active") : inputBox.classList.remove("active"); 
        valLenght > 40 ? inputBox.classList.add("error") : inputBox.classList.remove("error"); 

        console.log(valLenght);
      });   
