document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('overlay');
  const body = document.body;
  const card = document.querySelector('.card');

  // Add overlay-active class to body
  body.classList.add('overlay-active');

  // Remove overlay and trigger card scroll-up on click
  overlay.addEventListener('click', () => {
    overlay.style.opacity = '0'; // Fade out overlay
    body.classList.remove('overlay-active'); // Remove blur effect

    // Add card-visible class to trigger scroll-up animation
    card.classList.add('card-visible');

    // Remove overlay after fade-out animation
    setTimeout(() => {
      overlay.remove();
    }, 500); // Match this duration with the CSS transition
  });
});
