(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    let messageInput = document.querySelector('#message');

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'E-mail is a required field.');
            return false;
        }

        if (value.indexOf('@') === -1 && value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }

    function validateMessage() {
        let value = messageInput.value;

        if (!value) {
            showErrorMessage(messageInput, 'Message is a required field.');
            return false;
        }

        if (value.length < 20 || value.length > 240) {
            showErrorMessage(messageInput, 'Your message must contain 20 to 240 characters.');
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        let isValidMessage = validateMessage();
        return isValidEmail && isValidMessage;
    }

    function showErrorMessage(input, message) {
        let container = input.parentElement; // The .input-wrapper

        // Remove an existing error
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }

        // Now add the error if the message isn’t empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Do not submit to the server
        if (validateForm()) {
            alert('See ya!');
        }
    })
})();