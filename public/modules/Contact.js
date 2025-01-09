class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = contactHTML;
    }
}

const contactCSS = `
    height: 75vh;
`;

const contactHTML = `
    <style>${contactCSS}</style>
    <div id="contact">
        <h1>Contact</h1>
        <input />
        <input />
        <input />
    </div>
`;

customElements.define('contact-page', Contact);
