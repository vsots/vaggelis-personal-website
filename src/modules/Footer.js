import { email, github, linkedin, phone } from '../media/icons.js';

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = `${footerHtml}`;
        this.style.position = "relative";
    }

    connectedCallback() {
        const footerHeight = this.getBoundingClientRect().bottom - this.getBoundingClientRect().top;

        const content = document.querySelector("#content");
        const contentEnd = content.getBoundingClientRect().bottom

        const distToBottom = window.innerHeight - this.getBoundingClientRect().bottom;

        const pushLower = distToBottom > 2;
        const pushHigher = distToBottom < 0 && window.innerHeight - contentEnd > 0 && window.innerHeight - contentEnd > footerHeight;

        if (pushLower || pushHigher) this.style.top = distToBottom - 1;
        else this.style.top = 0;
    }
}

const footerCss = `
    @media screen and (max-width: 769px) {
        #footer {
            display: flex;
            height: 10rem;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            padding-bottom: 2rem;
            border-top: 1px black solid;
            background-color: white;
        }
        
        #footer-title {
            font-size: large;
            margin: 0;
        }

        #icons {
            display: flex;
        }

        .icon {
            padding: 0 1rem;
        }

        svg {
            height: 2rem;
        }
    }

    @media screen and (min-width: 769px) {
        #footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 4rem;
            border-top: 1px black solid;
            background-color: white;
        }

        #icons {
            display: flex;
        }

        .icon {
            padding: 0 0.9rem;
        }

        svg {
            height: 2rem;
        }
    }
`;

const footerHtml = `
    <style>${footerCss}</style>
    <div id="footer">
        <h3 id="footer-title">Vaggelis Sotiropoulos</h3>
        <div id="icons">
            <div class="icon">
                <a href="tel:+17089971769">
                    ${phone}
                </a>
            </div>
            <div class="icon">
                <a href="mailto:vsotsdev@gmail.com">
                    ${email}
                </a>
            </div>
            <div class="icon">
                <a href="https://github.com/vsots" target="_blank" rel="noreferrer">
                    ${github}
                </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/in/vaggelis-sotiropoulos" target="_blank" rel="noreferrer">
                    ${linkedin}
                </a>
            </div>
        </div>
    </div>
`;

customElements.define("footer-menu", Footer);
