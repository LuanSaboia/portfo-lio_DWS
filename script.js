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

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        
        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");
    });
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Obrigado por entrar em contato! Responderei em breve.');
    form.reset();
});

emailjs.init("duZfPJZEZvIGRc38z");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    emailjs.sendForm("service_fs3hsgq", "template_skz77dj", this)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset();
        }, (error) => {
            alert("Erro ao enviar a mensagem. Tente novamente.");
            console.error("Erro:", error);
        });
});
