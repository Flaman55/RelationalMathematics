# Plan: Strona Matematyki Relacyjnej — ścieżka intelektualna do 4 Filarów

## Cel główny
Zbudować stronę która prowadzi czytelnika od klasycznej teorii liczb do strukturalnej/relacyjnej,
zadając pytania podważające fundamenty wartościowe, pokazując wizualizacje i docelowo
kierując do pełnego opracowania (PDF 140 stron: Cztery Filary Porządku Liczbowego).

Ton: nie podręcznik. Nie dokumentacja. Intelektualne zaproszenie — pytania które
zaczepiają, wizualizacje które coś pokazują, i płynne przejście od "wiem co to mod 5"
do "chcę zobaczyć co jest głębiej".

Język: PL + EN od początku (i18n per podstrona).

---

## STATUS ETAPÓW

### ✅ ETAP 0 — Fundament techniczny (UKOŃCZONY)
- [x] Wspólny `style.css` (dodane klasy: `.hero`, `.placeholder-img`, `.divider`, `.download`, `.section.clickable`)
- [x] Favicon MR (złote M, błękitne R, ciemne tło)
- [x] `Congruences.html` używa `../style.css` i `../js/i18n.js`
- [x] `index.html` — sekcje `#classic` i `#eliminacja` jako pełne klikalne bary
- [x] Nawigacja główna prowadzi do podstron (nie anchory)

---

### 🔲 ETAP 1 — Architektura narracyjna Kongruencji
**Cel:** Zanim napiszemy słowo treści, ustalamy co dokładnie dzieje się w każdej sekcji.
Mapa: pytanie → co czytelnik myśli → co zobaczy → do czego to prowadzi.

Kroki:
- [ ] 1.1 Zdefiniować 4–5 sekcji strony z tytułami roboczymi i jednym zdaniem celu każdej
- [ ] 1.2 Dla każdej sekcji: jedno "pytanie-haczyk" które otwiera tę sekcję
- [ ] 1.3 Zdecydować które wizualizacje (PNG/widget) idą do której sekcji
- [ ] 1.4 Zapisać mapę narracyjną jako komentarz w PLAN.md (poniżej)
- [ ] 1.5 Weryfikacja: czy ścieżka prowadzi naturalnie od klasyki do struktury?

**Zasada kolorystyczna (kluczowa decyzja architektoniczna):**
Kolor sekcji = perspektywa intelektualna, nie dekoracja.
- CIEMNA = klasyczna matematyka: statyczna, wartościowa, formalna, "zimna"
  → grafika generowana: surowy świat statycznych wartości (ostre, formalne, mechaniczne)
- JASNA = nowa myśl: rytm, struktura, relacja, "żywa"
  → grafika z projektu: wizualizacje eliminacji, cykli, fal
Z każdą parą ciemna/jasna nacisk przesuwa się coraz bardziej na stronę struktury.
Czytelnik czuje ten przeskok podświadomie przez sam kolor.

**Mapa narracyjna:**
```
HERO (ciemna)
  Pytanie które zatrzymuje. Nie tytuł — prowokacja.
  "Czy 12 ≡ 2 (mod 5) mówi coś o liczbie 12, czy o sposobie patrzenia?"
  Brak grafiki — samo pytanie.

CIEMNA 1 — Klasyczne kongruencje
  "Wiesz co to reszta z dzielenia. Masz rację."
  Klasyczna definicja, przykłady, pierścienie ilorazowe.
  Grafika GENEROWANA: zimna, sztywna tabela reszt — świat statycznych wartości.
  Kończy się pytaniem: "Ale czy reszta należy do liczby — czy do podziału?"

JASNA 1 — Rytm zamiast reszty
  Pierwsze pęknięcie w klasycznej perspektywie.
  Kongruencja jako cykl, nie wartość. Mod 5 = rytm o okresie 5.
  Grafika PROJEKTU: prosta wizualizacja cyklu (np. koła, punkty na osi).
  Kończy się pytaniem: "Co jeśli liczba pierwsza to pozycja, w którą żaden rytm nie trafia?"

CIEMNA 2 — Klasyczna pierwszość
  "Liczba pierwsza: podzielna tylko przez 1 i siebie."
  Sito Eratostenesa — mechaniczne wykreślanie, lista, algorytm.
  Grafika GENEROWANA: zimna, statyczna siatka sita — coś martwego i mechanicznego.
  Kończy się: "Wykrywamy, szukamy, sprawdzamy. Ale czy to znaczy że rozumiemy?"

JASNA 2 — Eliminacja jako mechanizm wyłaniania
  Pierwsze nie są wykrywane — wyłaniają się.
  Zmiana pytania: nie "które przeżywają" lecz "co pozwala zaistnieć".
  Grafika PROJEKTU: widget-waves lub Cykl_eliminacyjny_n30.png.
  Kończy się: "To nie jest inne obliczenie. To inna przestrzeń."

CIEMNA 3 — Klasyczna granica
  "Dalej jest analiza, szeregi, hipotezy. Millenium Prize."
  Pokazujemy jak daleko klasyczna teoria zaszła i gdzie stoi — bez odpowiedzi.
  Grafika GENEROWANA: coś zimnego i monumentalnego — ζ(s), oś krytyczna, mur.
  Kończy się milczeniem i pytaniem: "A co jeśli pytamy o złe rzeczy?"

JASNA 3 — Cztery filary jako cztery perspektywy
  Mechanizm eliminacyjny widziany z czterech stron: rytm, gęstość, rezonans, fala.
  Każda perspektywa to pełna odpowiedź na inne pytanie.
  Grafika PROJEKTU: proof_structure_map_dark_svg.svg lub podobna mapa struktury.
  Otwarta, zapraszająca.

DOWNLOAD (ciemna — powrót do ciemności ale teraz ze spokojem)
  Nie "pobierz dokumentację" — "pełna mapa tej przestrzeni czeka".
  Link do PDF Cztery Filary Porządku Liczbowego.
  Jedno zdanie: "140 stron. Cztery filary. Jeden mechanizm."
```

