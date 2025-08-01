const observer = new MutationObserver(function(mutations) { 
    const secondTarget = document.querySelector("contact-page");

    if (secondTarget && mutations[0].target.firstChild === secondTarget) {
        this.observe(secondTarget.shadowRoot, config);
    }

    footerAdjustOnChange();
});

function footerAdjustOnChange() {
    const footer = document.querySelector("footer-menu");
    const footerHeight = footer.getBoundingClientRect().bottom - footer.getBoundingClientRect().top;

    const content = document.querySelector("#content");
    const contentEnd = content.getBoundingClientRect().bottom

    const currentFooterTop = footer.style.top ? parseFloat(footer.style.top) : 0;

    const distToBottom = window.innerHeight - footer.getBoundingClientRect().bottom;

    const pushLower = distToBottom > 2;
    const pushHigher = distToBottom < 0 && window.innerHeight - contentEnd > 0 && window.innerHeight - contentEnd > footerHeight;

    if (pushLower || pushHigher) footer.style.top = currentFooterTop + (distToBottom - 1);
    else if (distToBottom < 0 && window.innerHeight - contentEnd < 0) {
        const footerContentDist = footer.getBoundingClientRect().top - contentEnd;
        const mobileOrDesktopDist = window.innerHeight > 768 ? 100 : 55;
        if (footerContentDist > mobileOrDesktopDist) {
            footer.style.top = currentFooterTop - (footerContentDist - 2);
        }
    }
}

const target = document.querySelector("#content");

const config = {
    childList: true,
    subtree: true
}

observer.observe(target, config);

export { footerAdjustOnChange }
