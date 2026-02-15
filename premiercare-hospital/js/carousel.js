/**
 * PremierCare Hospital - Carousel (staff, testimonials)
 * Auto-scroll with pause on hover
 */

(function () {
  'use strict';

  function initCarousel(selector) {
    const wrapper = document.querySelector(selector);
    if (!wrapper) return;

    const track = wrapper.querySelector('.carousel-track');
    const items = wrapper.querySelectorAll('.carousel-item');
    const prevBtn = wrapper.querySelector('.carousel-btn.prev');
    const nextBtn = wrapper.querySelector('.carousel-btn.next');

    if (!track || !items.length) return;

    const itemWidth = items[0].offsetWidth;
    const gap = 24;
    const step = itemWidth + gap;
    let currentIndex = 0;
    const totalItems = items.length;
    let autoPlayTimer;

    function goTo(index) {
      currentIndex = Math.max(0, Math.min(index, totalItems - 1));
      track.style.transform = 'translateX(-' + currentIndex * step + 'px)';
    }

    function next() {
      if (currentIndex >= totalItems - 1) {
        currentIndex = -1;
      }
      goTo(currentIndex + 1);
    }

    function startAutoPlay() {
      autoPlayTimer = setInterval(next, 4000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayTimer);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); stopAutoPlay(); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); stopAutoPlay(); startAutoPlay(); });

    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
  }

  initCarousel('.staff-carousel');
  initCarousel('.testimonials-carousel');
})();
