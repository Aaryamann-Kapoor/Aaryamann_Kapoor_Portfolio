document.addEventListener('DOMContentLoaded', () => {
  // ── Hero Animations on Load ──
  const animElements = document.querySelectorAll('#hero .hero-left > *, #hero .hero-right, .hero-socials, .hero-scroll');
  animElements.forEach(el => el.classList.add('anim'));

  // ── Smooth Cursor Glow ──
  const glow = document.getElementById('cursor-glow');
  if (glow) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let glowX = mouseX;
    let glowY = mouseY;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const updateGlow = () => {
      // Interpolate position for a smooth trailing effect
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;
      
      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;
      
      requestAnimationFrame(updateGlow);
    };
    updateGlow();
  }

  // ── Sticky Navigation & Active Section Highlight ──
  const nav = document.querySelector('nav');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    // Nav shrink on scroll
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    // Highlighting current section link
    let current = '';
    const scrollPosition = window.scrollY + 120; // offset

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--text-primary)';
      }
    });
  });

  // ── Mobile Burger Menu Toggle ──
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('.nav-links');
  
  if (burger && navList) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      navList.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        navList.classList.remove('active');
      });
    });
  }

  // ── Scroll Reveal Intersection Observer ──
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Staggered Skill Pills Reveal
  const skills = document.querySelectorAll('.skill-pill');
  skills.forEach((skill, i) => {
    skill.style.transitionDelay = `${i * 0.02}s`;
    skill.classList.add('reveal');
    revealObserver.observe(skill);
  });

  // ── Contact Form Interaction ──
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    const submitBtn = contactForm.querySelector('.form-submit');
    const inputs = contactForm.querySelectorAll('input, textarea');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation check
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = 'var(--accent-pink)';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!valid) return;

      // Premium feedback on submit
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Message Sent ✓';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)'; // green
        submitBtn.style.color = '#fff';
        submitBtn.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.4)';
        submitBtn.style.opacity = '1';

        // Clear form values
        inputs.forEach(input => input.value = '');
      }, 1500);
    });

    // Reset input border color on type
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.style.borderColor = '';
      });
    });
  }
});
