import "./MobileOpenMenu.js";
import { navLink, toggleMobileMenuGlyph } from "./helpers.js";


class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = headerHtml;
    }

    connectedCallback() {
        const menu = this.shadowRoot.querySelector("#menu");
        const links = this.shadowRoot.querySelectorAll("h3");
        const screenWidth = window.screen.width;
        
        if (screenWidth <= 700) { 
            navLink(this.shadowRoot.querySelector("#name"), this);
            menu.addEventListener("click", (_) => {
                const mobileMenuElem = this.shadowRoot.querySelector("mobile-open-menu");
                const isMobileMenuElemOpen = mobileMenuElem.computedStyleMap().get("display").value;

                let isOpen;
                if (isMobileMenuElemOpen === "none") {
                    mobileMenuElem.style.display = "block";
                    mobileMenuElem.style.animation = "fadeIn 0.3s ease-out 0s 1 normal forwards running";
                    isOpen = true;
                } else {
                    mobileMenuElem.style.animation = "fadeOut 0.2s ease-out 0s 1 normal forwards";
                    isOpen = false;
                }

                toggleMobileMenuGlyph(this, isOpen);
            });
        } else links.forEach(node => navLink(node, this));
    }

}

const headerCss = `
    @keyframes rotate45 {
        0% {
            margin-bottom: 0.3rem;
        }
        
        33% {
            transform: rotate(75deg);
            margin-bottom: 0.2rem;
        }

        66% {
            transform: rotate(150deg);
            margin-bottom: 0.1rem;
        }

        100% { 
            transform: rotate(225deg);
            margin: 0;
            grid-column-start: 1;
            grid-row-start: 1;
        } 
    }
    
    @keyframes rotateMinus45 {
        0% {
            margin-bottom: 0.3rem;
        }
        
        33% {
            transform: rotate(-75deg);
            margin-bottom: 0.2rem;
        }

        66% {
            transform: rotate(-150deg);
            margin-bottom: 0.1rem;
        }

        100% { 
            transform: rotate(-225deg);
            margin: 0;
            grid-column-start: 1;
            grid-row-start: 1;
        } 
    }

    @keyframes rotateBack45 {
        0% {
            transform: rotate(-135deg);
            margin: 0;
            grid-column-start: 1;
            grid-row-start: 1;
        }
        
        33% {
            transform: rotate(-90deg);
            margin-bottom: 0.1rem;
        }

        66% {
            transform: rotate(-45deg);
            margin-bottom: 0.2rem;
        }

        100% { 
            transform: rotate(0deg);
            margin-bottom: 0.3rem;
        } 
    }
    
    @keyframes rotateBackMinus45 {
        0% {
            transform: rotate(135deg); 
            margin: 0;
            grid-column-start: 1;
            grid-row-start: 1;
        }

        33% {
            transform: rotate(90deg);
            margin-bottom: 0.1rem;
        }

        66% {
            transform: rotate(45deg);
            margin-bottom: 0.2rem;
        }

        100% {
            transform: rotate(0deg);
            margin-bottom: 0.3rem;
        } 
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
            transform: translateY(3%);
        }
        
        33% {
            opacity: 0.33;
            transform: translateY(2%);
        }

        66% {
            opacity: 0.66;
            transform: translateY(1%);
        }

        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        
        33% {
            opacity: 0.66;
            transform: translateY(1%);
        }

        66% {
            opacity: 0.33;
            transform: translateY(2%);
        }

        100% {
            display: none;
            opacity: 0;
            transform: translateY(3%);
        }
    }

    @media screen and (max-width: 701px) {
        #header {
            position: sticky;
            top: 0;
            left: 0;
            background-color: white;
            padding: 2rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #name {
            font-size: large;
            margin: 0;
        }

        #menu {
            display: grid;
        }

        hr {
            border: none;
            height: 1px;
            background-color: #171D3A;
            width: 2rem;
            margin-bottom: 0.3rem;
        }

        #menu > h3 {
            display: none;
        }
    }
    
    @media screen and (min-width: 701px) {
        #header {
            display: flex;
            background-color: white;
            padding: 0 1.9rem;
            justify-content: space-between;
            align-items: center;
        }

        #name {
            font-size: 2.1rem;
            margin: 0;
            border-top: 3px transparent solid;
            border-bottom: 3px transparent solid;
            cursor: pointer;
        }

        #menu {
            display: flex;
            align-items: center;
        }
        
        hr {
            display: none;
        }

        #menu > h3 {
            margin: 0 0.7rem;
            font-size: 1.1rem;
            padding: 1.8rem 0;
            cursor: pointer;
        }
        
        #skills, #contact {
            border-top: 3px transparent solid;
            border-bottom: 3px transparent solid;
        }

        #home {
            border-top: 3px transparent solid;
            border-bottom: 3px #171D3A solid;
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
