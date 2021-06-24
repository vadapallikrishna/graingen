
function importnodejs(variable, importname) {
    return `const ${variable} = require('${importname}')`;
}

function importts(d, importas, importname) {
    if(d)
        return `import ${importas} from importname`;
    else
	return `import { ${importas} } from importname`;
}

module.exports = {noderequire: importnodejs, tsrequire: importts};
