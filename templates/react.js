
function fcomponent(name, html) {
    return `
	import React from 'react';

	const ${name} = (props) => {
		return ${html}
	};

	export ${name};
    `
}

function ccomponent(name, html) {
    return `
        import React from 'react';

	class ${name} extends React.Component {
             render() {
	         return ${html}
	     }
	};

	export ${name};
    `
}

module.exports = {reactclass: ccomponent, reactfunction: fcomponent};
