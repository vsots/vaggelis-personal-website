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

        if (context && window.screen.width <= 700) {
            let mobileMenu;

            if (context.localName === "mobile-open-menu") mobileMenu = context;
            else mobileMenu = context.shadowRoot.querySelector("mobile-open-menu");

            if (mobileMenu.computedStyleMap().get("display").value !== "none") {
                mobileMenu.style.animation = "fadeOut 0.2s ease-out 0s 1 normal forwards";
                toggleMobileMenuGlyph(context, false);
            }
        } else {
            const tabs = context.shadowRoot.querySelectorAll("#menu > h3");
            tabs.forEach(tab => tab.style.borderBottom = "3px transparent solid");
            if (el.id === "name") tabs[0].style.borderBottom = "3px #171D3A solid";
            else el.style.borderBottom = "3px #171D3A solid";
        }
    });
}

export const toggleMobileMenuGlyph = (context, isOpen) => {
    let glyphs;
    if (context.localName === "mobile-open-menu") glyphs = context.parentNode.querySelectorAll("hr");
    else glyphs = context.shadowRoot.querySelectorAll("hr");

    if (!isOpen) {
        glyphs[0].style.animation = "rotateBack45 0.2s ease-in 0s 1 normal forwards";
        glyphs[1].style.animation = "rotateBackMinus45 0.2s ease-in 0s 1 normal forwards";
    } else {
        glyphs[0].style.animation = "rotate45 0.3s ease-out 0s 1 normal forwards";
        glyphs[1].style.animation = "rotateMinus45 0.3s ease-out 0s 1 normal forwards";
    }
    
}

