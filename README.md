# FocusBoard

A clean, responsive task management dashboard built with React and Vite. It lets you create, edit, filter, and track tasks with localStorage persistence, along with a focus notes carousel for productivity tips.

## Tech Stack
- **React 19**
- **Vite**
- **Vanilla CSS** (CSS variables, flexbox, grid)
- **Lucide React** (icons)
- **Browser localStorage** for client-side persistence

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production build
```bash
npm run build
npm run preview
```

---

## Features
- **Task Management (CRUD)**:
  - Add tasks with title, description, category, status, priority, and due date.
  - Quick-toggle status directly from the task card (To do -> In progress -> Completed).
  - Edit any task through a modal form.
  - Delete tasks with a confirmation popup.
- **Search & Filtering**:
  - Live search by task title or category.
  - Status tabs (All, To do, In progress, Completed) with item counts.
  - Priority dropdown filter (All, High, Medium, Low).
  - All filters work together.
- **Dynamic Stats**:
  - Displays total tasks, in-progress tasks, completed tasks, and completion percentage in real time.
- **Focus Notes Carousel**:
  - 3 slides with daily productivity tips and metrics.
  - Previous/next buttons and clickable slide indicators.
- **Data Persistence**:
  - Automatically saves tasks to `localStorage`.
  - Loads 6 default sample tasks on first launch without wiping existing tasks on reload.
- **Mobile Responsive**:
  - Tested across desktop (1440px), tablet (768px), and mobile (390px).
  - Mobile slide-out sidebar menu with zero horizontal scrolling.

---

## Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── StatsSection.jsx
│   ├── StatsCard.jsx
│   ├── FocusNotesCarousel.jsx
│   ├── TaskSection.jsx
│   ├── TaskCard.jsx
│   ├── TaskList.jsx
│   ├── TaskForm.jsx
│   ├── SearchBar.jsx
│   ├── StatusTabs.jsx
│   ├── PriorityFilter.jsx
│   ├── DeleteConfirmation.jsx
│   └── EmptyState.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useTasks.js
├── data/
│   ├── initialTasks.js
│   └── focusNotes.js
├── utils/
│   └── taskHelpers.js
├── styles/
│   ├── global.css
│   ├── dashboard.css
│   ├── components.css
│   └── responsive.css
├── App.jsx
└── main.jsx
```

---

## Implementation Details
- **State Management**: Uses React hooks (`useState`, `useMemo`, `useCallback`). Original tasks live in `useTasks`, and filtered lists/statistics are calculated with `useMemo` so data is always in sync.
- **Form Validation**: Task title is required; user sees a clear error message if submitted empty.
- **Accessibility**: Includes semantic tags (`<header>`, `<aside>`, `<main>`, `<section>`), keyboard focus rings, and proper ARIA labels.
