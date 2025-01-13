class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "closed"}).innerHTML = `${footerHtml}`;
    }
}

const footerCss = `
    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        height: 16vh;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 3rem;
        padding-top: 3rem;
        border-top: 1px black solid;
        background-color: white;
    }

    .icon {
        display: flex;
        align-items: center;
        height: 55%;
        border: 1px black solid;
        border-radius: 20%;
        padding: 3rem;
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
