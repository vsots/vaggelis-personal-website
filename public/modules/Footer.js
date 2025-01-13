class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = `${footerHtml}`;
    }
}

const footerCss = `
    .footer {
        box-sizing: border-box;
        height: 16vh;
        position: sticky;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-bottom: 3em;
        padding-top: 3em;
        border-top: 1px black solid;
        background-color: white;
    }

    .icon {
        border: 1px black solid;
        border-radius: 20%;
        padding: 3em;
    }

    img {
        height: 5vh;
        width: 5vh;
    }
`;

const footerHtml = `
    <style>${footerCss}</style>
    <div class="footer">
        <div class="icon">
            <a href="mailto:vsotsdev@gmail.com">
                <img src="./media/email.svg" alt="Email"/>
            </a>
        </div>
        <div class="icon">
            <a href="tel:+17089971769">
                <img src="./media/phone.svg" alt="Phone"/>
            </a>
        </div>
        <div class="icon">
            <a href="https://www.linkedin.com/in/vaggelis-sotiropoulos" target="_blank" rel="noreferrer">
                <img src="./media/linkedin.svg" alt="LinkedIn"/>
            </a>
        </div>
        <div class="icon">
            <a href="https://github.com/vsots" target="_blank" rel="noreferrer">
                <img src="./media/github.svg" alt="GitHub"/>
            </a>
        </div>
    </div>
`;

customElements.define("footer-menu", Footer);
