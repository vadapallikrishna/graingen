function htmlcss(property, value) {
    return `${property}:${value};`
}

function  appendcss(query, css) {
    return `${query}{${css}}`
}

module.exports = {attrstyle: htmlcss, style: appendcss}
