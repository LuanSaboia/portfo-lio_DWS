// Seleciona todos os botões com a classe 'btn-details'
const toggleButtons = document.querySelectorAll('.btn-details');

// Adiciona um evento de clique a cada botão
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const details = button.previousElementSibling; // Pega o elemento anterior
        
        // Alterna a visibilidade do conteúdo
        if (details.style.display === 'none' || details.style.display === '') {
            details.style.display = 'block';
            button.textContent = '...ver menos'; // Muda o texto do botão
        } else {
            details.style.display = 'none';
            button.textContent = '...ver mais';
        }
    });
});

// Seleciona todos os links da navbar
const navLinks = document.querySelectorAll(".navbar a");

// Adiciona o evento de clique em cada link
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        // Remove a classe 'active' de todos os links
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Adiciona a classe 'active' ao link clicado
        this.classList.add("active");
    });
});

// Seleciona o formulário pela classe
const form = document.querySelector('.contact-form');

// Ao enviar o formulário, exibe uma mensagem de agradecimento e reseta os campos
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    alert('Obrigado por entrar em contato! Responderei em breve.');
    form.reset(); // Limpa os campos do formulário
});

// Inicializa o EmailJS com o user ID
emailjs.init("duZfPJZEZvIGRc38z");

// Adiciona um listener ao formulário com ID contact-form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Envia o formulário usando o serviço e template do EmailJS
    emailjs.sendForm("service_fs3hsgq", "template_skz77dj", this)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset(); // Limpa o formulário
        }, (error) => {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.error("Erro:", error); // Exibe o erro no console
        });
});