document.addEventListener('DOMContentLoaded', () => {
    // Flip card interaction
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            const inner = card.querySelector('.flip-card-inner');
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' 
                ? 'rotateY(0deg)' 
                : 'rotateY(180deg)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const options = {
        threshold: 0.5,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, options);

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = item.classList.contains('left') 
            ? 'translateX(-50px)' 
            : 'translateX(50px)';
        item.style.transition = 'all 0.5s ease-in-out';
        observer.observe(item);
    });
});