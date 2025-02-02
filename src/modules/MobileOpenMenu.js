import { navLink } from "./helpers.js";

class MobileOpenMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = mobileMenuHTML;
        this.style.display = "none";
        this.style.position = "absolute";
        this.style.paddingTop = "20rem";
        this.style.top = "10.2rem";
        this.style.left = "0";
        this.style.backgroundColor = "white";
        this.style.zIndex = "1";
        this.style.height = "100vh";
        this.style.width = "100vw";
    }

    connectedCallback() {
        this.shadowRoot
        .querySelector("#mobile-menu-items")
        .childNodes
        .forEach(node => navLink(node, this));
    }
}

const mobileMenuCSS = `
    #mobile-menu-items {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #mobile-menu-items > h3 {
        font-family: Poppins;
        font-size: 3rem;
        font-weight: 300;
        color: #171D3A;
        margin: 1rem 0;
    }
`;

const mobileMenuHTML = `
    <style>${mobileMenuCSS}</style>
    <div id="mobile-menu-items">
        <h3 id="home">Home</h3>
        <h3 id="skills">Skills & Projects</h3>
        <h3 id="contact">Contact</h3>
    </div>
`;

customElements.define("mobile-open-menu", MobileOpenMenu);
