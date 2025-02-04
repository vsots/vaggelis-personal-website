class TabActive extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"}).innerHTML = `<div></div>`;
    }

    connectedCallback() {
        if (window.screen.width <= 700) {
            this.style.display = "none";
        } else {
            const headerRoot = this.parentNode.parentNode;
            const header = headerRoot.querySelector("#header");
            const home = headerRoot.querySelector("#home");

            const headerPosition = header.getBoundingClientRect();
            const homePosition = home.getBoundingClientRect();

            const top = headerPosition.bottom;
            const left = homePosition.left;
            const width = homePosition.width;

            const styles = {
                position: "absolute",
                top: `${top - 4}`,
                left: `${left}`,
                width: `${width}`,
                border: "none",
                height: "3px",
                backgroundColor: "#171D3A"
            }
            Object.assign(this.style, styles);
        }
    }
}

customElements.define("tab-active", TabActive);
