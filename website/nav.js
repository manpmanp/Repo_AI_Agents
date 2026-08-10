// Driva AI — shared site behavior: mobile nav toggle + scroll-reveal animation

(function () {
  function initNav() {
    const toggle = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => observer.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initReveal();
  });
})();
