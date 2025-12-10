// Timeline and Journey Interaction Script

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const milestones = document.querySelectorAll('.milestone');
  const indicator = document.querySelector('.journey-indicator');
  const momentCards = document.querySelectorAll('.moment-card');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const currentStepEl = document.querySelector('.current-step');
  const totalStepsEl = document.querySelector('.total-steps');
  
  // Variables
  let currentIndex = 0;
  const totalSteps = milestones.length;
  
  // Initialize
  totalStepsEl.textContent = totalSteps;
  updateCurrentStep();
  
  // Position the indicator based on milestone positions
  function positionIndicator(index) {
    // Calculate positions based on the number of milestones
    // Adding 2% to align better with the milestone dot
    const position = 10 + (index * 80 / (totalSteps - 1)) + 2;
    indicator.style.left = `${position}%`;
  }
  
  // Update the active state of milestones and cards
  function updateActiveState() {
    // Update milestones
    milestones.forEach((milestone, index) => {
      const dot = milestone.querySelector('.milestone-dot');
      const label = milestone.querySelector('.milestone-label');
      
      if (index === currentIndex) {
        dot.style.backgroundColor = 'var(--primary-color)';
        dot.style.transform = 'scale(1.2)';
        label.style.color = 'var(--primary-color)';
        label.style.fontWeight = '600';
      } else {
        dot.style.backgroundColor = 'var(--white)';
        dot.style.transform = 'scale(1)';
        label.style.color = 'var(--text-light)';
        label.style.fontWeight = '500';
      }
    });
    
    // Update cards
    momentCards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    
    // Update navigation buttons
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === totalSteps - 1;
  }
  
  // Update current step counter
  function updateCurrentStep() {
    currentStepEl.textContent = currentIndex + 1;
  }
  
  // Navigate to a specific moment
  function navigateToMoment(index) {
    if (index >= 0 && index < totalSteps) {
      currentIndex = index;
      positionIndicator(currentIndex);
      updateActiveState();
      updateCurrentStep();
      
      // Auto-scroll to active card on smaller screens
      if (window.innerWidth < 768) {
        momentCards[currentIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    }
  }
  
  // Add click event to milestones
  milestones.forEach((milestone, index) => {
    milestone.addEventListener('click', () => {
      navigateToMoment(index);
    });
  });
  
  // Add click event to cards
momentCards.forEach((card, index) => {
  card.addEventListener('click', (e) => {
    // Permite que los botones reales sigan su navegación
    if (e.target.closest('a.card-button')) return;
    navigateToMoment(index);
  });
});

  
  // Navigation buttons
  prevButton.addEventListener('click', () => {
    navigateToMoment(currentIndex - 1);
  });
  
  nextButton.addEventListener('click', () => {
    navigateToMoment(currentIndex + 1);
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      navigateToMoment(currentIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      navigateToMoment(currentIndex - 1);
    }
  });
  
  // Initialize position
  positionIndicator(currentIndex);
  
  // Add a small animation to draw attention to the journey
  setTimeout(() => {
    // Briefly show the next position then return
    if (currentIndex < totalSteps - 1) {
      positionIndicator(currentIndex + 1);
      
      setTimeout(() => {
        positionIndicator(currentIndex);
      }, 600);
    }
  }, 1000);
});