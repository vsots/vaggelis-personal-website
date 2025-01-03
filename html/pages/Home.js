class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = `${homeHTML}`
    }
}

const homeCSS = `
    #home {
        height: 75vh;
        display: flex;
        flex-direction: column;
    }
`;

const homeHTML = `
    <style>${homeCSS}</style>
    <div id="home">
        <h1>Welcome to the website of Vaggelis Sotiropoulos!</h1>
        <h3>I am a front-end leaning full-stack software engineer with over five years of experience.</h3>
        <h3>Click on the tabs above to learn more about me.</h3>
        <h3>Check out my links in the footer to get in touch!</h3>
    </div>
`

customElements.define('home-page', Home);
const home = document.querySelector('home-page');
export default home;
