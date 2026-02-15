/**
 * PremierCare Hospital - Doctors page
 * Real-time availability (simulated update every 3-5 seconds)
 */

(function () {
  'use strict';

  const availabilityEls = document.querySelectorAll('.availability-badge');
  if (!availabilityEls.length) return;

  function randomStatus() {
    return Math.random() > 0.4 ? 'available' : 'busy';
  }

  function updateAvailability() {
    availabilityEls.forEach(function (el) {
      const status = randomStatus();
      el.classList.remove('available', 'busy');
      el.classList.add(status);
      el.textContent = status === 'available' ? '● Available' : '● Busy';
    });
  }

  // Update every 4 seconds
  setInterval(updateAvailability, 4000);
})();
