# Joaleria Transportes — Site Institucional — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar uma landing page one-page estática, moderna e responsiva para a Joaleria Transportes, hospedável no GitHub Pages.

**Architecture:** Quatro arquivos principais: `index.html` (toda a marcação), `css/variables.css` (design tokens), `css/main.css` (estilos), `js/main.js` (comportamentos). Sem dependências externas. O SVG do mapa do Brasil é embutido diretamente no HTML. Formulário de contato usa `action="mailto:"`.

**Tech Stack:** HTML5 semântico, CSS3 (Custom Properties, Grid, Flexbox), JavaScript ES6+ (IntersectionObserver, classList, scroll events), SVG inline.

---

## Mapa de Arquivos

| Arquivo | Responsabilidade |
|---------|-----------------|
| `index.html` | Toda a marcação da página — 10 seções do nav ao footer |
| `css/reset.css` | Normalize mínimo: box-sizing, margin/padding zero, img fluid |
| `css/variables.css` | Design tokens: cores, tipografia, espaçamento, breakpoints |
| `css/main.css` | Todos os estilos das seções, componentes e responsividade |
| `js/main.js` | Nav scroll blur, menu hambúrguer mobile, contadores animados, fade-in seções |
| `assets/favicon.svg` | Ícone SVG minimalista para aba do browser |

---

## Task 1: Scaffold do Projeto

**Files:**
- Create: `index.html`
- Create: `css/reset.css`
- Create: `css/variables.css`
- Create: `css/main.css`
- Create: `js/main.js`
- Create: `assets/favicon.svg`

- [ ] **Step 1: Criar estrutura de diretórios**

```bash
mkdir -p css assets js
```

- [ ] **Step 2: Criar `assets/favicon.svg`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0B2545"/>
  <text x="5" y="24" font-family="system-ui" font-weight="900" font-size="22" fill="#1363DF">J</text>
</svg>
```

- [ ] **Step 3: Criar `css/reset.css`**

```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { line-height: 1.6; -webkit-font-smoothing: antialiased; }
img, picture, video, canvas, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }
ul, ol { list-style: none; }
a { text-decoration: none; color: inherit; }
```

- [ ] **Step 4: Criar `css/variables.css`**

```css
:root {
  /* Cores */
  --azul-profundo: #0B2545;
  --azul-medio: #1363DF;
  --azul-claro: #E8F0FE;
  --branco: #FFFFFF;
  --cinza-texto: #4A5568;
  --cinza-claro: #F7F9FC;
  --dourado: #C9A844;

  /* Tipografia */
  --font: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --fs-xs: 0.75rem;
  --fs-sm: 0.875rem;
  --fs-base: 1rem;
  --fs-lg: 1.125rem;
  --fs-xl: 1.25rem;
  --fs-2xl: 1.5rem;
  --fs-3xl: 2rem;
  --fs-4xl: 2.5rem;
  --fs-5xl: 3.5rem;
  --fs-display: clamp(2.5rem, 6vw, 5rem);

  /* Espaçamento */
  --section-py: clamp(3rem, 8vw, 5rem);
  --container: 1200px;
  --gap: 1.5rem;
  --radius: 0.75rem;
  --radius-lg: 1.25rem;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.04);
  --shadow-md: 0 4px 16px rgba(0,0,0,.10);
  --shadow-lg: 0 8px 32px rgba(0,0,0,.14);

  /* Transição */
  --transition: 0.25s ease;
}
```

- [ ] **Step 5: Criar `js/main.js` com stub vazio**

```js
// main.js — comportamentos da página
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initCounters();
  initFadeIn();
});
```

- [ ] **Step 6: Criar `index.html` com esqueleto base**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Joaleria Transportes — 40 anos movendo o Brasil. Transportadora especializada em logística de produtos de higiene e papel, com cobertura nacional." />
  <title>Joaleria Transportes</title>
  <link rel="icon" type="image/svg+xml" href="assets/favicon.svg" />
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/variables.css" />
  <link rel="stylesheet" href="css/main.css" />
</head>
<body>
  <!-- NAV -->
  <!-- HERO -->
  <!-- NÚMEROS -->
  <!-- SOBRE -->
  <!-- SERVIÇOS -->
  <!-- DIFERENCIAIS -->
  <!-- ÁREA DE ATUAÇÃO -->
  <!-- TRABALHE CONOSCO -->
  <!-- CONTATO -->
  <!-- FOOTER -->
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 7: Verificar no browser**

Abrir `index.html` no browser. Deve mostrar página em branco sem erros no console.

- [ ] **Step 8: Commit**

```bash
git add .
git commit -m "feat: scaffold do projeto — estrutura de arquivos e tokens CSS"
```

---

## Task 2: Base CSS — Layout e Tipografia Global

**Files:**
- Modify: `css/main.css`

- [ ] **Step 1: Escrever estilos globais em `css/main.css`**

```css
/* ========================
   BASE
======================== */
body {
  font-family: var(--font);
  font-size: var(--fs-base);
  color: var(--cinza-texto);
  background: var(--branco);
}

.container {
  width: 100%;
  max-width: var(--container);
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 2rem);
}

section {
  padding-block: var(--section-py);
}

.section-label {
  display: inline-block;
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--azul-medio);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  color: var(--azul-profundo);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.section-title--white {
  color: var(--branco);
}

.section-desc {
  font-size: var(--fs-lg);
  color: var(--cinza-texto);
  max-width: 56ch;
  line-height: 1.7;
}

.section-desc--white {
  color: rgba(255,255,255,0.8);
}

/* Botões */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: var(--fs-sm);
  letter-spacing: 0.02em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform var(--transition), box-shadow var(--transition), background var(--transition);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-primary {
  background: var(--azul-medio);
  color: var(--branco);
}

.btn-primary:hover {
  background: #0f52c0;
}

.btn-outline {
  background: transparent;
  color: var(--branco);
  border-color: rgba(255,255,255,0.5);
}

.btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: var(--branco);
}

.btn-outline-dark {
  background: transparent;
  color: var(--azul-profundo);
  border-color: var(--azul-profundo);
}

.btn-outline-dark:hover {
  background: var(--azul-profundo);
  color: var(--branco);
}

