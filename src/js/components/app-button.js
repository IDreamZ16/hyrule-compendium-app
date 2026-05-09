class AppButton extends HTMLElement {
  static get observedAttributes() {
    return ['href'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) {
      this.render();
    }
  }

  render() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }

    const href = this.getAttribute('href');
    const tag = href ? 'a' : 'button';
    const hrefAttr = href ? `href="${href}"` : '';

    this.shadowRoot.innerHTML = 
    `
      <style>
        :host {
          --app-button-bg: #eee;
          --app-button-color: #000;
          --app-button-bg-hover: #333;
          --app-button-color-hover: #fff;
        }
        a, button {
          display: inline-block;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: var(--app-button-bg);
          color: var(--app-button-color);
          cursor: pointer;
          font-size: initial;
          text-decoration: none;
        }
        a:hover, button:hover {
          background-color: var(--app-button-bg-hover);
          color: var(--app-button-color-hover);
        }
      </style>
      <${tag} ${hrefAttr}>
        <slot name="label"></slot>
      </${tag}>
    `;
  }
}

customElements.define('app-button', AppButton);
