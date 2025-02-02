export const navLink = (el, context) => {
    el.addEventListener("click", () => {
        const content = document.getElementById("content");

        switch(el.attributes.id.value) {
            case "contact":
                content.innerHTML = `<contact-page></contact-page>`;
                break;
            case "skills":
                content.innerHTML = `<skills-and-projects-page></skills-and-projects-page>`;
                break;
            default:
                content.innerHTML = `<home-page></home-page>`;
        }

        if (context && window.screen.width <= 700) context.style.display = "none"
    });
}

