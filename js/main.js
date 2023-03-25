const header = document.querySelector(".header");

const btnToggleNav = document.querySelector(".btn-mobile-nav");
btnToggleNav.addEventListener("click", () =>
  header.classList.toggle("nav-open")
);

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    header.classList.toggle("nav-open");
  });
});

const sectionHeroEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  (ent) => {
    const entry = ent[0];
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    if (entry.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);
obs.observe(sectionHeroEl);