/* Fade-in via IntersectionObserver */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Step 2: Verificar no browser**

Página ainda em branco. Abrir DevTools → nenhum erro CSS.

- [ ] **Step 3: Commit**

```bash
git add css/main.css
git commit -m "feat: estilos base — container, tipografia global e botões"
```

---

## Task 3: Nav

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`
- Modify: `js/main.js`

- [ ] **Step 1: Adicionar HTML da nav em `index.html`** (substituir `<!-- NAV -->`)

```html
<header class="nav" id="nav">
  <div class="container nav__inner">
    <a href="#hero" class="nav__logo">
      <span class="nav__logo-icon">J</span>
      <span class="nav__logo-text">Joaleria <strong>Transportes</strong></span>
    </a>
    <nav class="nav__links" id="navLinks" aria-label="Menu principal">
      <a href="#sobre" class="nav__link">Sobre</a>
      <a href="#servicos" class="nav__link">Serviços</a>
      <a href="#diferenciais" class="nav__link">Diferenciais</a>
      <a href="#atuacao" class="nav__link">Área de Atuação</a>
      <a href="#contato" class="nav__link">Contato</a>
    </nav>
    <a href="#contato" class="btn btn-primary nav__cta">Fale Conosco</a>
    <button class="nav__hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

- [ ] **Step 2: Adicionar CSS da nav em `css/main.css`**

```css
/* ========================
   NAV
======================== */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding-block: 1rem;
  transition: background var(--transition), box-shadow var(--transition), padding var(--transition);
}

.nav.scrolled {
  background: rgba(11, 37, 69, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(255,255,255,0.08);
  padding-block: 0.75rem;
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
}

.nav__logo-icon {
  width: 36px;
  height: 36px;
  background: var(--azul-medio);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1.25rem;
  color: var(--branco);
  line-height: 1;
}

.nav__logo-text {
  font-size: var(--fs-sm);
  color: var(--branco);
  font-weight: 400;
  white-space: nowrap;
}

.nav__logo-text strong {
  font-weight: 800;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-left: auto;
}

.nav__link {
  color: rgba(255,255,255,0.8);
  font-size: var(--fs-sm);
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  transition: color var(--transition), background var(--transition);
}

.nav__link:hover {
  color: var(--branco);
  background: rgba(255,255,255,0.08);
}

.nav__cta {
  flex-shrink: 0;
  padding: 0.625rem 1.25rem;
  font-size: var(--fs-sm);
}

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;
}

.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--branco);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}

.nav__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav__hamburger.open span:nth-child(2) { opacity: 0; }
.nav__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 768px) {
  .nav__links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: min(300px, 80vw);
    background: var(--azul-profundo);
    flex-direction: column;
    align-items: flex-start;
    padding: 5rem 2rem 2rem;
    gap: 0.5rem;
    transition: right var(--transition);
    box-shadow: -8px 0 32px rgba(0,0,0,0.3);
    margin-left: 0;
  }

  .nav__links.open { right: 0; }

  .nav__link {
    font-size: var(--fs-lg);
    padding: 0.75rem 1rem;
    width: 100%;
  }

  .nav__cta { display: none; }
  .nav__hamburger { display: flex; }
}
```

- [ ] **Step 3: Implementar funções `initNav` e `initMobileMenu` em `js/main.js`**

```js
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
  // garante estado correto no carregamento
  nav.classList.toggle('scrolled', window.scrollY > 50);
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Fechar ao clicar em link
  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}
```

- [ ] **Step 4: Verificar no browser**

Abrir no browser. A nav deve estar invisível/transparente (sem scroll). Ao rolar > 50px deve ganhar fundo escuro com blur. Em mobile (< 768px) deve aparecer hamburger e os links devem ficar em drawer lateral.

- [ ] **Step 5: Commit**

```bash
git add index.html css/main.css js/main.js
git commit -m "feat: nav fixa com blur no scroll e menu hambúrguer mobile"
```

---

## Task 4: Hero

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML do hero em `index.html`** (substituir `<!-- HERO -->`)

```html
<section class="hero" id="hero">
  <div class="hero__bg-pattern"></div>
  <div class="container hero__inner">
    <div class="hero__content fade-in">
      <div class="hero__badge">Desde 1984 · Guarulhos, SP</div>
      <h1 class="hero__title">40 Anos<br><span class="hero__title-accent">Movendo o Brasil</span></h1>
      <div class="hero__divider"></div>
      <p class="hero__desc">Logística dedicada para grandes indústrias. Especialistas no transporte de produtos de higiene e papel em todo o território nacional.</p>
      <div class="hero__actions">
        <a href="#sobre" class="btn btn-primary">Conheça a Empresa</a>
        <a href="#trabalhe" class="btn btn-outline">Trabalhe Conosco</a>
      </div>
    </div>
    <div class="hero__visual fade-in">
      <div class="hero__card">
        <svg class="hero__card-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="4" y="28" width="44" height="22" rx="3" fill="#1363DF" opacity="0.9"/>
          <rect x="4" y="28" width="12" height="22" rx="3" fill="#1363DF"/>
          <rect x="48" y="36" width="12" height="14" rx="2" fill="#C9A844"/>
          <circle cx="14" cy="52" r="5" fill="#0B2545" stroke="#E8F0FE" stroke-width="2"/>
          <circle cx="46" cy="52" r="5" fill="#0B2545" stroke="#E8F0FE" stroke-width="2"/>
          <rect x="8" y="20" width="28" height="10" rx="2" fill="#1363DF" opacity="0.5"/>
          <line x1="0" y1="50" x2="60" y2="50" stroke="#E8F0FE" stroke-width="1.5" opacity="0.3"/>
        </svg>
        <div class="hero__card-stat">+4M</div>
        <div class="hero__card-label">toneladas transportadas</div>
      </div>
    </div>
  </div>
  <div class="hero__scroll-hint" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS do hero em `css/main.css`**

```css
/* ========================
   HERO
======================== */
.hero {
  min-height: 100vh;
  background: var(--azul-profundo);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-block: 8rem 5rem;
}

