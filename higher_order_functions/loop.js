const loop = function(n, testFunction, updateFunction, bodyFunction){

	for (let i = n; testFunction(i); i = updateFunction(i)) {
		bodyFunction(i)
	}
}

module.exports = loop