---

### 🔲 ETAP 2 — Struktura i18n
**Cel:** Zdefiniować wszystkie klucze tłumaczeń zanim napiszemy HTML.

Kroki:
- [ ] 2.1 Wylistować wszystkie klucze które będą potrzebne (hero, nagłówki, paragrafy, przyciski)
- [ ] 2.2 Napisać `Congruences/i18n/pl.json` — wersja polska (pełna treść)
- [ ] 2.3 Napisać `Congruences/i18n/en.json` — wersja angielska (pełna treść)
- [ ] 2.4 Weryfikacja: czy wszystkie klucze mają odpowiedniki w obu językach?

---

### 🔲 ETAP 3 — Treść sekcji (pisanie)
**Cel:** Napisać właściwą treść każdej sekcji — prowokacyjne pytania, krótkie akapity,
przejścia między sekcjami. Ton: ciekawy, nie akademicki.

Kroki:
- [ ] 3.1 Hero — tytuł + 2 zdania wciągające (PL+EN)
- [ ] 3.2 Sekcja 1 — klasyczne kongruencje jako "coś znanego" + pytanie podważające
- [ ] 3.3 Sekcja 2 — rytm zamiast reszty: pierwsze pęknięcie w klasycznej perspektywie
- [ ] 3.4 Sekcja 3 — eliminacja i cykl: strukturalna alternatywa (z wizualizacją)
- [ ] 3.5 Sekcja 4 — zanurzenie w relacji: gdzie to prowadzi
- [ ] 3.6 Download — zaproszenie do PDF, nie "pobierz dokumentację"
- [ ] 3.7 Weryfikacja: przeczytać całość jako czytelnik bez kontekstu — czy wciąga?

---

### 🔲 ETAP 4 — Wizualizacje
**Cel:** Wybrać i przygotować obrazy/widgety które wspierają narrację.

Kroki:
- [ ] 4.1 Przejrzeć dostępne PNG z projektu (katalog 4_filary) i wybrać max 2–3 do Kongruencji
- [ ] 4.2 Skopiować wybrane pliki do `Congruences/img/`
- [ ] 4.3 Ocenić czy widget-waves z p17 nadaje się do adaptacji dla tej strony
- [ ] 4.4 Jeśli tak — zaadaptować widget (styl, język, rozmiar)
- [ ] 4.5 Weryfikacja: czy wizualizacje są zrozumiałe bez kontekstu? Czy są podpisane?

---

### 🔲 ETAP 5 — Budowa HTML
**Cel:** Napisać właściwy `Congruences.html` z treścią, i18n i wizualizacjami.

Kroki:
- [ ] 5.1 Przebudować `Congruences.html` według architektury z Etapu 1
- [ ] 5.2 Wpiąć klucze i18n z Etapu 2
- [ ] 5.3 Wpiąć wizualizacje z Etapu 4
- [ ] 5.4 Sprawdzić nawigację (back do index, anchory wewnętrzne)
- [ ] 5.5 Sprawdzić responsywność (mobile)
- [ ] 5.6 Weryfikacja: przełączyć PL↔EN — czy wszystko się zmienia poprawnie?

---

### 🔲 ETAP 6 — Podstrona Eliminacja (pillars/eliminacja.html)
**Cel:** Pierwsza podstrona filarów — analogiczna ścieżka jak Kongruencje ale głębiej.
*(Ten etap zaczyna się po pełnej weryfikacji Etapu 5.)*

---

### 🔲 ETAP 7 — Pozostałe filary + spójność całości
- pillars/gestosc.html
- pillars/rezonans.html
- pillars/fala.html
- Spójność stylu, nawigacji, ścieżki przez całą stronę
- Link do PDF 4 Filarów ze wszystkich końcowych sekcji

---

## ZASADY PRACY
1. Jeden etap na raz — nie skaczemy do kolejnego bez weryfikacji poprzedniego
2. Każdy krok oznaczamy `[x]` po wykonaniu
3. Weryfikacja = faktyczne sprawdzenie, nie "wydaje się ok"
4. Wątpliwości co do tonu/treści → dyskutujemy przed pisaniem
5. Git commit po każdym ukończonym etapie

---

## NOTATKI ROBOCZE
*(tutaj zapisujemy decyzje podjęte w trakcie pracy)*

- Decyzja 2025-06-15: i18n per podstrona (nie scalamy do globalnego)
- Decyzja 2025-06-15: CSS wspólny (`style.css`), JS wspólny (`js/i18n.js`)
- Decyzja 2025-06-15: sekcje clickable = `.section.clickable` + `.section-link` overlay
- Ton strony: intelektualne zaproszenie, pytania podważające, NIE podręcznik akademicki