.hero__bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 40px,
      rgba(19, 99, 223, 0.06) 40px,
      rgba(19, 99, 223, 0.06) 41px
    ),
    radial-gradient(ellipse 80% 60% at 70% 50%, rgba(19, 99, 223, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(19, 99, 223, 0.2);
  border: 1px solid rgba(19, 99, 223, 0.4);
  color: #93bbff;
  font-size: var(--fs-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.375rem 0.875rem;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
}

.hero__title {
  font-size: var(--fs-display);
  font-weight: 900;
  color: var(--branco);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
}

.hero__title-accent {
  color: var(--azul-medio);
}

.hero__divider {
  width: 64px;
  height: 3px;
  background: var(--dourado);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.hero__desc {
  font-size: var(--fs-lg);
  color: rgba(255,255,255,0.75);
  line-height: 1.7;
  max-width: 48ch;
  margin-bottom: 2.5rem;
}

.hero__actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  text-align: center;
  backdrop-filter: blur(8px);
  max-width: 280px;
  width: 100%;
}

.hero__card-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1.25rem;
}

.hero__card-stat {
  font-size: var(--fs-5xl);
  font-weight: 900;
  color: var(--branco);
  letter-spacing: -0.04em;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.hero__card-label {
  font-size: var(--fs-sm);
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}

.hero__scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255,255,255,0.35);
  width: 24px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 768px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .hero__desc { max-width: 100%; }
  .hero__divider { margin-inline: auto; }

  .hero__actions {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .hero__badge { font-size: 0.65rem; }
}
```

- [ ] **Step 3: Verificar no browser**

Deve mostrar: hero de altura total, fundo azul escuro com padrão geométrico diagonal, título grande "40 Anos Movendo o Brasil", dois botões, card à direita com ícone de caminhão e "+4M toneladas". Em mobile, os elementos devem empilhar em coluna centralizada.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção hero com padrão geométrico CSS e card de destaque"
```

---

## Task 5: Seção de Números (Contadores)

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`
- Modify: `js/main.js`

- [ ] **Step 1: Adicionar HTML dos números em `index.html`** (substituir `<!-- NÚMEROS -->`)

```html
<section class="numeros" id="numeros">
  <div class="container">
    <div class="numeros__grid">
      <div class="numeros__item fade-in">
        <div class="numeros__valor" data-target="40" data-suffix=" anos">0</div>
        <div class="numeros__label">de experiência no mercado</div>
      </div>
      <div class="numeros__item fade-in">
        <div class="numeros__valor" data-target="50" data-prefix="+" data-suffix=" veículos">0</div>
        <div class="numeros__label">na frota ativa</div>
      </div>
      <div class="numeros__item fade-in">
        <div class="numeros__valor" data-target="500" data-prefix="+" data-suffix=" entregas">0</div>
        <div class="numeros__label">realizadas por mês</div>
      </div>
      <div class="numeros__item fade-in">
        <div class="numeros__valor" data-target="4" data-prefix="+" data-suffix="M ton">0</div>
        <div class="numeros__label">toneladas transportadas</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS dos números em `css/main.css`**

```css
/* ========================
   NÚMEROS
======================== */
.numeros {
  background: var(--branco);
  padding-block: 4rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.numeros__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
}

.numeros__item {
  text-align: center;
  padding: 2rem 1rem;
  border-radius: var(--radius);
  transition: background var(--transition);
}

.numeros__item:hover {
  background: var(--azul-claro);
}

.numeros__valor {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: var(--azul-medio);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.numeros__label {
  font-size: var(--fs-sm);
  color: var(--cinza-texto);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

@media (max-width: 768px) {
  .numeros__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .numeros__grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Implementar `initCounters` em `js/main.js`**

```js
function initCounters() {
  const counters = document.querySelectorAll('[data-target]');

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
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
```

- [ ] **Step 4: Verificar no browser**

Rolar até a seção de números. Os contadores devem animar de 0 até o valor alvo com easing suave ao entrar na viewport. Em mobile (< 768px) devem ficar em grid 2x2.

- [ ] **Step 5: Commit**

```bash
git add index.html css/main.css js/main.js
git commit -m "feat: seção de números com contadores animados via IntersectionObserver"
```

---

## Task 6: Seção Sobre

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML da seção Sobre em `index.html`** (substituir `<!-- SOBRE -->`)

```html
<section class="sobre" id="sobre">
  <div class="container sobre__inner">
    <div class="sobre__content fade-in">
      <span class="section-label">Nossa História</span>
      <h2 class="section-title">Décadas de<br>Comprometimento Logístico</h2>
      <p class="section-desc">Fundada em 1984, a Joaleria Transportes nasceu em Guarulhos com uma missão clara: entregar com segurança, pontualidade e responsabilidade.</p>
      <p style="margin-top: 1rem; color: var(--cinza-texto); line-height: 1.7;">Hoje somos parceiros estratégicos da <strong>Suzano S.A.</strong>, maior produtora de celulose do mundo, responsáveis pela distribuição nacional de produtos de higiene e papel — de papel higiênico a guardanapos, de papel toalha a fraldas — chegando a todos os estados brasileiros.</p>
      <div class="sobre__tags">
        <span class="sobre__tag">Carga Fracionada</span>
        <span class="sobre__tag">Distribuição Nacional</span>
        <span class="sobre__tag">Produtos de Higiene</span>
        <span class="sobre__tag">Papel &amp; Tissue</span>
        <span class="sobre__tag">Logística Dedicada</span>
      </div>
    </div>
    <div class="sobre__visual fade-in" aria-hidden="true">
      <div class="sobre__placeholder">
        <svg viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="240" rx="16" fill="#E8F0FE"/>
          <rect x="24" y="140" width="272" height="60" rx="8" fill="#1363DF" opacity="0.15"/>
          <rect x="24" y="140" width="80" height="60" rx="8" fill="#1363DF" opacity="0.3"/>
          <rect x="48" y="100" width="200" height="44" rx="6" fill="#0B2545" opacity="0.12"/>
          <circle cx="52" cy="204" r="22" fill="#0B2545" opacity="0.2"/>
          <circle cx="246" cy="204" r="22" fill="#0B2545" opacity="0.2"/>
          <rect x="200" y="124" width="56" height="44" rx="4" fill="#C9A844" opacity="0.4"/>
          <text x="50%" y="68" text-anchor="middle" font-family="system-ui" font-size="13" font-weight="600" fill="#0B2545" opacity="0.5">Frota Joaleria Transportes</text>
        </svg>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS da seção Sobre em `css/main.css`**

```css
/* ========================
   SOBRE
======================== */
.sobre {
  background: var(--cinza-claro);
}

.sobre__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.sobre__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.75rem;
}

.sobre__tag {
  background: var(--azul-claro);
  color: var(--azul-medio);
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.375rem 0.875rem;
  border-radius: 2rem;
  border: 1px solid rgba(19, 99, 223, 0.2);
}

.sobre__placeholder {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.sobre__placeholder svg {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .sobre__inner {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Seção deve mostrar: texto à esquerda com história, tags coloridas, e placeholder SVG de caminhão à direita. Em mobile ambos ficam em coluna.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção sobre com histórico e parceria Suzano"
```

---

## Task 7: Seção Serviços

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML dos serviços em `index.html`** (substituir `<!-- SERVIÇOS -->`)

```html
<section class="servicos" id="servicos">
  <div class="container">
    <div class="servicos__header fade-in">
      <span class="section-label">O que fazemos</span>
      <h2 class="section-title">Soluções Logísticas<br>Completas</h2>
    </div>
    <div class="servicos__grid">
      <div class="servico-card fade-in">
        <div class="servico-card__icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="18" width="34" height="18" rx="3" fill="currentColor" opacity="0.15"/>
            <rect x="2" y="18" width="10" height="18" rx="3" fill="currentColor" opacity="0.6"/>
            <rect x="36" y="24" width="10" height="12" rx="2" fill="currentColor" opacity="0.5"/>
            <circle cx="10" cy="38" r="4" fill="currentColor"/>
            <circle cx="32" cy="38" r="4" fill="currentColor"/>
            <circle cx="42" cy="38" r="4" fill="currentColor"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Transporte de Carga</h3>
        <p class="servico-card__desc">Frete dedicado com frota própria para cargas de médio e grande porte em todo o território nacional.</p>
      </div>
      <div class="servico-card fade-in">
        <div class="servico-card__icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2" opacity="0.3"/>
            <path d="M24 6 C24 6 14 14 14 24 C14 34 24 42 24 42 C24 42 34 34 34 24 C34 14 24 6 24 6Z" stroke="currentColor" stroke-width="2" opacity="0.5"/>
            <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" stroke-width="2" opacity="0.4"/>
            <circle cx="24" cy="24" r="3" fill="currentColor"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Distribuição Nacional</h3>
        <p class="servico-card__desc">Capilaridade em todos os 26 estados e Distrito Federal, com rotas otimizadas e prazos cumpridos.</p>
      </div>
      <div class="servico-card fade-in">
        <div class="servico-card__icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" stroke-width="2" opacity="0.4"/>
            <rect x="14" y="16" width="8" height="10" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="26" y="16" width="8" height="10" rx="1" fill="currentColor" opacity="0.5"/>
            <rect x="14" y="30" width="20" height="2" rx="1" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Logística de Higiene &amp; Papel</h3>
        <p class="servico-card__desc">Especialistas no manuseio e transporte de produtos tissue: papel higiênico, toalhas, guardanapos e fraldas.</p>
      </div>
      <div class="servico-card fade-in">
        <div class="servico-card__icon">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2" opacity="0.35"/>
            <circle cx="24" cy="24" r="6" fill="currentColor" opacity="0.6"/>
            <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
            <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Monitoramento de Frota</h3>
        <p class="servico-card__desc">Rastreamento em tempo real de toda a frota, garantindo segurança da carga e visibilidade do status das entregas.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS dos serviços em `css/main.css`**

```css
/* ========================
   SERVIÇOS
======================== */
.servicos {
  background: var(--branco);
}

.servicos__header {
  text-align: center;
  margin-bottom: 3rem;
}

.servicos__header .section-label { display: block; }

.servicos__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap);
}

