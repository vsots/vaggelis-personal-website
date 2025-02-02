import { navLink } from "./helpers.js";
import "./MobileOpenMenu.js";

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = `${headerHtml}`;
    }

    connectedCallback() {
        const menu = this.shadowRoot.querySelector("#menu");
        const links = this.shadowRoot.querySelectorAll("h3");
        const screenWidth = window.screen.width;
        
        if (screenWidth <= 700) { 
            navLink(this.shadowRoot.querySelector("#name"));
            menu.addEventListener("click", (_) => {
                const mobileMenuElem = this.shadowRoot.querySelector("mobile-open-menu");
                const isMobileMenuElemOpen = mobileMenuElem.computedStyleMap().get("display").value;

                if (isMobileMenuElemOpen === "none") mobileMenuElem.style.display = "block";
                else mobileMenuElem.style.display = "none";
            });
        } else links.forEach(node => navLink(node));
    }
}

const headerCss = `
    mobile-open-menu {
        display: none;
    }

    @media screen and (max-device-width: 701px) {
        #header {
            position: sticky;
            top: 0;
            left: 0;
            background-color: white;
            padding: 3.8rem 3.0rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #name {
            font-size: 1.8rem;
            font-weight: 400;
            margin: 0;
        }

        hr {
            border: none;
            height: 2px;
            background-color: #171D3A;
            width: 3rem;
            margin-bottom: 0.8rem;
        }

        #menu > h3 {
            display: none;
        }
    }
    
    @media screen and (min-device-width: 701px) {
        #header {
            position: sticky;
            top: 0;
            left: 0;
            background-color: white;
            padding: 1.3rem 1.9rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #name {
            font-size: 2.1rem;
            font-weight: 400;
            margin: 0;
        }
        
        #lines {
            display: none;
        }

        #menu {
            display: flex;
        }
        
        #menu > hr {
            display: none;
        }
        
        #menu > h3 {
            padding: 0 0.7rem;
            font-size: 1.1rem;
            font-weight: 300;
            margin: 0;
        }
    }
`;

const headerHtml = `
    <style>${headerCss}</style>
    <div>
        <div id="header">
            <h3 id="name">Vaggelis Sotiropoulos</h3>
            <div id="menu">
                <hr>
                <hr>
                <h3 id="home">Home</h3>
                <h3 id="skills">Skills & Projects</h3>
                <h3 id="contact">Contact</h3>
            </div>
        </div>
        <mobile-open-menu></mobile-open-menu>
    </div>
`;

customElements.define("header-and-menu", Header);
