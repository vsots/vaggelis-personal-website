class SkillsAndProjects extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = skillsAndProjectsHTML;
    }
}

const skillsAndProjectsCSS = `
    #sna {
        padding: 3rem 1.9rem;
    }

    #skills {
        margin-bottom: 15rem;
    }
    
    h1 {
        text-align: center;
    }

   #languages {
        display: grid;
        padding-top: 3rem;
        margin: auto;
        width: 40%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 4.3rem 9rem;
        grid-template-areas: 
            "header header"
            "main other";
    }
    
    h2 {
        grid-area: header;
        text-align: center;
    }

    .skill-section:nth-child(2) {
        grid-area: main;
    }

    .skill-section:nth-child(3) {
        grid-area: other;
    }
    
    h3 {
        margin: 0;
        text-align: center;
    }

    .tools {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0.7rem 0.7rem;
        grid-area: section;
    }
    
    .tools > p {
        border: 2px #171D3A solid;
        border-radius: 1rem;
        padding: 0.2rem 0.7rem;
        margin: 0.2rem 0.3rem;
    }
    
    .two-row {
        display: flex;
        justify-content: space-evenly;
    }

    .two-row-col {
        display: grid;
        width: 45%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 4.3rem 12rem;
        grid-template-areas: 
            "header header"
            "main other";
    }

    .two-row-col-alt {
        display: grid;
        width: 45%;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 4.3rem auto;
        grid-template-areas: 
            "header header"
            "section section";
    }

    #projects {
        margin-bottom: 12rem;
    }
`;

const skillsAndProjectsHTML = `
    <style>${skillsAndProjectsCSS}</style>
    <div id="sna">
        <div id="skills">
            <h1>Skills</h1>
            <div id="languages">
                <h2>Languages</h2>
                <div class="skill-section">
                    <h3>Primary</h3>
                    <div class="tools">
                        <p>JavaScript/TypeScript</p>
                    </div>
                </div>
                <div class="skill-section">
                    <h3>Other</h3>
                    <div class="tools">
                        <p>C</p>
                        <p>Scala</p>
                        <p>Python</p>
                    </div>
                </div>
            </div>
            <div class="two-row">
                <div class="two-row-col">
                    <h2>Front-End</h2>
                    <div class="skill-section">
                        <h3>Primary</h3>
                        <div class="tools">
                            <p>React</p>
                            <p>CSS</p>
                            <p>tailwindcss</p>
                            <p>Webpack</p>
                            <p>Vite</p>
                            <p>NextJS</p>
                        </div>
                    </div>
                    <div class="skill-section">
                        <h3>Other</h3>
                        <div class="tools">
                            <p>Svelte</p>
                            <p>Angular</p>
                        </div>
                    </div>
                </div>
                <div class="two-row-col">
                    <h2>Back-End</h2>
                    <div class="skill-section">
                        <h3>Primary</h3>
                        <div class="tools">
                            <p>NodeJS (koa, express)</p>
                            <p>GraphQL</p>
                        </div>
                    </div>
                    <div class="skill-section">
                        <h3>Other</h3>
                        <div class="tools">
                            <p>Play</p>
                            <p>PostgreSQL</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="two-row">
                <div class="two-row-col-alt">
                    <h2>Testing</h2>
                    <div class="tools">
                        <p>Jest</p>
                        <p>Cypress</p>
                        <p>Mocha</p>
                        <p>Storybook</p>
                    </div>
                </div>
                <div class="two-row-col-alt">
                    <h2>Tools</h2>
                    <div class="tools">
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Jira</p>
                        <p>...and many more</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="projects">
            <h1>Projects (Coming Soon)</h1>
        </div>
    </div>
`

customElements.define("skills-and-projects-page", SkillsAndProjects);
