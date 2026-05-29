import {
  SITE,
  EDUCATION,
  SKILLS,
  EXPERIENCE,
  PROJECTS,
} from './content.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

let lastFocus = null;
let activeFilter = 'all';

/* ——— Theme ——— */
function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const btn = $('#theme-toggle');
  if (!btn) return;
  const isDark = theme === 'dark';
  btn.setAttribute('aria-pressed', String(isDark));
  btn.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
  btn.innerHTML = isDark ? iconSun() : iconMoon();
}

function iconMoon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}

function iconSun() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
}

function iconMenu() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`;
}

function iconPlay() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>`;
}

/* ——— Modal ——— */
const modal = $('#modal');
const modalTitle = $('#modal-title');
const modalMeta = $('#modal-meta');
const modalBody = $('#modal-body');
const modalMedia = $('#modal-media');
const modalLinks = $('#modal-links');

function trapFocus(panel) {
  const focusable = panel.querySelectorAll(
    'a[href], button:not([disabled]), video, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function onKey(e) {
    if (e.key !== 'Tab') return;
    if (focusable.length === 0) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }

  panel.addEventListener('keydown', onKey);
  return () => panel.removeEventListener('keydown', onKey);
}

let removeTrap = null;

function stopVideo() {
  const video = modalMedia?.querySelector('video');
  if (video) {
    video.pause();
    video.removeAttribute('src');
    video.load();
  }
  modalMedia.innerHTML = '';
}

function openModal({ title, meta, bodyHtml, media, links = [] }) {
  lastFocus = document.activeElement;
  modalTitle.textContent = title;
  modalMeta.textContent = meta || '';
  modalMeta.hidden = !meta;
  modalBody.innerHTML = bodyHtml || '';
  stopVideo();

  if (media?.type === 'video') {
    const video = document.createElement('video');
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', media.alt || title);
    const source = document.createElement('source');
    source.src = media.src;
    source.type = media.mimeType || 'video/mp4';
    video.appendChild(source);
    video.addEventListener('error', () => {
      const note = document.createElement('p');
      note.textContent =
        'Video could not be loaded. Ensure the file exists at ' + media.src;
      note.setAttribute('role', 'status');
      modalBody.appendChild(note);
    });
    modalMedia.appendChild(video);
    modalMedia.hidden = false;
  } else if (media?.type === 'image') {
    const img = document.createElement('img');
    img.src = media.src;
    img.alt = media.alt || title;
    img.loading = 'lazy';
    img.decoding = 'async';
    modalMedia.appendChild(img);
    modalMedia.hidden = false;
  } else {
    modalMedia.hidden = true;
  }

  modalLinks.innerHTML = '';
  links.forEach((link) => {
    const a = document.createElement('a');
    a.className = 'btn btn-primary';
    a.href = link.href;
    a.textContent = link.label;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    modalLinks.appendChild(a);
  });
  modalLinks.hidden = links.length === 0;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  removeTrap = trapFocus($('.modal__panel', modal));
  $('#modal-close')?.focus();
}

function closeModal() {
  if (modal.hidden) return;
  stopVideo();
  modal.hidden = true;
  document.body.style.overflow = '';
  removeTrap?.();
  removeTrap = null;
  lastFocus?.focus();
}

function openExperience(id) {
  const exp = EXPERIENCE.find((e) => e.id === id);
  if (!exp) return;
  openModal({
    title: `${exp.role} — ${exp.company}`,
    meta: exp.meta,
    bodyHtml: `<ul>${exp.highlights.map((h) => `<li>${h}</li>`).join('')}</ul>`,
  });
}

function openProject(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  openModal({
    title: p.title,
    meta: p.type.charAt(0).toUpperCase() + p.type.slice(1),
    bodyHtml: `<p>${p.description}</p>`,
    media: p.media,
    links: p.links || [],
  });
}

/* ——— Render ——— */
function renderExperience() {
  const root = $('#experience-list');
  if (!root) return;
  root.innerHTML = `<ul class="timeline-list">${EXPERIENCE.map(
    (exp) => `
    <li>
      <button type="button" class="glass timeline-card reveal" data-exp="${exp.id}">
        <h3>${exp.role}</h3>
        <p class="company">${exp.company}</p>
        <p class="meta">${exp.meta}</p>
        <p class="hint">View details</p>
      </button>
    </li>
  `
  ).join('')}</ul>`;
  root.querySelectorAll('[data-exp]').forEach((btn) => {
    btn.addEventListener('click', () => openExperience(btn.dataset.exp));
  });
}

