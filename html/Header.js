import home from "./pages/Home";
import about from "./pages/AboutMe";
import snm from "./pages/SkillsAndProjects";
import contact from "./pages/Contact";

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
            switch(el.attributes.id) {
                case "about":
                    content.innerHTML = about;
                case "skills":
                    content.innerHTML = snm;
                case "contact":
                    content.innerHTML = contact;
                default:
                    content.innerHTML = home;
            }
        });
    }
}

const headerCss = `
    #header {
        height: 15vh;
        padding: 2em 2em 0 2em;
        border-bottom: 1px black solid;
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
