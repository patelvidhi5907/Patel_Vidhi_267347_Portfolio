/**
 * Interactive Controller for Vidhi Patel's Portfolio
 * Neumorphism & Minimalism Design System
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Dynamic Year
  initCurrentYear();

  // 2. Initialize Theme Toggle (Light / Dark Neumorphism)
  initThemeToggle();

  // 3. Initialize Mobile Navigation Menu
  initMobileNav();

  // 4. Initialize Active Scroll Spy for Navigation Links
  initScrollSpy();

  // 5. Initialize Tactile Button Feedback
  initTactileFeedback();

  // 6. Initialize Email Copy-to-Clipboard
  initCopyEmail();

  // 7. Initialize Direct Mail Composer Form
  initMailComposer();
});

/**
 * Automatically sets the current year in footer
 */
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Handles Dark / Light Neumorphism Theme Switching with persistence
 */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('vidhi-portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', currentTheme);
      localStorage.setItem('vidhi-portfolio-theme', currentTheme);

      // Tactile sound/feel simulation via temporary class
      themeToggleBtn.classList.add('is-pressed');
      setTimeout(() => themeToggleBtn.classList.remove('is-pressed'), 180);
    });
  }

  // Listen for system theme changes if user hasn't explicitly set a preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('vidhi-portfolio-theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      root.setAttribute('data-theme', newTheme);
    }
  });
}

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileNav) return;

  function toggleMenu(isOpen) {
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileNav.classList.toggle('is-open', isOpen);
    if (isOpen) {
      mobileNav.removeAttribute('hidden');
    } else {
      setTimeout(() => {
        if (!mobileNav.classList.contains('is-open')) {
          mobileNav.setAttribute('hidden', '');
        }
      }, 200);
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleMenu(!isExpanded);
  });

  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Close menu on click outside
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !toggleBtn.contains(e.target) && mobileNav.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });
}

/**
 * Scroll Spy to highlight active section in navbar
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav .mobile-nav-link');

  if (!sections.length) return;

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 120; // Offset for header

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Initial run
}

/**
 * Neumorphic Tactile Button feedback
 */
function initTactileFeedback() {
  const buttons = document.querySelectorAll('.neu-btn');

  buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.classList.add('is-pressed');
    });

    btn.addEventListener('mouseup', () => {
      setTimeout(() => btn.classList.remove('is-pressed'), 140);
    });

    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('is-pressed');
    });

    // Touch events for mobile tactile response
    btn.addEventListener('touchstart', () => {
      btn.classList.add('is-pressed');
    }, { passive: true });

    btn.addEventListener('touchend', () => {
      setTimeout(() => btn.classList.remove('is-pressed'), 140);
    }, { passive: true });
  });
}

/**
 * Direct Copy-to-Clipboard for Email with tactile feedback
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  const emailToCopy = (typeof portfolioData !== 'undefined' && portfolioData.contact && portfolioData.contact.email)
    ? portfolioData.contact.email
    : 'patelvidhi5907@gmail.com';

  if (!copyBtn) return;

  const originalContent = copyBtn.innerHTML;

  copyBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback for non-supported or restricted environments
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }

      // Successful copy UI feedback
      copyBtn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span class="btn-text">Copied!</span>
      `;
      copyBtn.classList.add('is-pressed');

      setTimeout(() => {
        copyBtn.innerHTML = originalContent;
        copyBtn.classList.remove('is-pressed');
      }, 2200);

    } catch (err) {
      console.warn('Unable to copy to clipboard:', err);
    }
  });
}

/**
 * Contact Form mailto builder - prepares direct email client draft
 */
function initMailComposer() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    const name = nameInput ? nameInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Inquiry';
    const message = messageInput ? messageInput.value.trim() : '';

    const recipient = (typeof portfolioData !== 'undefined' && portfolioData.contact && portfolioData.contact.email)
      ? portfolioData.contact.email
      : 'patelvidhi5907@gmail.com';

    const fullSubject = encodeURIComponent(subject ? `[Portfolio] ${subject}` : '[Portfolio] Inquiry from Website');
    const fullBody = encodeURIComponent(`Hi Vidhi,\n\n${message}\n\nBest regards,\n${name}`);

    const mailtoUrl = `mailto:${recipient}?subject=${fullSubject}&body=${fullBody}`;

    // Open default mail client
    window.location.href = mailtoUrl;
  });
}
