function axiosget(url) {
    return `
        axios.get('${url}')
	.then(function (response) {

	})
	.catch(function (error) {

	})
    `
}

function axiospost(url, data) {
    return `
        axios.post(${url}, ${data})
	.then(function (response) {
          
	})
	.catch(function (error) {
	
	})
    `
}

function axiosput(url, data) {
    return `
        axios.put(${url}, ${data})
	.then(function (response) {

	})
	.catch(function (error) {

	})
    `
}

function axiosdelete(url) {
    return `
        axios.delete(${url})
	.then(function (response) {

	})
	.catch(function (error) {

	})
    `
}

module.exports = {get: axiosget, post: axiospost, put: axiosput, _delete: axiosdelete};
