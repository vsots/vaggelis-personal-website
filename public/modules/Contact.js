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
    #contact {
        box-sizing: border-box;
        height: 66vh;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr 4.5fr 1.5fr;
        gap: 1.5rem;
    }
    
    #contact-text {
        font-size: 3.5rem;
        margin-bottom: 0;
    }

    label {
        display: block;
        font-size: 2.5rem;
        font-weight: 600;
    }

    input {
        display: block;
        margin-top: 1rem;
        width: 40vw;
        height: 3.5rem;
    }

    textarea {
        display: block;
        margin-top: 1rem;
        height: 90%;
        width: 90vw;
    }
    
    button {
        display: block;
        margin-top: 1.5rem;
        width: 33vw;
        height: 50%;
    }
`;

const contactHTML = `
    <style>${contactCSS}</style>
    <div id="contact">
        <h1 id="contact-text">Contact</h1>
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
`;

customElements.define('contact-page', Contact);
