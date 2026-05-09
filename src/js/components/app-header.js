const template = document.createElement('template');
template.innerHTML = 
`
  <style>
    nav {
      background-color: #222;
      color: #fff;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
  <nav>
    <a href="index.html"><slot name="home-text"></slot></a>
  </nav>
`;

class AppHeader extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-header', AppHeader);
