import checkAndSanitizeString from "form-text-sanitizer";
import { email, github, linkedin, phone } from '../media/icons.js';

class Contact extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = contactHTML;
    }

    connectedCallback() {
        const form = this.shadowRoot.querySelector('#contact-form');
        const buttonText = this.shadowRoot.querySelector('button > h3')
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            buttonText.innerHTML = 'Submitting';

            const data = new FormData(form);
            const { suggestedString: name } = checkAndSanitizeString(data.get("Name"));
            const { suggestedString: email } = checkAndSanitizeString(data.get("Email"));
            const { suggestedString: subject } = checkAndSanitizeString(data.get("Subject"));
            const { suggestedString: message } = checkAndSanitizeString(data.get("Message"));
            const json = JSON.stringify({name, email, "subject": (subject.length ? subject : 'No Subject'), message});

            try {
                const res = await fetch('https://api.vaggelissengineer.com/contactsubmission', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: json
                });
                if (res.status === 400) {
                    const text = await res.text();
                    console.log(text);
                } else {
                    console.log(res.status);
                    form.innerHTML = `<h3>Thank you!</h3>`
                }
            } catch(error) {
                console.log(error.message);
                alert("Message failed to send with error: ", error.message);
            }
        })
    }
}

const contactCSS = `
    @media screen and (max-width: 769px) {
        #contact {
            padding: 4rem 1.5rem 3rem;
        }

        #contact-body {
            font-family: Poppins;
            color: #171D3A;
        }

        #info {
            margin-bottom: 4rem;
        }

        h1 {
            font-size: xx-large;
            margin: 0;
        }

        #icons {
            display: flex;
            margin-top: 2rem;
        }

        .icon {
            padding-right: 1.2rem;
        }

        svg {
            height: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 1.5rem;
        }
        
        label > span {
            color: gray;
        }

        input[type="text"], input[type="email"] {
            margin-top: 0.5rem;
            display: block;
            width: 100%;
            height: 3rem;
            padding: 0.3rem 0.8rem;
            background-color: #FAFAFA;
            border: 1px #171D3A solid;
        }

        textarea {
            margin-top: 0.5rem;
            display: block;
            width: 100%;
            height: 12rem;
            padding: 0.7rem 0.8rem;
            background-color: #FAFAFA;
            border: 1px #171D3A solid;
        }
        
        button {
            display: block;
            color: #171D3A; 
            background-color: white;
            padding: 0.25rem 2.25rem;
            margin-top: 2.5rem;
            border: 2px #171D3A solid;
        }

        button:hover, button:active {
            color: white;
            background-color: #171D3A;
            transition: color 0.2s, background-color 0.2s;
        }
    }

    @media screen and (min-width: 769px) {
        #contact {
            padding: 6rem 1.9rem;
        }

        #contact-body {
            display: flex;
            font-family: Esteban;
            color: #171D3A;
        }

        #info {
            width: 50%;
        }
        
        #contact-form {
            width: 50%;
        }

        h1 {
            margin-top: 0;
            font-size: 3rem;
            font-family: Poppins;
            color: #171D3A;
        }
        
        #info > p {
            font-size: 1.2rem;
        }

        #icons {
            display: flex;
            margin-top: 3rem;
        }

        .icon {
            padding-right: 1rem;
        }

        svg {
            height: 1.5rem;
        }

        label {
            display: block;
            margin-bottom: 1.5rem;
        }
        
        label > span {
            color: gray;
            font-size: 0.75rem;
        }

        input[type="text"], input[type="email"] {
            margin-top: 0.5rem;
            display: block;
            width: 100%;
            height: 3rem;
            padding: 0.3rem 0.8rem;
            font-size: 1.2rem;
            background-color: #FAFAFA;
            border: 1px #171D3A solid;
        }

        textarea {
            margin-top: 0.5rem;
            display: block;
            width: 100%;
            height: 12rem;
            padding: 0.7rem 0.8rem;
            font-size: 1.2rem;
            background-color: #FAFAFA;
            border: 1px #171D3A solid;
        }
        
        button {
            display: block;
            font-family: Poppins;
            color: #171D3A;
            background-color: white;
            padding: 0.25rem 2.25rem;
            border: 2px #171D3A solid;
            cursor: pointer;
        }

        button:hover {
            color: white;
            background-color: #171D3A;
            transition: color 0.2s, background-color 0.2s;
        }
    }
`;

const contactHTML = `
    <style>${contactCSS}</style>
    <div id="contact">
        <div id="contact-body">
            <div id="info">
                <h1>Contact</h1>
                <p>vsotsdev@gmail.com</p>
                <p>(708) 997-1769</p>
                <div id="icons">
                    <div class="icon">
                        <a href="tel:+17089971769">
                            ${phone}
                        </a>
                    </div>
                    <div class="icon">
                        <a href="mailto:vsotsdev@gmail.com">
                            ${email}
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://github.com/vsots" target="_blank" rel="noreferrer">
                            ${github}
                        </a>
                    </div>
                    <div class="icon">
                        <a href="https://www.linkedin.com/in/vaggelis-sotiropoulos" target="_blank" rel="noreferrer">
                            ${linkedin}
                        </a>
                    </div>
                </div>
            </div>
            <form id="contact-form">
                <label>
                    Name <span aria-label="required">(required)</span>
                    <input type="text" name="Name" placeholder="Name" required />
                </label>
                <label>
                    Email <span aria-label="required">(required)</span>
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
                    <input type="text" name="Subject" placeholder="Subject" />
                </label>
                <label>
                    Message <span aria-label="required">(required)</span>
                    <textarea name="Message" placeholder="Message" required></textarea>
                </label>
                <button type="submit"><h3>Send</h3></button>
            </form>
        </div>
    </div>
`;

customElements.define('contact-page', Contact);
