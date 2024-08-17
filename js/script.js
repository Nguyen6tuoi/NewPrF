document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
  });

  // Back to top button functionality
  const backToTopButton = document.querySelector('.back-to-top');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopButton.classList.add('show');
      } else {
          backToTopButton.classList.remove('show');
      }
  });

  backToTopButton.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Modal functionality
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const modalCloseButtons = document.querySelectorAll('.modal-close');

  modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function() {
          const modal = document.querySelector(this.dataset.modalTarget);
          modal.classList.add('active');
      });
  });

  modalCloseButtons.forEach(button => {
      button.addEventListener('click', function() {
          const modal = this.closest('.modal');
          modal.classList.remove('active');
      });
  });

  window.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal')) {
          e.target.classList.remove('active');
      }
  });

  // Additional JavaScript effects or functions
});
