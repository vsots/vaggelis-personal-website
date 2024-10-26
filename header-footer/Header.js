class Header extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "closed"}).innerHTML = `${headerHtml}`;
    }
}

const headerCss = `
    .header {
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

    .menu {
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
    <div class="header">
        <div class="title">
            <img src="./media/Vaggelis_Sotiropoulos_Profile_Photo.jpeg" alt="Welcome"/>
            <div class="name">
                <h1>Vaggelis Sotiropoulos</h1>
                <h2>Software Engineer</h2>
            </div>
        </div>
        <div class="menu">
            <h3>Home</h3>
            <h3>About Me</h3>
            <h3>Skills</h3>
            <h3>Contact</h3>
        </div>
    </div>
`;

customElements.define("header-and-menu", Header);
