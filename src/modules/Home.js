class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = homeHTML;
    }
}

const homeCSS = `
    @media screen and (max-width: 1025px) {
        #home {
            margin: 1.4rem 1.5rem 3rem;
        }

        #about {
            margin-bottom: 3rem;
        }
        
        h3, p {
            margin-top: 0;
        }

        #work-exp {
            font-size: large;
            font-family: Esteban;
            margin-bottom: 2rem;
        }
        
        #work-exp > p {
            margin-bottom: 1rem;
        }

        #profile-pic {
            display: flex;
            justify-content: center;
            height: 30%;
        }
    }

    @media screen and (min-width: 1025px) {
        #home {
            padding: 6.4rem 4rem 5rem;
            display: flex;
            justify-content: space-between;
        }
        
        h3, p {
            margin-top: 0;
        }

        #text {
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        h3 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }

        #work-exp {
            font-size: 1.5rem;
            font-family: Esteban;
        }

        #work-exp > h3 {
            margin-bottom: 2rem;
        }

        #work-exp > p {
            margin-bottom: 0.75rem;
        }

        #profile-pic {
            display: flex;
            justify-content: flex-end;
        }

        img {
            width: 33vw;
        }
    }
`;

const homeHTML = `
    <style>${homeCSS}</style>
    <div id="home">
        <div id="text">
                <h3>
                    Vaggelis is a front-end leaning full-stack software engineer with over five years of professional experience. 
                    He currently resides in the San Francisco Bay Area working on Open Source and personal projects.
                </h3>
                <h3>Check out the contact and social links in the footer!</h3>
            <div id="work-exp">
                <h3>WORK EXPERIENCE</h3>
                <p>Software Engineer → Public Source Software, San Francisco Bay Area, 2023-Present</p>
                <p>Software Engineer → Capital One, San Francisco, 2021-2023</p>
                <p>Software Engineer → Rally Health, San Francisco, 2017-2020</p>
            </div>
        </div>
        <div id="profile-pic">
            <img src="../media/profile_photo.jpg" />
        </div>
    </div>
`

customElements.define("home-page", Home);
