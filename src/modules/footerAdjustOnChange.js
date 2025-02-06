const observer = new MutationObserver(function(_) {
    const footer = document.querySelector("footer-menu");
    const footerHeight = footer.getBoundingClientRect().bottom - footer.getBoundingClientRect().top;

    const content = document.querySelector("#content");
    const contentEnd = content.getBoundingClientRect().bottom

    const currentFooterTop = parseFloat(footer.style.top);

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
});

const target = document.querySelector("#content");

const config = {
    childList: true
}

observer.observe(target, config);
