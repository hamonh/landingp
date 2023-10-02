// script.js

document.querySelector('form').addEventListener('submit', function (e) {
    const emailInput = document.querySelector('#email');

    if (!isValidEmail(emailInput.value)) {
        e.preventDefault();
        alert('Por favor, insira um email válido.');
    }
});

function isValidEmail(email) {
    // Implemente sua validação de email aqui
    // Retorna true se o email for válido, caso contrário, retorna false
}
