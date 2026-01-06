document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Init libs
  Splitting();
  luxy.init();
  gsap.registerPlugin(ScrollTrigger);

  /* ================================
     INTRO (Header)
  ================================ */
  const gTl = gsap.timeline();
  gTl.from(".title .char", {
    duration: 1,
    opacity: 0,
    yPercent: 130,
    stagger: 0.06,
    ease: "back.out",
  });
  gTl.to(
    ".header__img",
    {
      duration: 2,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scale: 1,
      ease: "expo.out",
    },
    "-=1"
  );
  gTl.from(
    ".header__marq",
    { duration: 2, opacity: 0, yPercent: 100, ease: "expo.out" },
    "-=1.5"
  );

  /* ================================
     Section title squares rotation
  ================================ */
  gsap.utils.toArray(".section-title__square").forEach((sq) => {
    const rot = gsap.from(sq, { duration: 3, rotation: 720 });
    ScrollTrigger.create({
      trigger: sq,
      animation: rot,
      start: "top bottom",
      scrub: 1.9,
    });
  });

  /* ================================
     Header parallax
  ================================ */
  function header() {
    gsap.to(".title_paralax", {
      scrollTrigger: { trigger: ".header", start: "top top", scrub: 1.9 },
      yPercent: -150,
    });

    gsap.to(".header .stroke", {
      scrollTrigger: { trigger: ".header", start: "top top", scrub: 1.9 },
      xPercent: 50,
    });

    gsap.to(".header__img", {
      scrollTrigger: { trigger: ".header", start: "top top", scrub: 1.9 },
      xPercent: -70,
    });

    gsap.to(".header__img img", {
      scrollTrigger: { trigger: ".header", start: "top top", scrub: 1.9 },
      scale: 1.3,
    });

    gsap.to(".header__marq-wrapp", {
      scrollTrigger: { trigger: ".header", start: "top top", scrub: 1.9 },
      xPercent: -50,
    });

    gsap.to(".header__marq-star img", {
      scrollTrigger: { trigger: ".header", start: "top top", scrub: 1.9 },
      rotate: -720,
    });
  }
  header();

  /* ================================
     About
  ================================ */
  function about() {
    gsap.from(".about__img", {
      scrollTrigger: { trigger: ".about", start: "top bottom", scrub: 1.9 },
      yPercent: 80,
    });

    gsap.from(".about__img img", {
      scrollTrigger: { trigger: ".about", start: "top bottom", scrub: 1.9 },
      scale: 1.6,
    });

    gsap.to(".about__txt", {
      scrollTrigger: { trigger: ".about__wrapp", start: "top bottom", scrub: 1.9 },
      yPercent: 50,
    });
  }
  about();

  /* ================================
     Benefits (numbers parallax)
  ================================ */
  function benefits() {
    gsap.from(".benefits__num", {
      x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: { trigger: ".benefits__list", start: "top bottom", scrub: 1.9 },
    });
  }
  benefits();

  /* ================================
     Portfolio (images) - se ainda usares
     (se removeste a secção .work, podes apagar esta função)
  ================================ */
  function portfolio() {
    gsap.from(".work__item, .work__item-num", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: { trigger: ".work", start: "top bottom", scrub: 1.9 },
    });

    gsap.from(".work__item-img img", {
      scale: 1.6,
      scrollTrigger: { trigger: ".work__wrapp", start: "top bottom", scrub: 1.9 },
    });
  }
  portfolio();

  /* ================================
     Projects (text + animation)
  ================================ */
  function projectsText() {
    const items = gsap.utils.toArray(".projects__item");

    items.forEach((item) => {
      const line = item.querySelector(".projects__line");
      const num = item.querySelector(".projects__num");
      const title = item.querySelector(".projects__title");
      const desc = item.querySelector(".projects__desc");
      const meta = item.querySelectorAll(".projects__meta");
      const visual = item.querySelector(".project-visual img"); // opcional

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart reverse restart reverse",
        },
      });

      tl.fromTo(
        item,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }
      )
        // NUM
        .fromTo(
          num,
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
          "-=0.45"
        )
        // TITLE (da direita)
        .fromTo(
          title,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
          "-=0.55"
        )
        // DESC + META
        .fromTo(
          [desc, ...meta],
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.08,
          },
          "-=0.35"
        )
        // LINE
        .to(line, { scaleX: 1, duration: 0.7, ease: "power2.out" }, "-=0.35");

      // Movimento adicional (2) micro-rotação
      if (visual) {
        gsap.to(visual, {
          rotate: 0.3,
          duration: 5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Movimento adicional (3) parallax ultra-suave
        gsap.to(visual, {
          y: -14,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }
    });
  }
  projectsText();

  /* ================================
     Services arrows parallax
  ================================ */
  function serv() {
    gsap.from(".serv__item-arrow", {
      x: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      scrollTrigger: { trigger: ".serv__list", start: "top bottom", scrub: 1.9 },
    });
  }
  serv();

  /* ================================
     Footer
  ================================ */
  function footer() {
    gsap.from(".footer__div span", {
      y: (i, el) => 1 - parseFloat(el.getAttribute("data-speed")),
      opacity: 0,
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1.9,
      },
    });
  }
  footer();

  /* ================================
     Contact accordion
  ================================ */
  document.querySelectorAll(".serv__item--accordion").forEach((item) => {
    const toggle = item.querySelector(".serv__item-toggle");
    const close = item.querySelector(".serv__item-close");

    if (!toggle) return;

    toggle.addEventListener("click", () => {
      item.classList.toggle("active");
    });

    if (close) {
      close.addEventListener("click", (e) => {
        e.stopPropagation();
        item.classList.remove("active");
      });
    }
  });

 const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
  const SHOW_AT_PROGRESS = 0.90; // 👈 aqui

  function updateScrollTopVisibility() {
    const doc = document.documentElement;
    const scrollTop = window.pageYOffset || doc.scrollTop;
    const maxScroll = doc.scrollHeight - window.innerHeight;

    const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

    if (progress >= SHOW_AT_PROGRESS) {
      scrollTopBtn.classList.add("is-visible");
    } else {
      scrollTopBtn.classList.remove("is-visible");
      scrollTopBtn.classList.remove("is-hiding");
    }
  }

  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
  updateScrollTopVisibility();

  scrollTopBtn.addEventListener("click", () => {
    scrollTopBtn.classList.add("is-hiding");

    setTimeout(() => {
      gsap.to(window, {
        scrollTo: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          scrollTopBtn.classList.remove("is-hiding");
          scrollTopBtn.classList.remove("is-visible");
        },
      });
    }, 260);
  });
}



  /* ================================
     Fix layout on load (luxy + triggers)
  ================================ */
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);
});
