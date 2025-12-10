document.addEventListener('DOMContentLoaded', () => {
  // Emphasis Cards Navigation
  const emphasisCards = document.querySelectorAll('.emphasis-card');
  const prevCardBtn = document.querySelector('.prev-card');
  const nextCardBtn = document.querySelector('.next-card');
  let currentCardIndex = 0;

  function showCard(index) {
    emphasisCards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update navigation buttons
    prevCardBtn.disabled = index === 0;
    nextCardBtn.disabled = index === emphasisCards.length - 1;
  }

  prevCardBtn?.addEventListener('click', () => {
    if (currentCardIndex > 0) {
      currentCardIndex--;
      showCard(currentCardIndex);
    }
  });

  nextCardBtn?.addEventListener('click', () => {
    if (currentCardIndex < emphasisCards.length - 1) {
      currentCardIndex++;
      showCard(currentCardIndex);
    }
  });

  // Initialize first card
  showCard(0);

  // Timeline Navigation
  const timelineNavBtns = document.querySelectorAll('.timeline-nav-btn');
  const timelineItems = document.querySelectorAll('.timeline-item');

  function showTimelineContent(index) {
    timelineNavBtns.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    timelineItems.forEach((item, i) => {
      if (i === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  timelineNavBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      showTimelineContent(index);
    });
  });

  // Initialize timeline
  showTimelineContent(0);

  // Add summary toggle functionality
  const toggleBtn = document.querySelector('.toggle-summary');
  const summarySection = document.querySelector('.emphasis-cards');

  if (toggleBtn && summarySection) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = summarySection.style.maxHeight !== '0px';
      summarySection.style.maxHeight = isExpanded ? '0px' : '600px';
      toggleBtn.querySelector('.toggle-icon').textContent = isExpanded ? '▼' : '▲';
      toggleBtn.querySelector('.toggle-text').textContent = isExpanded ? 'Expandir sección' : 'Colapsar sección';
    });
  }

  // Image Carousel Functionality (original .carousel)
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
      }
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // Initialize first slide
  showSlide(0);

  // New Gallery Carousel Functionality
  const gallery = document.querySelector('.gallery');
  const gallerySlides = document.querySelectorAll('.gallery-slide');
  const galleryPrevBtn = document.querySelector('.gallery-prev');
  const galleryNextBtn = document.querySelector('.gallery-next');
  const galleryPagination = document.querySelector('.gallery-pagination');

  let currentGalleryIndex = 0;
  const totalGallerySlides = gallerySlides.length;

  // Create gallery pagination
  gallerySlides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('gallery-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToGallerySlide(index);
    });
    galleryPagination.appendChild(dot);
  });

  const galleryDots = document.querySelectorAll('.gallery-dot');

  function goToGallerySlide(index) {
    gallerySlides[currentGalleryIndex].classList.remove('active');
    galleryDots[currentGalleryIndex].classList.remove('active');

    currentGalleryIndex = (index + totalGallerySlides) % totalGallerySlides;

    gallerySlides[currentGalleryIndex].classList.add('active');
    galleryDots[currentGalleryIndex].classList.add('active');
  }

  function nextGallerySlide() {
    goToGallerySlide(currentGalleryIndex + 1);
  }

  function prevGallerySlide() {
    goToGallerySlide(currentGalleryIndex - 1);
  }

  galleryNextBtn?.addEventListener('click', nextGallerySlide);
  galleryPrevBtn?.addEventListener('click', prevGallerySlide);

  // Initialize gallery first slide
  goToGallerySlide(0);

  // Toggle functionality for the PCA content sections
  const togglePcaBtns = document.querySelectorAll('.toggle-btn');

  togglePcaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-target');
      const target = document.querySelector(targetSelector);

      if (target.style.display === 'block') {
        target.style.display = 'none';
      } else {
        target.style.display = 'block';
      }
    });
  });

  // Toggle functionality for Clustering cards (dos tarjetas)
  const clusteringToggleBtns = document.querySelectorAll('.toggle-clustering-btn');

  clusteringToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-target');
      const target = document.querySelector(targetSelector);

      if (target) {
        const isVisible = target.style.display === 'block';
        target.style.display = isVisible ? 'none' : 'block';
      }
    });
  });
});
