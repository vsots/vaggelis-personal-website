class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'closed'}).innerHTML = `${homeHTML}`
    }
}

const homeCSS = `
    #home {
        padding: 7.2rem 1.9rem;
    }

    #brief {
        display: flex;
        justify-content: space-between;
    }

    #brief-text {
        width: 50vw;
    }

    #brief-text > h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-top: 0;
        margin-bottom: 3rem;
    }
    
    #work-exp > h3, #work-exp > p {
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
        width: 50vw;
        display: flex;
        justify-content: center;
    }

    img {
        border: 1px black solid;
        border-radius: 50%;
        width: 33vw;
        height: 33vw;
    }
`;

const homeHTML = `
    <style>${homeCSS}</style>
    <div id="home">
        <div id="brief">
            <div id="brief-text">
                <h3>
                    Vaggelis is a front-end leaning full-stack software engineer with over five years of professional experience. 
                    He currently resides in the San Francisco Bay Area working on Open Source and personal projects.
                </h3>
                <h3>Check out the contact and social links in the footer!</h3>
            </div>
            <div id="profile-pic">
                <img src="../media/Vaggelis_Sotiropoulos_Profile_Photo.jpeg" />
            </div>
        </div>
        <div id="work-exp">
            <h3>WORK EXPERIENCE</h3>
            <p>Software Engineer → Open Source Software, San Francisco Bay Area, 2023-Present</p>
            <p>Software Engineer → Capital One, San Francisco, 2021-2023</p>
            <p>Software Engineer → Rally Health, San Francisco, 2017-2020</p>
        </div>
</div>
`

customElements.define('home-page', Home);
