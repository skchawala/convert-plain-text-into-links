'use strict'
function convertPlainTextIntoLinks(text, target = '_blank', textColor = 'white') {
    return (text || '').replace(/([^\S]|^)(((https?:\/\/)|(www\.))(\S+))/gi, function(match, space, url) {
        let hyperlink = url;
        if (!hyperlink.match('^https?://')) {
            hyperlink = 'http://' + hyperlink;
        }
        return `<pre>${space}</pre><a href="${hyperlink}" target="${target}" style="color:${textColor};" >${url}</a>`;
    });
}

module.exports =  convertPlainTextIntoLinks;