/**
 * PremierCare Hospital - Service modals and review modal
 */

(function () {
  'use strict';

  function initModals(openSelector, modalId, closeSelector) {
    const openBtns = document.querySelectorAll(openSelector);
    const modal = document.getElementById(modalId);
    if (!modal) return;

    const closeBtn = modal.querySelector(closeSelector || '.modal-close');
    const overlay = modal.classList.contains('modal-overlay') ? modal : modal.closest('.modal-overlay');

    function openModal() {
      (overlay || modal).classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      (overlay || modal).classList.remove('active');
      document.body.style.overflow = '';
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = btn.getAttribute('data-modal');
        if (targetId && targetId !== modalId) return;
        openModal();
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    (overlay || modal).addEventListener('click', function (e) {
      if (e.target === (overlay || modal)) closeModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && (overlay || modal).classList.contains('active')) closeModal();
    });
  }

  document.querySelectorAll('[data-modal]').forEach(function (btn) {
    const modalId = btn.getAttribute('data-modal');
    if (modalId) {
      const modal = document.getElementById(modalId);
      if (modal) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      }
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(function (m) {
        m.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  });
})();
