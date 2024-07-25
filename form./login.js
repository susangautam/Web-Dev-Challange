document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
         resetFormErrors();
    if (!emailInput.value.trim()) {
          handleValidation(emailInput, 'Email can\'t be blank');
          return;
        }
        if (!passwordInput.value.trim()) {
          handleValidation(passwordInput, 'Password can\'t be blank');
              return;
        }
        alert('Form submitted successfully!');
        form.reset();
      });
      function handleValidation(input, errorMessage) {
        const field = input.closest('.field');
        const errorIcon = field.querySelector('.error-icon');
        const errorText = field.querySelector('.error-txt');
            field.classList.add('shake');
        input.classList.add('error');
         errorIcon.style.display = 'block';
         errorText.style.display = 'block';
         errorText.textContent = errorMessage;
      }
      emailInput.addEventListener('focus', function() {
        resetValidation(emailInput);
      });
      passwordInput.addEventListener('focus', function() {
        resetValidation(passwordInput);
      });
      function resetValidation(input) {
        const field = input.closest('.field');
        const errorIcon = field.querySelector('.error-icon');
        const errorText = field.querySelector('.error-txt');    
         field.classList.remove('shake');
         input.classList.remove('error');
         errorIcon.style.display = 'none';
         errorText.style.display = 'none';
      }
    });
