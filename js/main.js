// main.js — comportamentos da página
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initCounters();
  initFadeIn();
  initContactForm();
});

function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
  nav.classList.toggle('scrolled', window.scrollY > 50);
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', (e) => {
    if (!document.getElementById('nav').contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    if (reducedMotion) {
      el.textContent = prefix + target + suffix;
      return;
    }

    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      el.textContent = prefix + current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(el => observer.observe(el));
}

function initContactForm() {
  const form = document.getElementById('contatoForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.querySelector('[name="Nome"]').value.trim();
    const email = form.querySelector('[name="Email"]').value.trim();
    const telefone = form.querySelector('[name="Telefone"]').value.trim();
    const assunto = form.querySelector('[name="Assunto"]').value;
    const mensagem = form.querySelector('[name="Mensagem"]').value.trim();

    if (!nome || !email || !mensagem) return;

    const subject = encodeURIComponent(assunto || 'Contato via site');
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone || 'Não informado'}\n\n${mensagem}`
    );
    window.location.href = `mailto:administrativo@joaleria.com?subject=${subject}&body=${body}`;
  });
}

function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const siblings = [...entry.target.parentElement.querySelectorAll('.fade-in')];
        const index = siblings.indexOf(entry.target);
        const delay = index * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
