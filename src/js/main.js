import './components/app-header.js';
import './components/app-button.js';

const categories = ['Creatures', 'Monsters', 'Materials', 'Equipment', 'Treasure'];

const section = document.querySelector('#category-buttons');

categories.forEach((category) => {
  const button = document.createElement('app-button');
  button.setAttribute('href', `category.html?category=${category}`);

  const label = document.createElement('span');
  label.slot = 'label';
  label.textContent = category;

  button.appendChild(label);
  section.appendChild(button);
});