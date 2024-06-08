window.addEventListener('DOMContentLoaded', _ => {

    // apply to top level anchors
    document.querySelectorAll('a').forEach(link => {
        if (link.href.startsWith('https') && link.getAttribute('target') !== '_blank') {
            link.setAttribute('target', '_blank');
        }
    });

    // apply to anchors nested within iframes
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe.contentWindow.document.querySelectorAll('a').forEach(link => {
            if (link.href.startsWith('https') && link.getAttribute('target') !== '_blank') {
                link.setAttribute('target', '_blank');
            }
        });
    });

});

