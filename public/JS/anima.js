window.addEventListener('scroll', function() {
    const image = document.querySelector('.fade-image');
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (imagePosition < screenPosition) {
      image.classList.add('fade-in');
    }
  });
   
  const cards = document.querySelectorAll('.card');

  function checkCards() {
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight) {
        card.classList.add('show');
      }
    });
  }
  
  checkCards(); // add .show to cards that are already in view
  
  window.addEventListener('scroll', checkCards);
  