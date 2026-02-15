/**
 * PremierCare Hospital - Shared JavaScript
 * Emergency banner, scroll animations, navigation
 */

(function () {
  'use strict';

  // ---------- Emergency Alert Banner ----------
  const banner = document.getElementById('emergency-banner');
  if (banner) {
    // Show banner on load (simulate admin trigger)
    setTimeout(function () {
      banner.classList.add('visible');
    }, 800);

    const closeBtn = banner.querySelector('.close-banner');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        banner.classList.remove('visible');
      });
    }
  }

  // ---------- Scroll-triggered animations ----------
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });

  // ---------- Staggered doctor cards ----------
  const doctorCards = document.querySelectorAll('.doctors-grid .doctor-card');
  if (doctorCards.length) {
    const doctorObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.doctor-card');
          cards.forEach(function (card, i) {
            setTimeout(function () {
              card.classList.add('visible');
            }, i * 100);
          });
          doctorObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    const doctorsSection = document.querySelector('.doctors-grid');
    if (doctorsSection) doctorObserver.observe(doctorsSection);
  }

  // ---------- Mobile nav toggle ----------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ---------- Navbar hide on scroll down ----------
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 120) {
        if (currentScroll > lastScroll) {
          navbar.classList.add('hidden');
        } else {
          navbar.classList.remove('hidden');
        }
      } else {
        navbar.classList.remove('hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }
})();