.servico-card {
  background: var(--cinza-claro);
  border-radius: var(--radius-lg);
  padding: 2rem 1.5rem;
  border: 1px solid transparent;
  transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
}

.servico-card:hover {
  border-color: var(--azul-medio);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.servico-card__icon {
  width: 52px;
  height: 52px;
  background: var(--azul-claro);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  color: var(--azul-medio);
}

.servico-card__icon svg {
  width: 28px;
  height: 28px;
}

.servico-card__title {
  font-size: var(--fs-lg);
  font-weight: 700;
  color: var(--azul-profundo);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.servico-card__desc {
  font-size: var(--fs-sm);
  color: var(--cinza-texto);
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .servicos__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .servicos__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verificar no browser**

4 cards com ícones SVG, hover com borda azul e elevação. Em tablet: 2 colunas. Em mobile: 1 coluna.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção de serviços com 4 cards e ícones SVG"
```

---

## Task 8: Seção Diferenciais

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML dos diferenciais em `index.html`** (substituir `<!-- DIFERENCIAIS -->`)

```html
<section class="diferenciais" id="diferenciais">
  <div class="container">
    <div class="diferenciais__header fade-in">
      <span class="section-label">Por que nos escolher</span>
      <h2 class="section-title">Nossos Diferenciais</h2>
    </div>
    <div class="diferenciais__grid">
      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="28" fill="#1363DF" opacity="0.12"/>
            <path d="M32 12 L32 32 L44 44" stroke="#1363DF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="32" cy="32" r="4" fill="#1363DF"/>
          </svg>
        </div>
        <h3 class="diferencial__title">40 Anos de Experiência</h3>
        <p class="diferencial__desc">Quatro décadas de know-how logístico acumulado. Conhecemos cada rota, cada desafio e cada solução do transporte brasileiro.</p>
      </div>
      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="28" fill="#1363DF" opacity="0.12"/>
            <ellipse cx="32" cy="32" rx="18" ry="22" stroke="#1363DF" stroke-width="2.5" opacity="0.6"/>
            <line x1="10" y1="32" x2="54" y2="32" stroke="#1363DF" stroke-width="2.5" opacity="0.6"/>
            <circle cx="32" cy="32" r="4" fill="#1363DF"/>
          </svg>
        </div>
        <h3 class="diferencial__title">Cobertura Nacional</h3>
        <p class="diferencial__desc">Presença em todos os 26 estados e no Distrito Federal. Do Oiapoque ao Chuí, nossas rotas cobrem o Brasil inteiro.</p>
      </div>
      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="28" fill="#1363DF" opacity="0.12"/>
            <path d="M20 32 L28 40 L44 24" stroke="#1363DF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="diferencial__title">Parceria de Confiança</h3>
        <p class="diferencial__desc">Parceiros estratégicos da Suzano S.A. há décadas. Construímos relações de longo prazo baseadas em resultado e confiabilidade.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS dos diferenciais em `css/main.css`**

```css
/* ========================
   DIFERENCIAIS
======================== */
.diferenciais {
  background: var(--azul-claro);
}

.diferenciais__header {
  text-align: center;
  margin-bottom: 3rem;
}

.diferenciais__header .section-label { display: block; }

.diferenciais__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.diferencial {
  text-align: center;
  padding: 2.5rem 2rem;
  background: var(--branco);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition), transform var(--transition);
}

.diferencial:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.diferencial__icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
}

.diferencial__icon svg {
  width: 100%;
  height: 100%;
}

.diferencial__title {
  font-size: var(--fs-xl);
  font-weight: 800;
  color: var(--azul-profundo);
  margin-bottom: 0.875rem;
}

.diferencial__desc {
  font-size: var(--fs-sm);
  color: var(--cinza-texto);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .diferenciais__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verificar no browser**

3 cards brancos sobre fundo azul claro, cada um com ícone SVG grande, título e descrição. Hover com elevação.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção diferenciais com 3 pilares e ícones SVG"
```

---

## Task 9: Seção Área de Atuação (Mapa SVG do Brasil)

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML da seção de atuação em `index.html`** (substituir `<!-- ÁREA DE ATUAÇÃO -->`)

```html
<section class="atuacao" id="atuacao">
  <div class="container atuacao__inner">
    <div class="atuacao__content fade-in">
      <span class="section-label" style="color: #93bbff;">Onde atuamos</span>
      <h2 class="section-title section-title--white">Brasil Inteiro,<br>Sem Exceção</h2>
      <p class="section-desc section-desc--white">Nossa frota percorre todos os estados brasileiros, garantindo que os produtos cheguem a qualquer destino — do Norte ao Sul, do Nordeste ao Centro-Oeste.</p>
      <ul class="atuacao__lista">
        <li>✓ Todos os 26 estados + Distrito Federal</li>
        <li>✓ Capitais e interior</li>
        <li>✓ Centros de distribuição e varejo</li>
        <li>✓ Rotas programadas e coletas especiais</li>
      </ul>
    </div>
    <div class="atuacao__mapa fade-in" aria-label="Mapa do Brasil com área de atuação">
      <svg class="mapa-brasil" viewBox="0 0 600 660" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa do Brasil">
        <title>Área de atuação — Brasil inteiro</title>
        <!-- Mapa simplificado do Brasil com estados -->
        <!-- AM -->
        <path class="estado" d="M 110,80 L 185,65 L 225,80 L 240,120 L 225,155 L 195,170 L 160,165 L 130,145 L 105,120 Z" />
        <!-- PA -->
        <path class="estado" d="M 225,80 L 300,70 L 340,90 L 345,130 L 320,155 L 285,165 L 250,160 L 225,155 L 240,120 Z" />
        <!-- RR -->
        <path class="estado" d="M 130,40 L 175,30 L 200,50 L 185,65 L 110,80 Z" />
        <!-- AP -->
        <path class="estado" d="M 300,40 L 340,35 L 355,65 L 340,90 L 300,70 Z" />
        <!-- MA -->
        <path class="estado" d="M 340,90 L 395,85 L 400,115 L 375,140 L 345,130 Z" />
        <!-- PI -->
        <path class="estado" d="M 395,85 L 430,90 L 435,125 L 405,145 L 375,140 L 400,115 Z" />
        <!-- CE -->
        <path class="estado" d="M 430,90 L 465,95 L 460,125 L 435,125 Z" />
        <!-- RN -->
        <path class="estado" d="M 465,95 L 495,100 L 490,120 L 460,125 Z" />
        <!-- PB -->
        <path class="estado" d="M 460,125 L 490,120 L 488,140 L 460,145 Z" />
        <!-- PE -->
        <path class="estado" d="M 405,145 L 460,145 L 458,160 L 405,162 Z" />
        <!-- AL -->
        <path class="estado" d="M 458,160 L 480,158 L 478,175 L 456,175 Z" />
        <!-- SE -->
        <path class="estado" d="M 456,175 L 478,175 L 475,190 L 453,192 Z" />
        <!-- BA -->
        <path class="estado" d="M 345,130 L 405,145 L 405,162 L 453,192 L 450,240 L 410,280 L 375,285 L 340,265 L 320,230 L 320,155 Z" />
        <!-- TO -->
        <path class="estado" d="M 320,155 L 345,130 L 375,140 L 375,200 L 350,230 L 320,230 Z" />
        <!-- GO -->
        <path class="estado" d="M 285,225 L 320,230 L 350,230 L 360,265 L 340,295 L 305,300 L 275,285 L 270,255 Z" />
        <!-- DF -->
        <path class="estado" d="M 315,255 L 328,250 L 335,263 L 322,268 Z" />
        <!-- MG -->
        <path class="estado" d="M 340,265 L 375,285 L 410,280 L 425,310 L 415,350 L 380,370 L 345,365 L 310,345 L 300,310 L 305,300 L 340,295 L 360,265 Z" />
        <!-- ES -->
        <path class="estado" d="M 415,350 L 440,340 L 445,375 L 415,380 Z" />
        <!-- RJ -->
        <path class="estado" d="M 380,370 L 415,380 L 408,405 L 375,395 Z" />
        <!-- SP -->
        <path class="estado" d="M 300,310 L 345,365 L 380,370 L 375,395 L 340,415 L 305,400 L 275,370 L 270,335 Z" />
        <!-- PR -->
        <path class="estado" d="M 270,335 L 305,400 L 290,430 L 255,430 L 235,400 L 245,365 Z" />
        <!-- SC -->
        <path class="estado" d="M 255,430 L 290,430 L 278,460 L 250,460 Z" />
        <!-- RS -->
        <path class="estado" d="M 250,460 L 278,460 L 275,510 L 240,530 L 215,510 L 220,475 Z" />
        <!-- MS -->
        <path class="estado" d="M 245,270 L 270,255 L 275,285 L 270,335 L 245,365 L 215,345 L 205,305 L 220,270 Z" />
        <!-- MT -->
        <path class="estado" d="M 165,165 L 225,155 L 285,165 L 285,225 L 270,255 L 245,270 L 220,270 L 185,240 L 160,210 L 155,175 Z" />
        <!-- RO -->
        <path class="estado" d="M 130,145 L 160,165 L 155,175 L 160,210 L 140,220 L 110,200 L 105,165 Z" />
        <!-- AC -->
        <path class="estado" d="M 60,155 L 105,120 L 130,145 L 105,165 L 110,200 L 80,195 L 55,175 Z" />
        <!-- Legenda -->
        <rect x="20" y="620" width="16" height="16" rx="3" fill="#1363DF" opacity="0.8"/>
        <text x="42" y="633" font-family="system-ui" font-size="13" fill="rgba(255,255,255,0.7)">Área de atuação</text>
      </svg>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS da seção de atuação em `css/main.css`**

```css
/* ========================
   ÁREA DE ATUAÇÃO
======================== */
.atuacao {
  background: var(--azul-profundo);
}

.atuacao__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.atuacao__lista {
  margin-top: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.atuacao__lista li {
  color: rgba(255,255,255,0.75);
  font-size: var(--fs-sm);
  font-weight: 500;
}

.atuacao__mapa {
  display: flex;
  justify-content: center;
}

.mapa-brasil {
  width: 100%;
  max-width: 420px;
  height: auto;
  filter: drop-shadow(0 8px 32px rgba(19,99,223,0.3));
}

.estado {
  fill: #1363DF;
  fill-opacity: 0.7;
  stroke: rgba(255,255,255,0.25);
  stroke-width: 1.5;
  transition: fill-opacity var(--transition);
}

.estado:hover {
  fill-opacity: 1;
  cursor: default;
}

@media (max-width: 768px) {
  .atuacao__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .mapa-brasil { max-width: 320px; }
}
```

- [ ] **Step 3: Verificar no browser**

Seção escura com mapa SVG do Brasil à direita, estados preenchidos em azul elétrico. Hover nos estados deve intensificar a cor. Lista de bullets à esquerda.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção área de atuação com mapa SVG inline do Brasil"
```

---

## Task 10: Seção Trabalhe Conosco

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML da seção em `index.html`** (substituir `<!-- TRABALHE CONOSCO -->`)

```html
<section class="trabalhe" id="trabalhe">
  <div class="container">
    <div class="trabalhe__header fade-in">
      <span class="section-label">Faça parte do time</span>
      <h2 class="section-title">Trabalhe Conosco</h2>
      <p class="section-desc">Procuramos profissionais comprometidos com excelência. Confira as oportunidades disponíveis.</p>
    </div>
    <div class="trabalhe__grid">
      <div class="trabalhe__card fade-in">
        <div class="trabalhe__card-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="18" width="34" height="18" rx="3" fill="#1363DF" opacity="0.2"/>
            <rect x="2" y="18" width="10" height="18" rx="3" fill="#1363DF" opacity="0.5"/>
            <rect x="36" y="24" width="10" height="12" rx="2" fill="#1363DF" opacity="0.4"/>
            <circle cx="10" cy="38" r="4" fill="#1363DF"/>
            <circle cx="32" cy="38" r="4" fill="#1363DF"/>
            <circle cx="42" cy="38" r="4" fill="#1363DF"/>
          </svg>
        </div>
        <h3 class="trabalhe__card-title">Motoristas</h3>
        <p class="trabalhe__card-desc">Buscamos motoristas com CNH categoria E, experiência em transporte de carga e disponibilidade para viagens.</p>
        <ul class="trabalhe__card-lista">
          <li>CNH categoria C, D ou E</li>
          <li>Experiência em cargas</li>
          <li>Disponibilidade para viagens</li>
        </ul>
        <a href="mailto:administrativo@joaleria.com?subject=Currículo - Motorista" class="btn btn-primary">Enviar Currículo</a>
      </div>
      <div class="trabalhe__card fade-in">
        <div class="trabalhe__card-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="8" width="32" height="32" rx="4" stroke="#1363DF" stroke-width="2" opacity="0.4"/>
            <line x1="16" y1="20" x2="32" y2="20" stroke="#1363DF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <line x1="16" y1="28" x2="26" y2="28" stroke="#1363DF" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
            <circle cx="36" cy="36" r="8" fill="#1363DF" opacity="0.15"/>
            <path d="M33 36 L36 39 L40 33" stroke="#1363DF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="trabalhe__card-title">Área Administrativa</h3>
        <p class="trabalhe__card-desc">Oportunidades em logística, roteirização, atendimento ao cliente, financeiro e operações.</p>
        <ul class="trabalhe__card-lista">
          <li>Ensino médio completo (mínimo)</li>
          <li>Conhecimento em informática</li>
          <li>Perfil colaborativo e dinâmico</li>
        </ul>
        <a href="mailto:administrativo@joaleria.com?subject=Currículo - Área Administrativa" class="btn btn-outline-dark">Enviar Currículo</a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS em `css/main.css`**

```css
/* ========================
   TRABALHE CONOSCO
======================== */
.trabalhe {
  background: var(--cinza-claro);
}

.trabalhe__header {
  text-align: center;
  margin-bottom: 3rem;
}

.trabalhe__header .section-label,
.trabalhe__header .section-desc {
  display: block;
  margin-inline: auto;
}

.trabalhe__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin-inline: auto;
}

.trabalhe__card {
  background: var(--branco);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.trabalhe__card-icon {
  width: 52px;
  height: 52px;
  background: var(--azul-claro);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.trabalhe__card-icon svg { width: 28px; height: 28px; }

.trabalhe__card-title {
  font-size: var(--fs-2xl);
  font-weight: 800;
  color: var(--azul-profundo);
}

.trabalhe__card-desc {
  font-size: var(--fs-sm);
  color: var(--cinza-texto);
  line-height: 1.6;
}

.trabalhe__card-lista {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  flex: 1;
}

.trabalhe__card-lista li {
  font-size: var(--fs-sm);
  color: var(--cinza-texto);
  padding-left: 1.25rem;
  position: relative;
}

.trabalhe__card-lista li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--azul-medio);
  font-weight: 700;
}

@media (max-width: 640px) {
  .trabalhe__grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 3: Verificar no browser**

2 cards lado a lado: Motoristas e Área Administrativa. Cada um com ícone, requisitos e botão de envio de currículo via mailto.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção trabalhe conosco com cards de motoristas e administrativo"
```

---

## Task 11: Seção Contato

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML do contato em `index.html`** (substituir `<!-- CONTATO -->`)

```html
<section class="contato" id="contato">
  <div class="container contato__inner">
    <div class="contato__info fade-in">
      <span class="section-label">Entre em contato</span>
      <h2 class="section-title">Fale com a Joaleria</h2>
      <p class="section-desc">Nossa equipe está pronta para atender você de segunda a sexta, das 8h às 18h.</p>
      <div class="contato__dados">
        <div class="contato__dado">
          <div class="contato__dado-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div>
            <strong>Endereço</strong>
            <p>Rua Rio Grande do Piauí, 228<br>Cidade Aracília — Guarulhos, SP<br>CEP 07250-250</p>
          </div>
        </div>
        <div class="contato__dado">
          <div class="contato__dado-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </div>
          <div>
            <strong>Telefones</strong>
            <p><a href="tel:+551124213822">(11) 2421-3822</a></p>
            <p><a href="tel:+5511947808480">(11) 94780-8480</a></p>
            <p><a href="tel:+5511978597689">(11) 97859-7689</a></p>
          </div>
        </div>
        <div class="contato__dado">
          <div class="contato__dado-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div>
            <strong>E-mail</strong>
            <p><a href="mailto:administrativo@joaleria.com">administrativo@joaleria.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="contato__form-wrap fade-in">
      <form class="contato__form" action="mailto:administrativo@joaleria.com" method="post" enctype="text/plain">
        <div class="form-group">
          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="Nome" placeholder="Seu nome" required />
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="Email" placeholder="seu@email.com" required />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" name="Telefone" placeholder="(11) 00000-0000" />
        </div>
        <div class="form-group">
          <label for="assunto">Assunto</label>
          <select id="assunto" name="Assunto">
            <option value="">Selecione...</option>
            <option value="Orçamento de Frete">Orçamento de Frete</option>
            <option value="Parceria Comercial">Parceria Comercial</option>
            <option value="Trabalhe Conosco">Trabalhe Conosco</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div class="form-group">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="Mensagem" rows="4" placeholder="Como podemos ajudar?" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">
          Enviar Mensagem
        </button>
      </form>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS do contato em `css/main.css`**

```css
/* ========================
   CONTATO
======================== */
.contato {
  background: var(--branco);
}

.contato__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.contato__dados {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.contato__dado {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contato__dado-icon {
  width: 40px;
  height: 40px;
  background: var(--azul-claro);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--azul-medio);
}

.contato__dado-icon svg { width: 18px; height: 18px; }

.contato__dado strong {
  display: block;
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--azul-profundo);
  margin-bottom: 0.25rem;
}

.contato__dado p, .contato__dado a {
  font-size: var(--fs-sm);
  color: var(--cinza-texto);
  line-height: 1.6;
}

.contato__dado a:hover { color: var(--azul-medio); }

/* Formulário */
.contato__form-wrap {
  background: var(--cinza-claro);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  border: 1px solid rgba(0,0,0,0.06);
}

.contato__form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.form-group label {
  font-size: var(--fs-sm);
  font-weight: 600;
  color: var(--azul-profundo);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 1.5px solid rgba(0,0,0,0.12);
  border-radius: 0.5rem;
  font-size: var(--fs-sm);
  color: var(--azul-profundo);
  background: var(--branco);
  transition: border-color var(--transition), box-shadow var(--transition);
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--azul-medio);
  box-shadow: 0 0 0 3px rgba(19,99,223,0.12);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #a0aec0;
}

@media (max-width: 768px) {
  .contato__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Seção com dados de contato à esquerda (endereço, 3 telefones com links `tel:`, email com `mailto:`) e formulário à direita. Submeter o form deve abrir cliente de email.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: seção contato com dados reais e formulário mailto"
```

---

## Task 12: Footer

**Files:**
- Modify: `index.html`
- Modify: `css/main.css`

- [ ] **Step 1: Adicionar HTML do footer em `index.html`** (substituir `<!-- FOOTER -->`)

```html
<footer class="footer">
  <div class="container footer__inner">
    <div class="footer__brand">
      <div class="footer__logo">
        <span class="nav__logo-icon">J</span>
        <span class="footer__logo-text">Joaleria <strong>Transportes</strong></span>
      </div>
      <p class="footer__tagline">40 anos movendo o Brasil com confiança e dedicação.</p>
      <address class="footer__address">
        Rua Rio Grande do Piauí, 228<br>
        Cidade Aracília — Guarulhos, SP<br>
        CEP 07250-250
      </address>
    </div>
    <div class="footer__nav">
      <h4 class="footer__nav-title">Navegação</h4>
      <ul>
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#diferenciais">Diferenciais</a></li>
        <li><a href="#atuacao">Área de Atuação</a></li>
        <li><a href="#trabalhe">Trabalhe Conosco</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
    <div class="footer__contato">
      <h4 class="footer__nav-title">Contato</h4>
      <ul>
        <li><a href="tel:+551124213822">(11) 2421-3822</a></li>
        <li><a href="tel:+5511947808480">(11) 94780-8480</a></li>
        <li><a href="tel:+5511978597689">(11) 97859-7689</a></li>
        <li><a href="mailto:administrativo@joaleria.com">administrativo@joaleria.com</a></li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <p>&copy; 2026 Joaleria Transportes. Todos os direitos reservados.</p>
      <p>Parceiro logístico da <strong>Suzano S.A.</strong></p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Adicionar CSS do footer em `css/main.css`**

```css
/* ========================
   FOOTER
======================== */
.footer {
  background: var(--azul-profundo);
  color: rgba(255,255,255,0.7);
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  padding-block: 4rem;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
}

.footer__logo-text {
  font-size: var(--fs-sm);
  color: var(--branco);
  font-weight: 400;
}

.footer__logo-text strong { font-weight: 800; }

.footer__tagline {
  font-size: var(--fs-sm);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  max-width: 32ch;
}

.footer__address {
  font-size: var(--fs-xs);
  line-height: 1.7;
  font-style: normal;
  color: rgba(255,255,255,0.5);
}

.footer__nav-title {
  font-size: var(--fs-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--branco);
  margin-bottom: 1rem;
}

.footer__nav ul,
.footer__contato ul {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.footer__nav a,
.footer__contato a {
  font-size: var(--fs-sm);
  color: rgba(255,255,255,0.6);
  transition: color var(--transition);
}

.footer__nav a:hover,
.footer__contato a:hover {
  color: var(--branco);
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-block: 1.25rem;
}

.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: var(--fs-xs);
  flex-wrap: wrap;
}

.footer__bottom strong { color: rgba(255,255,255,0.8); }

@media (max-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-block: 3rem;
  }

  .footer__bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Footer escuro com 3 colunas: marca + endereço, links de navegação, contato. Barra inferior com copyright e menção à Suzano.

- [ ] **Step 4: Commit**

```bash
git add index.html css/main.css
git commit -m "feat: footer com navegação, contato e copyright"
```

---

## Task 13: Animações Fade-In (IntersectionObserver)

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1: Implementar `initFadeIn` em `js/main.js`**

```js
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger delay baseado na posição entre irmãos
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
```

- [ ] **Step 2: Verificar no browser**

Rolar a página devagar. Cada seção deve aparecer com fade-in + slide-up suave ao entrar na viewport. Cards em grid devem aparecer com leve stagger (um após o outro).

- [ ] **Step 3: Commit**

```bash
git add js/main.js
git commit -m "feat: animações fade-in com stagger via IntersectionObserver"
```

---

## Task 14: Responsividade — Revisão Final e Polimento

**Files:**
- Modify: `css/main.css`
- Modify: `index.html`

- [ ] **Step 1: Adicionar `padding-top` no body para compensar nav fixa**

No início de `css/main.css`, logo após os estilos do `body`:

```css
body {
  padding-top: 0; /* nav fixa sobrepõe o hero por design */
}

/* Compensar nav nas seções âncora */
:target {
  scroll-margin-top: 80px;
}
```

- [ ] **Step 2: Adicionar meta tag de tema no `<head>` do `index.html`**

```html
<meta name="theme-color" content="#0B2545" />
<meta property="og:title" content="Joaleria Transportes — 40 Anos Movendo o Brasil" />
<meta property="og:description" content="Transportadora especializada em logística de produtos de higiene e papel com cobertura nacional." />
<meta property="og:type" content="website" />
```

- [ ] **Step 3: Testar em 375px (mobile iPhone SE)**

Abrir DevTools → toggle device toolbar → iPhone SE (375px). Verificar:
- [ ] Nav hambúrguer aparece e funciona
- [ ] Hero em coluna única, texto centralizado
- [ ] Cards de serviço em 1 coluna
- [ ] Mapa SVG ocupa largura total
- [ ] Formulário em coluna única
- [ ] Footer em coluna única

- [ ] **Step 4: Testar em 768px (tablet)**

Verificar:
- [ ] Cards de serviço em 2 colunas
- [ ] Diferenciais em 1 coluna
- [ ] Seção Sobre em coluna única (conteúdo + visual empilhados)

- [ ] **Step 5: Testar em 1440px (desktop wide)**

Verificar:
- [ ] Container máximo de 1200px centralizado
- [ ] Hero com 2 colunas
- [ ] Serviços em 4 colunas
- [ ] Diferenciais em 3 colunas
- [ ] Footer em 3 colunas

- [ ] **Step 6: Commit final**

```bash
git add index.html css/main.css
git commit -m "feat: polimento responsivo — scroll-margin, og-tags e revisão mobile"
```

---

## Task 15: Commit Final e Verificação

**Files:** Todos

- [ ] **Step 1: Revisar todos os links e contatos**

Verificar no browser:
- `tel:` links funcionam no mobile
- `mailto:` do formulário e dos botões "Enviar Currículo" abre cliente de email
- Links de navegação da nav e do footer levam às seções corretas
- Contadores animam ao fazer scroll pela primeira vez

- [ ] **Step 2: Verificar console do browser**

Abrir DevTools → Console → garantir zero erros JS e zero erros de recurso (404).

- [ ] **Step 3: Commit final**

```bash
git add .
git status
git commit -m "feat: site institucional Joaleria Transportes — versão inicial completa" --allow-empty
```

- [ ] **Step 4: Verificar estrutura final de arquivos**

```
joaleria-site/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   └── main.css
├── js/
│   └── main.js
├── assets/
│   └── favicon.svg
└── docs/
    └── superpowers/
        ├── specs/2026-08-10-joaleria-transportes-site-design.md
        └── plans/2026-08-10-joaleria-site.md
```

---

## Spec Coverage Check

| Requisito do Spec | Task |
|-------------------|------|
| Nav fixa com blur no scroll | Task 3 |
| Hero com padrão geométrico CSS | Task 4 |
| Contadores animados (40 anos, veículos, entregas, 4M ton) | Task 5 |
| Seção Sobre com parceria Suzano | Task 6 |
| 4 cards de serviço com ícones SVG | Task 7 |
| 3 diferenciais em cards | Task 8 |
| Mapa SVG do Brasil inline | Task 9 |
| Trabalhe Conosco (motoristas + administrativo) | Task 10 |
| Contato com dados reais + formulário mailto | Task 11 |
| Footer com CNPJ/endereço/telefones | Task 12 |
| Fade-in via IntersectionObserver | Task 13 |
| Mobile-first responsivo | Task 14 |
| Zero dependências externas | Todas |
| GitHub Pages compatível | Todas |
