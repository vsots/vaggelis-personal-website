class SkillsAndProjects extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = skillsAndProjectsHTML;
    }
}

const skillsAndProjectsCSS = `
    #sna {
        height: 75vh;
    }
`;

const skillsAndProjectsHTML = `
    <style>${skillsAndProjectsCSS}</style>
    <div id="sna">
        <h1>Skills & Projects</h1>
        <h3>
            JavaScript/TypeScript, Node.js, Scala, Python, React, 
            NextJS, Svelte, Angular, HTML, CSS, Tailwind, Cytoscape.js, 
            Apollo GraphQL, Play, Jest, Cypress, Selenium, Mesos, Jenkins, 
            AWS Certified Developer - Associate, Google UX Design Specialization (2024), 
            Google Data Analytics Specialization (2024)
        </h3>
    </div>
`

customElements.define("skills-and-projects-page", SkillsAndProjects);
const snm = document.querySelector('skills-and-projects-page');
export default snm;
