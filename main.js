document.addEventListener("DOMContentLoaded", () => {
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
      threshold: 0.15,
    }
  );

  // 대상을 reveal 클래스가 있는 요소들로 설정
  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  /* ===== Project Card Stagger Animation ===== */
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card, i) => {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            card.classList.add("show");
          }, i * 150); // 인덱스에 따라 지연 시간 부여
        }
      });
    });

    cardObserver.observe(card);
  });
});
