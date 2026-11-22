# AI Usage & Notes

This document outlines the tools and developer workflow used while building this project, as requested by the assignment guidelines.

---

## Tools Used
- **GitHub Copilot / AI Assistant**: Used for quickly looking up syntax, drafting initial CSS reset/variable boilerplates, and generating boilerplate test scripts.

---

## Key Prompts & Queries Used
1. *"Vite React setup with modular component structure for dashboard with sidebar and header."*
2. *"CSS grid layout for 4 responsive stat cards that collapse to 2 columns on tablet and 1 column on mobile."*
3. *"Write a custom useLocalStorage hook in React that safely handles JSON parsing and doesn't overwrite existing keys."*
4. *"Puppeteer script to verify desktop (1440px) and mobile (390px) viewports for horizontal overflow."*

---

## AI Suggestions Checked and Corrected
- **State Duplication Issue**: The AI initially suggested keeping a separate state array for `filteredTasks` and updating it with `useEffect` whenever filters changed. I rejected that approach because having two state arrays for the same data causes sync bugs and extra re-renders. Instead, I used a single `tasks` state and derived `filteredTasks` dynamically with `useMemo`.
- **LocalStorage Rehydration**: Initial boilerplate would re-populate default sample tasks whenever the page refreshed if the array was empty. I modified the hook logic to check whether the localStorage key exists first, so if a user deletes all tasks, it stays empty instead of re-injecting sample data.

---

## Verification Done
- Tested all CRUD operations manually in browser (create, edit, delete with modal, quick status change).
- Checked localStorage persistence by adding custom tasks and refreshing.
- Tested responsive views at 1440px, 768px, and 390px.
- Verified zero console errors and clean build output (`npm run build`).
