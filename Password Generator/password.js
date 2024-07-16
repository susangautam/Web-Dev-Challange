function generatePassword() {
    var length = document.getElementById("length").value;
    var charset = ""; 
 
    if (document.getElementById("uppercase").checked) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("numbers").checked) {
        charset += "0123456789";
    }
    if (document.getElementById("symbols").checked) {
        charset += "!@#$%^&*()-=_+[]{}|;:,.<>?";
    }
    if (charset === "") {
        alert("Select at least one character type.");
        return;
    }

    var password = "";
            for (var i = 0; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * charset.length);
                password += charset[randomIndex];
            }

    document.getElementById("password").value = password;
        }
        document.getElementById("generate").addEventListener("click", generatePassword);
