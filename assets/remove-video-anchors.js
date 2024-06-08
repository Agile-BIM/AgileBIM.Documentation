// This code fixes videos getting wrapped by GLightBox
// It also pre-loads the videos into memory to make the time selector functional

window.addEventListener('DOMContentLoaded',  async _ => {
    async function preloadVideo(vid) {
        const res = await fetch(vid.firstChild.src);
        const blob = await res.blob()
        vid.innerHTML = "";
        vid.src = URL.createObjectURL(blob);
    }
    let counter = 97

    // apply to top level code blocks
    document.querySelectorAll('video').forEach(vid => {
        if (vid.parentNode.tagName.toUpperCase() === 'A') {
            vid.setAttribute("preload", "auto");
            vid.parentNode.outerHTML = vid.outerHTML;
        }
    });


    // apply to code blocks nested within iframes
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe.contentWindow.document.querySelectorAll('video').forEach(vid => {
            if (vid.parentNode.tagName.toUpperCase() === 'A') {
                vid.setAttribute("preload", "auto");
                vid.parentNode.outerHTML = vid.outerHTML;
            }
        });
    });


    document.querySelectorAll('video').forEach(vid => {
        preloadVideo(vid);
    });

});



