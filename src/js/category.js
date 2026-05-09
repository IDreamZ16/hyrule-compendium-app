import './components/app-header.js';
import './components/app-button.js';
import './components/entry-card.js';

// We update the page title from query paramaters
const parameters = new URLSearchParams(window.location.search);
const category = parameters.get('category') ?? 'Category';
document.querySelector('h2').textContent = `${category} Entries`;

// We fetch the entries by category
const BASE_URL = 'https://botw-compendium.herokuapp.com/api/v3/compendium';
const response = await fetch(`${BASE_URL}/category/${category.toLowerCase()}`);
const json = await response.json();

// We render the entry-card components

const section = document.querySelector('#entries-list');

json.data.forEach((entry) => {

    const card = document.createElement('entry-card');
    card.data = {
        name: entry.name,
        image: entry.image,
        imageAlt: entry.name,
        category: entry.category,
        description: entry.description,
        locations: entry.common_locations ?? 'None', // I added None for these two as I saw in the instructions gif they can have a None value if the information is missing
        drops: entry.drops ?? 'None',
    };
    section.appendChild(card);
});

/*
// We test the entry-card with hard coded data
const section = document.querySelector('#entries-list');
const card = document.createElement('entry-card');

card.data = {
  name: 'Rimuru',
  image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Slime_Rimuru.png',
  imageAlt: 'Rimuru',
  category: 'Monsters',
  description: 'This is a powerful monster slime named rimuru.',
  locations: ['Great Forest', 'Kingdom', 'Isekai'],
  drops: ['XP', 'SKILLS', 'FOOD'],
};

section.appendChild(card);

*/