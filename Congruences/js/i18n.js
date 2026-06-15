// ===============================
//   RELATIONAL MATH – I18N CORE
// ===============================

// Domyślny język
let currentLang = 'pl';

// Automatyczna ścieżka do plików językowych:
// 1. Jeśli strona deklaruje PAGE_LANG_PATH → używamy jej
// 2. Jeśli nie → domyślnie "i18n/" w katalogu strony
let LANG_PATH = typeof PAGE_LANG_PATH !== 'undefined'
  ? PAGE_LANG_PATH
  : 'i18n/';


// ===============================
//   USTAWIANIE JĘZYKA
// ===============================

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  loadLang(lang);
}


// ===============================
//   ŁADOWANIE PLIKÓW JĘZYKOWYCH
// ===============================

function loadLang(lang) {
  const filePath = `${LANG_PATH}${lang}.json`;

  fetch(filePath)
    .then(res => {
      if (!res.ok) {
        console.error(`Brak pliku językowego: ${filePath}`);
        return {};
      }
      return res.json();
    })
    .then(data => applyTranslations(data))
    .catch(err => console.error("Błąd ładowania i18n:", err));
}


// ===============================
//   ZASTOSOWANIE TŁUMACZEŃ
// ===============================

function applyTranslations(dictionary) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');

    if (dictionary[key]) {
      // Bezpieczne wstrzyknięcie HTML
      const temp = document.createElement('div');
      temp.innerHTML = dictionary[key];
      el.innerHTML = temp.innerHTML;
    }
  });
}


// ===============================
//   AUTOMATYCZNE URUCHOMIENIE
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  // wczytujemy ostatnio używany język
  const savedLang = localStorage.getItem('lang') || 'pl';
  setLang(savedLang);
});
