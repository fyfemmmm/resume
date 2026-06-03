/**
 * Apple Design System — Personal Resume
 * Interactive features — UI Polish Edition
 */

(function() {
  'use strict';

  /* ===== Dark Mode Toggle ===== */
  const darkToggle = document.querySelector('.dark-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  // Apply saved theme, or system preference as default
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.sun-icon')?.style.setProperty('display', 'none');
    document.querySelector('.moon-icon')?.style.removeProperty('display');
  }

  if (darkToggle) {
    darkToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        document.querySelector('.sun-icon')?.style.removeProperty('display');
        document.querySelector('.moon-icon')?.style.setProperty('display', 'none');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('.sun-icon')?.style.setProperty('display', 'none');
        document.querySelector('.moon-icon')?.style.removeProperty('display');
      }
    });
  }

  /* ===== Scroll Progress Bar ===== */
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.prepend(progressBar);

  function updateProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  }

  window.addEventListener('scroll', updateProgress, { passive: true });

  /* ===== Nav Frosted Glass on Scroll ===== */
  const nav = document.querySelector('.global-nav');
  const heroSection = document.querySelector('.hero-tile');

  function updateNavAppearance() {
    if (!nav || !heroSection) return;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const shouldFrost = window.pageYOffset > heroBottom - 100;
    nav.classList.toggle('is-scrolled', shouldFrost);
  }

  window.addEventListener('scroll', updateNavAppearance, { passive: true });

  /* ===== Mobile Nav Toggle ===== */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ===== Smooth Scroll with Cubic Easing ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = 44;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  /* ===== Staggered Card Animations (Intersection Observer) ===== */
  const cardSelectors = [
    '.timeline-card',
    '.skill-card',
    '.project-card',
    '.contact-item',
    '.award-card'
  ];

  const cardSelectorStr = cardSelectors.join(',');
  const animateElements = document.querySelectorAll(cardSelectorStr);

  if ('IntersectionObserver' in window && animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            // Stagger delay based on sibling index
            const siblings = el.parentElement
              ? Array.from(el.parentElement.children).filter(
                  c => c.matches(cardSelectorStr)
                )
              : [el];
            const index = siblings.indexOf(el);
            const delay = Math.min(index * 0.08, 0.5); // max 500ms delay
            el.style.transitionDelay = `${delay}s`;
            el.classList.add('visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    animateElements.forEach(el => {
      el.classList.add('fade-in-up');
      el.style.transitionDuration = '0.6s';
      observer.observe(el);
    });
  } else {
    animateElements.forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  /* ===== Active Nav Link with Dot Indicator ===== */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    const scrollPos = window.pageYOffset + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(anchor => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav, { passive: true });
  updateActiveNav();

  /* ===== Back to Top Button Visibility ===== */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    let lastScrollY = 0;
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;
      if (scrollY > 400 && scrollY > lastScrollY + 5) {
        backToTop.classList.add('visible');
      } else if (scrollY <= 400 || scrollY < lastScrollY - 5) {
        backToTop.classList.remove('visible');
      }
      lastScrollY = scrollY;
    }, { passive: true });
  }

  /* ===== Hero Subtle Parallax ===== */
  const heroAvatar = document.querySelector('.avatar-photo');

  if (heroAvatar && window.innerWidth > 734) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        const translateY = scrolled * 0.12;
        heroAvatar.style.transform = `translateY(${translateY}px)`;
      }
    }, { passive: true });
  }

  /* ===== Section Entrance — staggered section labels ===== */
  const sectionLabels = document.querySelectorAll('.section-label, .display-lg');
  if ('IntersectionObserver' in window && sectionLabels.length > 0) {
    // Pre-define shared transition string
    const labelTransition = 'opacity 0.6s ease, transform 0.6s ease';
    const labelObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.removeProperty('transition');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            labelObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionLabels.forEach(label => {
      // Use class-based animation instead of inline style to avoid conflicts
      label.classList.add('fade-in-up');
      label.style.transition = labelTransition;
      labelObserver.observe(label);
    });
  }

  /* ===== Console Easter Egg ===== */
  console.log(
    '%c 个人简历 ',
    'background: #1d1d1f; color: #f5f5f7; font-size: 14px; padding: 8px 16px; border-radius: 8px; font-family: system-ui, sans-serif;'
  );
  console.log(
    '%c 基于 Apple 设计语言构建 ',
    'color: #6e6e73; font-size: 12px; font-family: system-ui, sans-serif;'
  );

})();
