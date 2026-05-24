document.addEventListener("DOMContentLoaded", function () {
  // 1. Bulletproof check for genuine Safari (ignoring Chrome/Edge on Mac)
  const isSafari = /^((?!chrome|android|edg).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    // 2. Add a global flag to the body so CSS can handle the display safely
    document.body.classList.add("safari-fallback");
    
    // 3. Since the TV screen is hidden, make sure the backup layout displays immediately
    const mobileRules = document.querySelector(".mobile-rules");
    if (mobileRules) {
      mobileRules.style.display = "flex"; 
    }
  }
}); 