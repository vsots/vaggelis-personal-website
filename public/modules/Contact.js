import DOMPurify from 'dompurify';

class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = contactHTML;
        const form = this.shadowRoot.querySelector('#contact');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = new FormData(form);
            const name = DOMPurify.sanitize(data.get("Name"));
            const email = DOMPurify.sanitize(data.get("Email"));
            const subject = DOMPurify.sanitize(data.get("Subject"));
            const message = DOMPurify.sanitize(data.get("Message"));
        })
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
    <form id="contact">
        <h1 id="contact-text">Contact</h1>
        <label>
            Name <span aria-label="required">*</span>
            <input name="Name" placeholder="Name" required />
        </label>
        <label>
            Email <span aria-label="required">*</span>
            <input
                type="email" 
                name="Email"
                title="Your Email Address"
                pattern="([\\w!#$%&\'*\\-+\\/=?^\`\\{\\|\\}~][\\w!#$%&\'*\\-+\\/=?^\`\\{\\|\\}~.]{1,62}?[\\w!#$%&\'*\\-+\\/=?^\`\\{\\|\\}~])@(([A-Za-z0-9][A-Za-z0-9\\-]{1,61}?[A-Za-z0-9].)([A-Za-z0-9][A-Za-z0-9\\-]{1,61}?[A-Za-z0-9].)?([A-Za-z0-9][A-Za-z0-9\\-]{1,61}?[A-Za-z0-9]))"
                placeholder="Email"
                required 
            />
        </label>
        <label>
            Subject
            <input name="Subject" placeholder="Subject" />
        </label>
        <label>
            Message <span aria-label="required">*</span>
            <textarea name="Message" placeholder="Message" required></textarea>
        </label>
        <button type="submit">Submit</button>
    </form>
`;

customElements.define('contact-page', Contact);
