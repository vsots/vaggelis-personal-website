class AboutMe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = aboutMeHTML;
    }
}

const aboutMeCSS = `
    #about {
        height: 75vh;
    }
`;

const aboutMeHTML = `
    <style>${aboutMeCSS}</style>
    <div id="about">
        <h1>Biography</h1>
        <h3>
            I have over five years professional experience as a full-stack software engineer working in complex industries including healthcare and banking. 
            I enjoy collaboration and tackling intricate problems.
            Relevant Work Experience  
            Capital One (June 2021 – October 2023) – Software Engineer
            Created widget architecture and added hover functionality for dataset nodes on cytoscape graph of enterprise product so developers can easily add more functionality and data scientists can see certain dataset information with ease. (Svelte and Cytoscape.js)
            Added AWS cloudwatch logging to enterprise product for ease of debugging. (AWS and Winston logging)
            Created custom undo/redo functionality on cytoscape graph of enterprise product so that data scientists can easily recall different places traversed in the graph. (React and Cytoscape.js)
            Added additional API’s to enterprise products orchestration layer so data scientists have access to more information. (Node.js and GraphQL)
            Created and contributed to components displaying dataset slideout information and historically searched graphs to data scientists. (React and Svelte)
            Created Apollo client within new micro-app for enterprise product so that dataset information can be retrieved. (Apollo)
            Contributed to integration and unit testing to enterprise product to ensure code quality (Jest and Cypress)
            Mentored and consistently helped junior engineers to teach them good debugging and technical skills.
            Rally Health (December 2017 – July 2020) – Software Engineer  
            Joined as original member of team, initially three engineers plus manager, that created new end product (Advantage).  
            Successfully met product deadlines by creating new front-end (TypeScript/Angular) components and back-end (Scala/Play) code connecting to sub-product’s microservices.  
            Added to legacy Scala/Play product configuration service which allows for customers to pick and  choose products for their Advantage experience.  
            Utilized Mesos and Jenkins for configuration and deploying Advantage’s microservices.
            Contributed to unit and automated tests utilizing TypeScript, Scala, and Selenium to ensure code  functionality.  
            Incorporated a new internal tool for the team which helped spin-up microservices more efficiently thus  streamlining the development process.  
            Spearheaded effort to utilize new mobile-edge API service by being the main contributor to the service  and facilitating communication with the mobile team.  
            Ensured Advantage ran smoothly in production by testing on integration environment, handling bugs,  and deploying Advantage’s microservices as an on-call engineer.  
        </h3>
    </div>
`

customElements.define('about-me-page', AboutMe);
const about = document.querySelector('about-me-page');
export default about;
