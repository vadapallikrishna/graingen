function action(type, data) {
    return `{type: ${type}, data: ${data}}`;
}

function addfield(store,field) {
    json = JSON.parse(store);
    eval(`json.${field} = undefined`);
    return json.toString();
}

function returnflux(name) {
    return `
       const dispatch = new (class Dispatcher {
           callbacks = [];
           register(fn) {
                callbacks.push(fn);
           }

           unregister(id) {}

           static dispatch() {    
               let store = Object.assign(store,action);
               callbacks.forEach((callback)=>callback(store));
	       }
       })
    `
}

function store(fields) {
    return `module.exports = {
	${fields.map((name)=>`${name}: undefined,`)}
    }`
}
