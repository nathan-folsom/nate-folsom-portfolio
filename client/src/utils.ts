export const textToHtml = (text: string) => {
    return text
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/\n/g, '<br>')
        .replace(/ {4}/g, '<span class="tab-1"/>');
}

export const formatCode = (codeAsText: string) => ({__html: textToHtml(codeAsText)});
