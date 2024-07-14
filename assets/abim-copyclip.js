// Utilizes the behaviors of well-defined code blocks to copy the value of inline ill-defined code blocks
// This is done by dynamically adding the copy or copyleft attributes to the resulting code block
// The default 'copy' attribute puts the copy button the right, use copyleft to put it on the left
// Example 1: `copy this text`{: copy }
// Example 2: `copy this text`{: copyleft }

window.addEventListener('DOMContentLoaded', _ => {
    let counter = 97

    // apply to top level code blocks
    document.querySelectorAll('code').forEach(code => {
        if (code.parentNode.tagName !== 'pre') {
            tryIncludeCopyButton(code, counter++)
        }
    });

    // apply to code blocks nested within iframes
    document.querySelectorAll('iframe').forEach(iframe => {
        iframe.contentWindow.document.querySelectorAll('code').forEach(code => {
            if (code.parentNode.tagName !== 'pre') {
                tryIncludeCopyButton(code, counter++)
            }
        });
    });

});


function tryIncludeCopyButton(code, index) {
    let att = code.getAttribute('copy') ?? code.getAttribute('copyleft');
    if (!att) return;

    let char = String.fromCharCode(index);
    let content1 = "";
    let content2 = "";
    if (att === 'copy') {
        content1 = `<code style="padding:0.2em">${code.innerHTML}</code>`;
        content2 = `<button class="md-clipboard md-icon" style="display:contents" title="Copy to clipboard" data-clipboard-target="#__code_${char}"></button>`
    } else {
        content1 = `<button class="md-clipboard md-icon" style="display:contents" title="Copy to clipboard" data-clipboard-target="#__code_${char}"></button>`
        content2 = `<code style="padding:0.2em">${code.innerHTML}</code>`;
    }

    code.outerHTML = `<pre id="__code_${char}" style="display:inline-flex; margin:0">${content1}${content2}</pre>`;
}
