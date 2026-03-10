document.addEventListener("DOMContentLoaded", () => {
  /* ===== Project Data ===== */
  const projectData = {
    ko: {
      ivr: {
        title: "예약 담당자 IVR 대체",
        date: "2025.07.29 – 2025.09.21",
        tags: ["운영 자동화", "효율화", "비용 절감"],
        problem: "예약 담당자 미운영 시간대(새벽 등) 전화 대응 불가로 인한 고객 예약 실패 및 매출 손실 발생. 프리랜서 기반 운영으로 인한 인력 관리 리스크와 품질 불균형 상존.",
        hypothesis: "사람 중심의 예약 확인 프로세스를 IVR(자동응답) 기반 자동화로 전환하면 24시간 커버가 가능해져 예약 성공률이 높아지고, 운영 비용은 획기적으로 절감될 것이다.",
        execution: "SQL 기반 시간대별 예약 실패 데이터 분석으로 필요성 입증. 수락 시 재확인 절차를 포함한 안정적 시나리오 설계. 거래 규모별 매장 파일럿 테스트 및 사장님 인터뷰를 통한 거부감 검증 후 전면 도입.",
        result: "미운영 시간대 예약 성공률 50% → 70% 개선. 연간 약 2억 원 인건비를 월 200만 원 수준 통화료로 대체. 전체 예약 건수 약 5% 기여 및 플랫폼 운영 자동화 체계 구축.",
        tools: "SQL, IVR 시나리오 설계, 사용자 인터뷰",
        scope: "전략 수립 및 실행",
        labels: { p: "문제 정의", h: "가설 설정", e: "실행 전략", r: "성과 및 수치", t: "주요 도구", s: "수행 범위" }
      },
      pay: {
        title: "중고나라 페이 결제 2.4배 성장",
        date: "2023.04.07 – 2023.12.31",
        tags: ["결제 성장", "퍼널 분석", "CRM"],
        problem: "페이먼트 서비스 통합 운영 조직 신설 후 결제액 목표 달성 필요. 사용자 데이터 분석 결과 결제 퍼널 중 특정 구간에서의 높은 이탈률 확인.",
        hypothesis: "채팅 구간의 병목을 해결하고 상위 10% 헤비 유저 세그먼트를 집중 관리하면 전체 결제 볼륨이 크게 상승할 것이다.",
        execution: "SQL 퍼널 분석을 통해 카페-앱 연동 상품의 채팅 이탈 확인 후 '카페 자동 댓글 유도' 기능 도입. 상위 300명 판/구매자 대상 리워드 및 전담 CS 제공. 수수료 감면 '중요일' 이벤트 기획.",
        result: "2023년 결제액 2.4배 성장 및 역대 최고 결제액 달성. 상위 세그먼트 거래액 약 20% 추가 상승. 신설 팀 중 유일하게 연간 KPI 목표 달성.",
        tools: "SQL, 퍼널 분석, 세그먼트 타겟팅",
        scope: "데이터 분석 및 사업 기획",
        labels: { p: "문제 정의", h: "가설 설정", e: "실행 전략", r: "성과 및 수치", t: "주요 도구", s: "수행 범위" }
      },
      growth: {
        title: "중고나라 카페–앱 연동 프로젝트",
        date: "2022.03.15 – 2022.12.31",
        tags: ["사용자 성장", "서비스 기획", "LTV"],
        problem: "앱 활성화 및 MAU 증대를 위해 1,900만 명의 중고나라 카페 회원을 앱으로 유입시킬 저비용 고효율 구조 필요.",
        hypothesis: "카페-앱 연동 신청을 자동화하고, LTV 분석에 기반한 단계적 상품 등록 이벤트를 진행하면 유기적인 성장이 가능할 것이다.",
        execution: "수기 신청 방식을 자동 연동 페이지로 전환. LTV 대비 저비용인 '스타벅스 커피' 증정으로 초기 유입 폭발적 유도. 게임적 요소(마일리지 구간 달성)를 도입한 단계적 상품 등록 이벤트 설계.",
        result: "회원 수 1.6배, 상품 등록 수 2배 증가. 연동 회원의 상품이 전체 앱 상품의 60% 점유. 기존 신규 회원 대비 활동 지표 약 20% 높게 유지됨을 확인.",
        tools: "LTV 분석, 프로모션 설계, 프로세스 자동화",
        scope: "그로스 기획 및 데이터 분석",
        labels: { p: "문제 정의", h: "가설 설정", e: "실행 전략", r: "성과 및 수치", t: "주요 도구", s: "수행 범위" }
      },
      promo: {
        title: "위메프 TOP SKU 판촉 효율화",
        date: "19.08.05 – 19.11.29",
        tags: ["카테고리 전략", "데이터 분석", "파레토"],
        problem: "전체 상품 대상 동일 판촉 적용으로 인한 낮은 비용 효율성. 판촉비 투입 대비 거래액(GMV) 상승률 저조.",
        hypothesis: "파레토 법칙에 따라 거래액 상위 20%의 TOP SKU에 판촉 자원을 집중하고 공급가 기반 차등 판촉을 적용하면 마진과 매출이 동시에 개선될 것이다.",
        execution: "식품 카테고리 데이터 분석으로 핵심 150개 SKU 식별. 제휴 채널 가격비교 실시간 모니터링 기반 대응. MD/판매자 협업을 통한 공급가 개선 및 행사 기간 노출 집중.",
        result: "식품 카테고리 업계 1위 달성 및 GMV/CM 목표 초과 달성. 판촉 효율화로 마진 구조 개선 및 실시간 데이터 기반 전략 수정 프로세스 정립.",
        tools: "Excel (파레토 분석), 실시간 가격 모니터링",
        scope: "판촉 운영 및 성과 분석",
        labels: { p: "문제 정의", h: "가설 설정", e: "실행 전략", r: "성과 및 수치", t: "주요 도구", s: "수행 범위" }
      }
    },
    en: {
      ivr: {
        title: "IVR Automation for Booking Management",
        date: "Jul 2025 – Sep 2025",
        tags: ["Ops Automation", "Efficiency", "Cost Reduction"],
        problem: "Operational gap during off-hours (early morning) led to failed bookings and lost revenue. Churn and quality inconsistency due to freelancer-based manual operations.",
        hypothesis: "Automating the manual acceptance process with IVR would enable 24/7 coverage, improving booking success rates and significantly reducing operational costs.",
        execution: "Verified necessity with SQL analysis of failed bookings by time slot. Designed a reliable scenario with a secondary confirmation step. Rolled out after pilot testing and owner interviews.",
        result: "Improved off-hour booking success rate from 50% to 70%. Replaced KRW 200M/year labor costs with KRW 2M/month call fees. Contributed 5% to total bookings.",
        tools: "SQL, IVR Scenario Design, User Interview",
        scope: "Strategy & Execution",
        labels: { p: "Problem", h: "Hypothesis", e: "Execution", r: "Result", t: "Key Tools", s: "Scope" }
      },
      pay: {
        title: "2.4x Payment Growth at Joonggonara Pay",
        date: "Apr 2023 – Dec 2023",
        tags: ["Payment Growth", "Funnel Analysis", "CRM"],
        problem: "Need to hit aggressive payment targets after the formation of a unified team. Funnel analysis revealed high churn in specific stages.",
        hypothesis: "Resolving bottlenecks in the chat stage and focusing on the top 10% heavy user segment would drive significant growth in overall payment volume.",
        execution: "Identified chat churn via SQL; implemented 'Auto-comment lead-to-app' feature. Provided exclusive rewards for the top 300 users. Launched fee-reduction events.",
        result: "2.4x growth in payment volume in 2023, reaching an all-time high. Top segment transaction volume increased by 20%. Achieved all annual KPI targets.",
        tools: "SQL, Funnel Analysis, Segment Targeting",
        scope: "Data Analysis & Business Planning",
        labels: { p: "Problem", h: "Hypothesis", e: "Execution", r: "Result", t: "Key Tools", s: "Scope" }
      },
      growth: {
        title: "Cafe-to-App Growth Initiative",
        date: "Mar 2022 – Dec 2022",
        tags: ["User Growth", "Product Planning", "LTV"],
        problem: "Need a low-cost structure to migrate 19M cafe members to the app to boost activation and MAU.",
        hypothesis: "Automating account linkage and running staged listing events based on LTV analysis would drive organic and sustainable growth.",
        execution: "Automated the application portal. Used low-cost high-impact rewards (Starbucks coffee) for initial migration. Designed gamified staged listing events.",
        result: "1.6x increase in users and 2x increase in listings. Linked member listings accounted for 60% of app inventory. 20% higher activity scores than general users.",
        tools: "LTV Analysis, Promotion Design, Process Automation",
        scope: "Growth Planning & Analysis",
        labels: { p: "Problem", h: "Hypothesis", e: "Execution", r: "Result", t: "Key Tools", s: "Scope" }
      },
      promo: {
        title: "TOP SKU Promotion Optimization",
        date: "Aug 2019 – Nov 2019",
        tags: ["Category Strategy", "Data Analysis", "Pareto"],
        problem: "Low cost-efficiency due to uniform promotion rates. Low GMV growth relative to promotion spend.",
        hypothesis: "Focusing resources on the top 20% SKU (Pareto) and applying differential rates based on supply price would improve both margins and revenue.",
        execution: "Identified 150 core SKUs via data analysis. Implemented real-time response based on channel price monitoring. Improved supply prices via MD collaboration.",
        result: "Achieved #1 industry rank in the food category. Established a process for margin improvement and real-time data-driven strategy adjustments.",
        tools: "Excel (Pareto Analysis), Real-time Pricing Monitor",
        scope: "Ops & Performance Analysis",
        labels: { p: "Problem", h: "Hypothesis", e: "Execution", r: "Result", t: "Key Tools", s: "Scope" }
      }
    }
  };

  /* ===== Common State ===== */
  const currentLang = document.documentElement.lang === "en" ? "en" : "ko";

  /* ===== Initialize Lucide Icons ===== */
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ===== Reading Progress Bar ===== */
  const progressBar = document.getElementById("progress-bar");
  window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) progressBar.style.width = scrolled + "%";
  });

  /* ===== Copy Email to Clipboard ===== */
  const showToast = (message) => {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 2500);
  };

  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const email = link.getAttribute("href").replace("mailto:", "");
      navigator.clipboard.writeText(email).then(() => {
        const msg = currentLang === "ko" ? "이메일 주소가 복사되었습니다!" : "Email address copied!";
        showToast(msg);
      });
    });
  });

  /* ===== Scroll Reveal Animation ===== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });

  /* ===== Project Modal Logic ===== */
  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  const modalClose = modal ? modal.querySelector(".modal-close") : null;
  const modalOverlay = modal ? modal.querySelector(".modal-overlay") : null;

  const openModal = (projectId) => {
    const data = projectData[currentLang][projectId];
    if (!data) return;

    modalContent.innerHTML = `
      <div class="detail-header">
        <span class="detail-date">${data.date}</span>
        <h3 class="detail-title">${data.title}</h3>
        <div class="detail-tags">
          ${data.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
      </div>
      
      <div class="detail-section">
        <h4>${data.labels.p}</h4>
        <p>${data.problem}</p>
      </div>
      
      <div class="detail-section">
        <h4>${data.labels.h}</h4>
        <p>${data.hypothesis}</p>
      </div>
      
      <div class="detail-section">
        <h4>${data.labels.e}</h4>
        <p>${data.execution}</p>
      </div>
      
      <div class="detail-section">
        <h4>${data.labels.r}</h4>
        <p>${data.result}</p>
      </div>

      <div class="detail-grid">
        <div class="detail-item">
          <strong>${data.labels.t}</strong>
          <span>${data.tools}</span>
        </div>
        <div class="detail-item">
          <strong>${data.labels.s}</strong>
          <span>${data.scope}</span>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (window.lucide) window.lucide.createIcons();
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const projectId = card.getAttribute("data-project");
      if (projectId) openModal(projectId);
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
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
        projectObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });

  const projectSection = document.querySelector("#projects");
  if (projectSection) projectObserver.observe(projectSection);

  /* ===== Back to Top Button ===== */
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ===== Scrollspy ===== */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
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
