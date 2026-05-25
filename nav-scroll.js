let lastScrollY = window.scrollY;
const navContainer = document.getElementById('navContainer');

// FIX: Only run the code if navContainer actually exists on this page
if (navContainer) {
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        navContainer.classList.add('nav-hidden');
      } else {
        navContainer.classList.remove('nav-hidden');
      }
    }
    lastScrollY = window.scrollY;
  });
}
