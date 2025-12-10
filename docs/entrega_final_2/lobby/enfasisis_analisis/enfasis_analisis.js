document.addEventListener('DOMContentLoaded', () => {
    // Stream cards flip functionality
    const streamCards = document.querySelectorAll('.stream-card');
    streamCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Carousel functionality
    const carouselCards = document.querySelectorAll('.carousel-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showCard(index) {
        carouselCards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % carouselCards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + carouselCards.length) % carouselCards.length;
        showCard(currentIndex);
    }

    // Initialize carousel
    showCard(currentIndex);

    // Event listeners for navigation
    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', nextCard);
        prevBtn.addEventListener('click', prevCard);
    }

    // Optional: Auto-advance carousel
    const autoAdvance = setInterval(nextCard, 5000);

    // Stop auto-advance on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
    }
});