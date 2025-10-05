# Profesionální studijní plán: JavaScript (0 → Profi)

**Cíl:**  
Během ~24 týdnů (6 měsíců) vystavět pevné základy JavaScriptu, frontend ekosystému a základního backendu v Node.js.  
**Výstup:** Profesionální portfolio se 3–5 projekty, testy, CI a nasazením.

---

## 🛠 Jak s plánem pracovat
- **Časová dotace:** 8–12 h týdně doporučeno. Přizpůsobte poměrem dostupného času.  
- **Struktura týdne:**  
  - 3× „učení“ (2 h): čtení, poznámky, malé cvičení  
  - 2× „praxe“ (1–1.5 h): kódy z hlavy, kata, mini‑úlohy  
  - 1× „projektový blok“ (3 h): budování projektu, refaktoring, testy, nasazení  
- **Pravidlo 60–20–20:** 60 % projekty, 20 % cílené učení, 20 % čtení/dokumentace  
- **Měření pokroku:** na konci týdne vyplňte checklist a krátkou retrospektivu  

---

## ⚙️ Předpoklady & nastavení prostředí (Týden 0)
- [ ] Node.js LTS (doporučeně přes nvm)  
- [ ] VS Code + rozšíření: ESLint, Prettier, GitLens  
- [ ] Git + GitHub účet; generujte SSH klíč  
- [ ] Nastavit ESLint + Prettier v projektu  
- [ ] Prohlížeč Chrome/Firefox a naučit se DevTools  

---

## 📌 Milníky
| Milník | Obsah |
|--------|-------|
| M0 | Základní syntaxe: proměnné, funkce, pole, objekty, moduly |
| M1 | Prohlížeč & DOM: události, webové API, přístupnost |
| M2 | Asynchronní JS: Promises, async/await, práce s API |
| M3 | Nástroje & Testy: npm, bundler (Vite), ESLint/Prettier, unit testy |
| M4 | Framework + TS: React + TypeScript, routing, stav, formuláře |
| M5 | Backend: Node.js + Express/Fastify, DB, nasazení |

> Po dosažení každého milníku přidejte do portfolia minimálně 1 projekt s krátkým článkem (README + blogpost).  

---

## 📅 24týdenní osnova (0 → Profi)

### Týdny 1–4: Základy JavaScriptu (M0)
**Témata:** Typy, operátory, funkce, objekty, modulový systém, error handling  
**Cvičení:** map/filter/reduce, debounce, throttle, deepClone  
**Mini‑projekty:** CLI kalkulačka, generátor hesel  
**Kontrolní otázky:** closure, pure functions, time complexity  

- [ ] Dokážu vysvětlit closure na vlastním příkladu  
- [ ] Vím, kdy použít pure function a jak měřit time complexity O(n)  

---

### Týdny 5–8: DOM, Web API, přístupnost (M1)
**Témata:** DOM selekce, události, event loop, Fetch API, přístupnost, CSS box model/flex/grid  
**Projekty:** To‑Do, galerie s lazy-loading, validace formulářů  
**Kontrolní otázky:** task vs microtask, skeleton loading  

- [ ] Vysvětlím rozdíl mezi task a microtask frontou  
- [ ] Umím načíst data a zobrazit skeleton loading  

---

### Týdny 9–12: Asynchronní JS & práce s daty (M2)
**Témata:** Promises, async/await, paralelizace, retry, CORS, REST  
**Projekty:** Weather Dashboard, Data util knihovna  
**Kontrolní otázky:** safe cancellation requestů, race conditions  

- [ ] Umím bezpečně zrušit probíhající requesty při unmountu komponenty  
- [ ] Umím ošetřit race conditions  

---

### Týdny 13–16: Nástroje, kvalita kódu, testy, CI (M3)
**Témata:** npm, bundlery (Vite), ESLint, Prettier, commit hooks, testy, CI  
**Projekty:** Refaktor To‑Do, malá npm knihovna  
**Kontrolní otázky:** tree-shaking, source maps  

- [ ] Umím vysvětlit, co dělá tree-shaking a kdy selhává  
- [ ] Vím, co je source map a jak ji využít v produkci  

---

### Týdny 17–20: Framework + TypeScript (M4)
**Témata:** React + TS, hooks, state, router, formuláře, typy  
**Projekty:** Kanban/Task Manager, alternativně E‑shop frontend  
**Kontrolní otázky:** state vs derived state, error/loading handling  

- [ ] Vysvětlím rozdíl mezi state a derived state  
- [ ] Umím navrhnout error handling a loading stavy pro každou stránku  

---

### Týdny 21–24: Node.js & backend základy (M5)
**Témata:** Node runtime, Express/Fastify, DB, autentizace, nasazení, logging  
**Projekty:** Backend pro frontend (Tasks API), bonus WebSocket notifikace  
**Kontrolní otázky:** API struktura, bezpečná práce s env a tajemstvími  

- [ ] Umím navrhnout strukturu API a verzování  
- [ ] Umím bezpečně pracovat s tajemstvími (env, .gitignore, rotace klíčů)  

---

## 🎯 Portfolio a prezentace
- 3–5 projektů:
  - Vanilla JS  
  - React + TS s testy a CI  
  - Full-stack (Node + DB) s nasazením  
- Každý projekt obsahuje: README, testy, lint, CI badge, demo  
- Ke každému projektu krátký článek o naučených lekcích  

---

## 📖 Denní návyky a techniky
- Pomodoro 50/10 + 5 min rekapitulace  
- Spaced repetition (Anki) pro syntaxi a utility TS  
- Deliberate practice: 2–3 katas týdně  
- Self code review 1× týdně  

---

## 📚 Doporučené zdroje
- [MDN Web Docs](https://developer.mozilla.org/)  
- *You Don’t Know JS Yet* – Kyle Simpson  
- *Eloquent JavaScript* – Marijn Haverbeke  
- Oficiální dokumentace: React, TypeScript, Vite, Jest/Vitest, Playwright, Prisma  

---

## ✅ Kontrolní checklist
- [ ] Vysvětlím this, closures, prototypy a rozdíly == vs ===  
- [ ] Naimplementuji debounce/throttle a deepClone se známými limity  
- [ ] Umím debugovat v DevTools  
- [ ] Umím navrhnout a otestovat REST endpoint (unit + E2E)  
- [ ] Mám pipeline (lint, test, build) a rozumím semver  
- [ ] Umím vytvořit React komponentu s přístupností a řízeným stavem  
- [ ] Umím typovat složitější objektové struktury v TypeScriptu  
- [ ] Mám nasazené 3+ projekty s kvalitním README a testy  

---

## 🚀 Volitelné „pro“ moduly
- Výkon: Lighthouse, Web Vitals, lazy loading, memoizace  
- Bezpečnost: XSS/CSRF, CSP, dependency audit  
- Architektura FE: modulární monorepo, design system  
- Realtime: WebSocket, SSE  
- PWA: service worker, offline strategie  

---

## 📌 Týdenní retrospektiva (šablona)
1. Co jsem se naučil/a?  
2. Co mi dělalo problém a proč?  
3. Jaký bude 1 konkrétní experiment příští týden?  
4. Co přidám do portfolia nebo README?  

---

**Tip:** Každý týden vytvořte commit zprávu ve formátu Conventional Commits (např. `feat: add debounce util`), aby byl vidět vyspělý proces učení.  
