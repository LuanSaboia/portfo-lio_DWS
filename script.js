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
