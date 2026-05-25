let lastScrollY = window.scrollY;
const navContainer = document.getElementById('navContainer');

window.addEventListener('scroll', () => {
  // Only execute scroll-hide logic if the screen is wider than mobile (desktop/tablet)
  if (window.innerWidth > 768) {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      // Scrolling DOWN -> Hide the navbar
      navContainer.classList.add('nav-hidden');
    } else {
      // Scrolling UP -> Show the navbar
      navContainer.classList.remove('nav-hidden');
    }
  }
  
  // Update last scroll position
  lastScrollY = window.scrollY;
});
