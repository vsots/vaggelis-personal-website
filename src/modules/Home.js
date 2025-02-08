class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = homeHTML;
    }
}

const homeCSS = `
    @media screen and (max-width: 1025px) {
        #home {
            padding: 4rem 1.5rem 3rem;
        }

        #about > h3 {
            font-size: x-large;
        }
        
        h3 {
            margin-top: 0;
            margin-bottom: 3rem;
        }

        #work-exp {
            font-size: large;
            font-family: Esteban;
            margin-bottom: 5rem;
        }
        
        #work-exp > p {
            margin-top: 0;
            margin-bottom: 1.5rem;
        }

        #profile-pic {
            display: flex;
            justify-content: center;
            height: 30%;
        }
    }

    @media screen and (min-width: 1025px) {
        #home {
            padding-top: 7.2rem;
            padding-bottom: 6rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-template-areas:
                "about pic"
                "exp pic";
        }

        #about {
            grid-area: about;
            width: 50vw;
        }

        #about > h3 {
            font-size: 2rem;
            font-weight: 600;
            margin-top: 0;
            margin-left: 1.9rem;
            margin-bottom: 3rem;
        }

        #work-exp {
            grid-area: exp;
            margin-left: 1.9rem;
            font-size: 1.1rem;
            font-family: Esteban;
            font-weight: 300;
        }
        
        #work-exp > h3 {
            margin-top: 0;
            margin-bottom: 1.9rem;
        }
        
        #work-exp > p {
            margin-top: 0;
            margin-bottom: 0.75rem;
        }
        
        #profile-pic {
            grid-area: pic;
            display: flex;
            justify-content: center;
            align-items: baseline;
        }

        img {
            width: 33vw;
        }
    }
`;

const homeHTML = `
    <style>${homeCSS}</style>
    <div id="home">
        <div id="about">
            <h3>
                Vaggelis is a front-end leaning full-stack software engineer with over five years of professional experience. 
                He currently resides in the San Francisco Bay Area working on Open Source and personal projects.
            </h3>
            <h3>Check out the contact and social links in the footer!</h3>
        </div>
        <div id="work-exp">
            <h3>WORK EXPERIENCE</h3>
            <p>Software Engineer → Open Source Software, San Francisco Bay Area, 2023-Present</p>
            <p>Software Engineer → Capital One, San Francisco, 2021-2023</p>
            <p>Software Engineer → Rally Health, San Francisco, 2017-2020</p>
        </div>
        <div id="profile-pic">
            <img src="../media/profile_photo.jpg" />
        </div>
    </div>
`

customElements.define("home-page", Home);
