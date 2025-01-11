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
                case "about":
                    content.innerHTML = `<about-me-page></about-me-page>`;
                    break;
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
        box-sizing: border-box;
        height: 17vh;
        padding: 2em 2em 0 2em;
        border-bottom: 1px black solid;
        position: sticky;
        top: 0;
        background-color: white;
    }

    .title {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        text-align: center;
    }

    img {
        border: 1px black solid;
        border-radius: 100%;
        height: 10vh;
        width: 10vh;
    }

    .name > h1 {
        font-size: 3em;
        line-height: 0.5;
    }

    .name > h2 {
        font-size: 2em;
        line-height: 0.5;
    }

    #menu {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-end;
        height: 5vh;
        font-size: 1.5em;
    }
`;

const headerHtml = `
    <style>${headerCss}</style>
    <div id="header">
        <div class="title">
            <img src="./media/Vaggelis_Sotiropoulos_Profile_Photo.jpeg" alt="Welcome"/>
            <div class="name">
                <h1>Vaggelis Sotiropoulos</h1>
                <h2>Software Engineer</h2>
            </div>
        </div>
        <div id="menu">
            <h3 id="home">Home</h3>
            <h3 id="about">About Me</h3>
            <h3 id="skills">Skills & Projects</h3>
            <h3 id="contact">Contact</h3>
        </div>
    </div>
`;

customElements.define("header-and-menu", Header);
