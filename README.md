🗡️ Hyrule Compendium - <https://delightful-sundae-784833.netlify.app/index.html>
A vanilla JavaScript web app that lets you explore the Breath of the Wild creature and item encyclopedia — browsing by category and diving into individual entries with expandable detail panels.

![Hyrule Compendium Demo]
<img width="1104" height="525" alt="hyrule-compendium-app-demo" src="https://github.com/user-attachments/assets/fd77ea5c-4d3a-428d-be15-b030dac1b589" />

Features

Browse five compendium categories: Creatures, Monsters, Materials, Equipment, and Treasure
Live data fetched from the BOTW Compendium API
Expandable entry cards showing description, common locations, and drops
Fully custom Web Components — no frameworks, no dependencies

Tech Stack

Vanilla JS (ES Modules) — native browser APIs only
Web Components — custom elements with Shadow DOM encapsulation
Fetch API — async/await data fetching with URL query parameter routing

Project Structure
├── index.html # Home page — category selection
├── category.html # Category page — entry listing
├── test.html # Component test harness
└── css/
├── styles.css # External stylesheet file
└── js/
├── main.js # Home page logic
├── category.js # Category page logic
└── components/
├── app-header.js # Site navigation header
├── app-button.js # Reusable link/button element
└── entry-card.js # Expandable compendium entry card
Getting Started
Since the app uses ES Modules, it needs to be served over HTTP (not opened directly as a file).
bash# Using the VS Code Live Server extension, or:
npx serve .
Then open http://localhost:3000 in your browser.
