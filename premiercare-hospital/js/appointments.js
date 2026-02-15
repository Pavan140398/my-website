/**
 * PremierCare Hospital - Appointment booking
 * Form validation and confirmation popup
 */

(function () {
  'use strict';

  const form = document.getElementById('appointment-form');
  const confirmPopup = document.getElementById('confirm-popup');
  const closeConfirm = document.getElementById('close-confirm');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]');
    const contact = form.querySelector('[name="contact"]');
    const department = form.querySelector('[name="department"]');
    const doctor = form.querySelector('[name="doctor"]');
    const date = form.querySelector('[name="date"]');
    const time = form.querySelector('[name="time"]');

    let valid = true;
    [name, contact, department, doctor, date, time].forEach(function (field) {
      if (!field) return;
      if (!field.value.trim()) {
        valid = false;
        field.style.borderColor = 'var(--danger)';
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) return;

    if (confirmPopup) {
      confirmPopup.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    form.reset();
  });

  function closePopup() {
    if (confirmPopup) {
      confirmPopup.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeConfirm) closeConfirm.addEventListener('click', closePopup);
  if (confirmPopup) {
    confirmPopup.addEventListener('click', function (e) {
      if (e.target === confirmPopup) closePopup();
    });
  }
})();
