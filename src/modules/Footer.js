class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "closed"}).innerHTML = `${footerHtml}`;
    }
}

const footerCss = `
    @media screen and (min-width: 701px) {
        #footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 1.9rem;
            border-top: 1px black solid;
            background-color: white;
        }

        #icons {
            display: flex;
        }

        .icon {
            padding: 0 0.9rem;
        }

        img {
            height: 2rem;
        }
    }

    @media screen and (max-width: 701px) {
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

        img {
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
                    <img src="./media/phone.svg" alt="Phone"/>
                </a>
            </div>
            <div class="icon">
                <a href="mailto:vsotsdev@gmail.com">
                    <img src="./media/email.svg" alt="Email"/>
                </a>
            </div>
            <div class="icon">
                <a href="https://github.com/vsots" target="_blank" rel="noreferrer">
                    <img src="./media/github.svg" alt="GitHub"/>
                </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/in/vaggelis-sotiropoulos" target="_blank" rel="noreferrer">
                    <img src="./media/linkedin.svg" alt="LinkedIn"/>
                </a>
            </div>
        </div>
    </div>
`;

customElements.define("footer-menu", Footer);
