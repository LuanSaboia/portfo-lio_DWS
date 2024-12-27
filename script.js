const toggleButtons = document.querySelectorAll('.btn-details');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.previousElementSibling;
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            button.textContent = '...ver menos';
        } else {
            details.style.display = 'none';
            button.textContent = '...ver mais';
        }
    });
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio real do formulário

    alert('Obrigado por entrar em contato! Responderei em breve.');
    form.reset(); // Limpa os campos do formulário
});

// Inicialização do EmailJS com a Public Key
emailjs.init("duZfPJZEZvIGRc38z"); // Substitua pela sua Public Key

// Evento de envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Envio do formulário usando `sendForm`
    emailjs.sendForm("service_fs3hsgq", "template_skz77dj", this)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset(); // Limpa os campos
        }, (error) => {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.error("Erro:", error);
        });
});
