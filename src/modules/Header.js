class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = `${headerHtml}`;
        this.shadowRoot.querySelector("#menu").childNodes.forEach((node) => {
            this.listen(node);
        })
    }

    listen(el) {
        el.addEventListener("click", () => {
            const content = document.getElementById("content");

            switch(el.attributes.id.value) {
                case "skills":
                    content.innerHTML = `<skills-and-projects-page></skills-and-projects-page>`;
                    break;
                case "contact":
                    content.innerHTML = `<contact-page></contact-page>`;
                    break;
                default:
                    content.innerHTML = `<home-page></home-page>`;
            }
        });
    }
}

const headerCss = `
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

    #menu {
        display: flex;
    }
    
    #menu > h3 {
        padding: 0 0.7rem;
        font-size: 1.1rem;
        font-weight: 300;
        margin: 0;
    }
`;

const headerHtml = `
    <style>${headerCss}</style>
    <div id="header">
        <h3 id="name">Vaggelis Sotiropoulos</h3>
        <div id="menu">
            <h3 id="home">Home</h3>
            <h3 id="skills">Skills & Projects</h3>
            <h3 id="contact">Contact</h3>
        </div>
    </div>
`;

customElements.define("header-and-menu", Header);
