document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let modal = document.getElementById('thankYouMessage');
    modal.style.display = 'flex';

    event.target.reset();
});

function closeModal() {
    let modal = document.getElementById('thankYouMessage');
    modal.style.display = 'none';
}
