class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = contactHTML;
        // const txt = this.shadowRoot.querySelector('textarea');
        // const body = document.querySelector('body');
        // console.log('HEIGHT');
        // console.log(getComputedStyle(txt).height);
        // console.log(getComputedStyle(body).height);
        // console.log('TXTWIDTH');
        // console.log(getComputedStyle(txt).width);
        // console.log(getComputedStyle(body).width);
    }
}

const contactCSS = `
    height: 75vh;

    #form {
        display: flex;
        flex-direction: column;
    }

    #contact-text {
        font-size: 3rem;
    }

    label {
        display: block;
        margin-bottom: 1.5rem;
        font-size: 2.5rem;
        font-weight: 600;
    }

    input {
        display: block;
        margin-top: 0.7rem;
        width: 20rem;
        height: 2.2rem;
    }
    
    textarea {
        display: block;
        margin-top: 0.7rem;
        height: 36.59%;
        width: 84.34%;
    }
`;

const contactHTML = `
    <style>${contactCSS}</style>
    <div id="contact">
        <h1 id="contact-text">Contact</h1>
        <div id="form">
            <label>
                Name
                <input type="text" name="Name" id="name" placeholder="Name" />
            </label>
            <label>
                Email
                <input type="text" name="Email" id="email" placeholder="Email" />
            </label>
            <label>
                Subject
                <input type="text" name="Subject" id="subject" placeholder="Subject" />
            </label>
            <label>
                Message
                <textarea name="Message" id="message" placeholder="Message"></textarea>
            </label>
            <button>Submit</button>
        </div>
    </div>
`;

customElements.define('contact-page', Contact);