function projectThumb(p) {
  if (p.media?.type === 'video') {
    return `<div class="project-card__thumb project-card__thumb--video">${iconPlay()}</div>`;
  }
  if (p.media?.type === 'image') {
    return `<div class="project-card__thumb"><img src="${p.media.src}" alt="" loading="lazy" decoding="async" width="400" height="250"></div>`;
  }
  return '';
}

function renderProjects() {
  const root = $('#projects-grid');
  if (!root) return;
  root.innerHTML = PROJECTS.map(
    (p) => `
    <button type="button" class="glass project-card reveal${p.featured ? ' featured' : ''}" data-project="${p.id}" data-type="${p.type}">
      ${projectThumb(p)}
      <div class="project-card__body">
        <span class="project-card__type">${p.type}</span>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
      </div>
    </button>
  `
  ).join('');
  root.querySelectorAll('[data-project]').forEach((btn) => {
    btn.addEventListener('click', () => openProject(btn.dataset.project));
  });
  applyProjectFilter();
}

function applyProjectFilter() {
  $$('.project-card', $('#projects-grid')).forEach((card) => {
    const type = card.dataset.type;
    const show = activeFilter === 'all' || type === activeFilter;
    card.classList.toggle('is-hidden', !show);
  });
}

function renderSkills() {
  const root = $('#skills-grid');
  if (!root) return;
  root.innerHTML = SKILLS.map(
    (group) => `
    <div class="glass skill-group reveal">
      <h3>${group.label}</h3>
      <div class="chips">
        ${group.items.map((item) => `<span class="chip">${item}</span>`).join('')}
      </div>
    </div>
  `
  ).join('');
}

function renderEducation() {
  const root = $('#education-grid');
  if (!root) return;
  root.innerHTML = EDUCATION.map(
    (edu) => `
    <article class="glass edu-card reveal">
      <h3>${edu.school}</h3>
      <p>${edu.degree}</p>
      <p class="period">${edu.period}</p>
    </article>
  `
  ).join('');
}

function renderJsonLd() {
  const script = $('#json-ld');
  if (!script) return;
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    jobTitle: SITE.role,
    email: SITE.email,
    url: SITE.canonicalUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    sameAs: [SITE.github],
  });
}

/* ——— Nav ——— */
function closeMobileNav() {
  const nav = $('#nav-mobile');
  const toggle = $('#menu-toggle');
  nav?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}

function openMobileNav() {
  const nav = $('#nav-mobile');
  const toggle = $('#menu-toggle');
  nav?.classList.add('is-open');
  toggle?.setAttribute('aria-expanded', 'true');
}

function initNav() {
  const toggle = $('#menu-toggle');
  const nav = $('#nav-mobile');

  toggle?.addEventListener('click', () => {
    const open = nav?.classList.contains('is-open');
    if (open) closeMobileNav();
    else openMobileNav();
  });

  $$('.nav-mobile a, .nav-desktop a').forEach((link) => {
    link.addEventListener('click', () => closeMobileNav());
  });

  const sections = ['profile', 'quests', 'skills', 'portfolio', 'contact'];
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        $$('.nav-desktop a, .nav-mobile a').forEach((a) => {
          const match = a.getAttribute('href') === `#${id}`;
          a.setAttribute('aria-current', match ? 'true' : 'false');
        });
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  const observe = () => $$('.reveal').forEach((el) => observer.observe(el));
  observe();
  return observe;
}

function initFilters() {
  $$('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      $$('.filter-btn').forEach((b) =>
        b.setAttribute('aria-pressed', String(b === btn))
      );
      applyProjectFilter();
    });
  });
}

function initModal() {
  $('#modal-close')?.addEventListener('click', closeModal);
  $('.modal__backdrop', modal)?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

function initTheme() {
  setTheme(getPreferredTheme());
  $('#theme-toggle')?.addEventListener('click', () => {
    const next =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';
    setTheme(next);
  });
}

function init() {
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderJsonLd();
  initNav();
  initModal();
  initTheme();
  initFilters();
  const refreshReveal = initReveal();
  refreshReveal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
