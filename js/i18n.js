let currentLang = 'pl';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  loadLang(lang);
}

function loadLang(lang) {
  fetch(`i18n/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerText = data[key];
      });
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'pl';
  setLang(savedLang);
});
