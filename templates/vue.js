function template(html,css) {
    return `<template>
        ${html}
    </template>
    <style type="text/css">
        ${css}
    </style>
    ` 
}

function newdata(field, defaultvalue) {
    return `${field}: ${defaultvalue}`
}

function newaction(name, fn) {
   return `${name} = ${fn}`
}

function newstore(name,state) {
    return `const ${name} = new Vuex.store({state: state})`
}

function route(routes) {
    return `
    const routes = {
       ${routes.forEach((route,element)=>`${route}: ${element},`)}
    }
    `
}

function vueapp() {
    return `
        Vue.use(Vuex)
        var app = new Vue({
            el: "#app"
	})
    `
}

