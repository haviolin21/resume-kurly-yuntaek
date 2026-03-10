document.addEventListener("DOMContentLoaded", () => {
  /* ===== Initialize Lucide Icons ===== */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ===== Scroll Reveal Animation (General) ===== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  /* ===== Project Card Stagger Animation ===== */
  const cards = document.querySelectorAll(".project-card");
  const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        cards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add("show");
          }, i * 120);
        });
        projectObserver.disconnect(); // 한 번 실행 후 해제
      }
    });
  }, { threshold: 0.1 });

  const projectSection = document.querySelector("#projects");
  if (projectSection) projectObserver.observe(projectSection);

  /* ===== Back to Top Button ===== */
  const backToTop = document.getElementById("back-to-top");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  /* ===== Scrollspy (Active Navigation) ===== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 150) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
