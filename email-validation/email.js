function check() {
    const emailInput = document.getElementById('email');
    const errorText = document.querySelector('.error-text');
    const icon1 = document.querySelector('.icon1');
    const icon2 = document.querySelector('.icon2');
    const submitButton = document.querySelector('form button');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(emailInput.value)) {
        icon1.style.display = 'none';
        icon2.style.display = 'block';
        errorText.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        icon1.style.display = 'block';
        icon2.style.display = 'none';
        errorText.style.display = 'block';
        submitButton.style.display = 'none';
    }
}
