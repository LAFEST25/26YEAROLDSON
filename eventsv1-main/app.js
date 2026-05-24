

const glow = document.querySelector(".background-glow");
const cards = document.querySelectorAll(".card");

if (glow) {
  document.addEventListener("mousemove", (e) => {
    const cursorX = e.clientX;
    const cursorY = e.clientY;

    glow.style.left = cursorX + "px";
    glow.style.top = cursorY + "px";

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const distanceX = cursorX - cardCenterX;
      const distanceY = cursorY - cardCenterY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const maxDistance = 350;
      const intensity = Math.max(0, 1 - distance / maxDistance);

      if (intensity > 0.1) {
        const length = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const dirX = (distanceX / length) * intensity;
        const dirY = (distanceY / length) * intensity;

        card.style.setProperty("--glow-x", `${dirX * 15}px`);
        card.style.setProperty("--glow-y", `${dirY * 15}px`);
        card.style.setProperty("--glow-intensity", intensity * 0.4);
        card.classList.add("card-glow-active");
      } else {
        card.classList.remove("card-glow-active");
      }
    });
  });
}