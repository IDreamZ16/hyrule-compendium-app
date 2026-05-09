import './app-button.js';

const template = document.createElement('template');
template.innerHTML = 
`
  <style>
    .card {
      border: 1px solid #ccc;
      padding: 1rem;
      margin: 0.5rem 0;
      border-radius: 4px;
      background-color: #fff;
    }
    .card img {
      max-width: 200px;
      display: block;
      margin-bottom: 0.5rem;
    }
    ::slotted(img) {
      max-width: 200px;
      display: block;
      margin-bottom: 0.5rem;
    }
    .extra {
      display: block;
    }
    .extra.extra-hidden {
      display: none;
    }
    button {
      margin-top: 0.5rem;
    }
  </style>
  <div class="card">
    <h3><slot name="name"></slot></h3>
    <slot name="image"></slot>
    <p><strong>Category:</strong> <slot name="category"></slot></p>
    <app-button id="toggle-btn">
      <span slot="label">Toggle Details</span>
    </app-button>
    <div id="details" class="extra extra-hidden">
      <p><strong>Description:</strong> <slot name="description"></slot></p>
      <p><strong>Common Locations:</strong> <slot name="locations"></slot></p>
      <p><strong>Drops:</strong> <slot name="drops"></slot></p>
    </div>
  </div>
`;

class EntryCard extends HTMLElement {
  #expanded = false;
  #data = null;

  get expanded() {
    return this.#expanded;
  }

  set expanded(value) {
    this.#expanded = value;
    const details = this.shadowRoot?.querySelector('#details');
    if (details) {
      if (this.#expanded) {
        details.classList.remove('extra-hidden');
      } else {
        details.classList.add('extra-hidden');
      }
    }
  }

  get data() {
    return this.#data;
  }

  set data(value) {
    this.#data = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.#data) {
      throw new Error('No data has been set');
    }

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const { name, image, imageAlt, category, description, locations, drops } = this.#data;

    // We fill in the slots via light DOM children
    this.innerHTML = '';

    const setSlot = (slotName, content) => {
      const span = document.createElement('span');
      span.slot = slotName;
      span.textContent = content ?? '';
      this.appendChild(span);
    };

    setSlot('name', name);
    setSlot('category', category);
    setSlot('description', description);
    setSlot('locations', Array.isArray(locations) ? locations.join(', ') : locations);
    setSlot('drops', Array.isArray(drops) ? drops.join(', ') : drops);

    // Toggle button event listener
    const toggleBtn = this.shadowRoot.querySelector('#toggle-btn');
    toggleBtn.addEventListener('click', () => {
      this.expanded = !this.#expanded;
    });

    // Image slot
    const img = document.createElement('img');
    img.src = image ?? '';
    img.alt = imageAlt ?? name ?? '';
    img.slot = 'image';
    this.appendChild(img);

    // Restore state after rendering
    if (this.#expanded) {
      const details = this.shadowRoot.querySelector('#details');
      details.classList.remove('extra-hidden');
    }
  }
}

customElements.define('entry-card', EntryCard);
