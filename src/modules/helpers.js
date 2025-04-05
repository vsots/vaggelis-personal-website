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

        if (context && window.innerWidth <= 768) {
            const mobileMenu = document.querySelector("header-and-menu").shadowRoot.querySelector("mobile-open-menu");

            if (mobileMenu.computedStyleMap().get("display").value !== "none") {
                mobileMenu.style.animation = "fadeOut 0.2s ease-out 0s 1 normal forwards";
                toggleMobileMenuGlyph(context, false);
                document.querySelector("header-and-menu").isMenuOpen = false;
                document.querySelector("body").style.overflow = "scroll";
            }
            
            window.scrollTo(0, 0);
        } else {
            const tabs = context.shadowRoot.querySelectorAll("#menu > h4");
            tabs.forEach(tab => tab.style.borderBottom = "3px transparent solid");
            if (el.id === "name") tabs[0].style.borderBottom = "3px #171D3A solid";
            else el.style.borderBottom = "3px #171D3A solid";
        }
    });
}

export const toggleMobileMenuGlyph = (mobileMenu, isOpen) => {
    let glyphs;
    if (mobileMenu.localName === "mobile-open-menu") glyphs = mobileMenu.parentNode.querySelectorAll("hr");
    else glyphs = mobileMenu.shadowRoot.querySelectorAll("hr");

    if (!isOpen) {
        glyphs[0].style.animation = "rotateBack45 0.2s ease-in 0s 1 normal forwards";
        glyphs[1].style.animation = "rotateBackMinus45 0.2s ease-in 0s 1 normal forwards";
    } else {
        glyphs[0].style.animation = "rotate45 0.3s ease-out 0s 1 normal forwards";
        glyphs[1].style.animation = "rotateMinus45 0.3s ease-out 0s 1 normal forwards";
    }
}
