const revealTargets = document.querySelectorAll(
  ".section-lead, .overview-grid, .lab-item, .path-list li, .todo-block, .contribute-layout",
);

revealTargets.forEach((target) => target.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

revealTargets.forEach((target) => revealObserver.observe(target));

const header = document.querySelector(".site-header");

window.addEventListener(
  "scroll",
  () => {
    const shadow = window.scrollY > 20 ? "0 12px 34px rgba(18, 20, 15, 0.08)" : "none";
    header.style.boxShadow = shadow;
  },
  { passive: true },
);
