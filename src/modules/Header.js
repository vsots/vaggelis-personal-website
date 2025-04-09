import "./MobileOpenMenu.js";
import { navLink, toggleMobileMenuGlyph } from "./helpers.js";


class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = headerHtml;
        this.isMenuOpen = false;
    }

    connectedCallback() {
        const menu = this.shadowRoot.querySelector("#menu");
        const links = this.shadowRoot.querySelectorAll("h3, h4");
        const viewWidth = window.innerWidth;
        
        if (viewWidth <= 768) { 
            navLink(this.shadowRoot.querySelector("#name"), this);
            menu.addEventListener("click", (_) => {
                const mobileMenuElem = this.shadowRoot.querySelector("mobile-open-menu");

                if (!this.isMenuOpen) {
                    document.querySelector("body").style.overflow = "hidden";
                    mobileMenuElem.style.display = "block";
                    mobileMenuElem.style.animation = "fadeIn 0.3s ease-out 0s 1 normal forwards running";
                    this.isMenuOpen = true;
                } else {
                    mobileMenuElem.style.animation = "fadeOut 0.2s ease-out 0s 1 normal forwards";
                    this.isMenuOpen = false;
                }

                toggleMobileMenuGlyph(this, this.isMenuOpen);
                if (!this.isMenuOpen) document.querySelector("body").style.overflow = "scroll";
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

    @media screen and (max-width: 769px) {
        #header {
            position: sticky;
            top: 0px;
            background-color: white;
            padding: 1.8rem 1.5rem 1.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #name {
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

        #menu > h4 {
            display: none;
        }
    }

    @media screen and (min-width: 769px) {
        #header {
            display: flex;
            background-color: white;
            padding: 2rem 4rem 0;
            justify-content: space-between;
            align-items: center;
        }

        h3, h4 {
            cursor: pointer;
        }

        #name {
            font-size: 2.5rem;
            margin: 0;
            border-top: 3px transparent solid;
            border-bottom: 3px transparent solid;
        }

        #menu {
            display: flex;
            align-items: center;
        }

        hr {
            display: none;
        }

        #menu > h4 {
            margin: 0 0.7rem;
            font-size: 1.5rem;
            padding-bottom: 1.5rem;
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
    <div id="header">
        <h3 id="name">Vaggelis Sotiropoulos</h3>
        <div id="menu">
            <hr>
            <hr>
            <h4 id="home">Home</h4>
            <h4 id="skills">Skills & Projects</h4>
            <h4 id="contact">Contact</h4>
        </div>
    </div>
    <mobile-open-menu></mobile-open-menu>
`;

customElements.define("header-and-menu", Header);
