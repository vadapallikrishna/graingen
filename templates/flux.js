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
           static callstore(store,action) {    
               Object.assign(store,action) 
	   }
       })
    `
}

function store(name,fields) {
    return `module.exports = {
	${fields.map((name)=>`${name}: undefined,`)}
    }`
}
