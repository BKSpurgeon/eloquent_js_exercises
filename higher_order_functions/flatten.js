const flatten = function(arrayList){	
	return arrayList.reduce( (a, b) => a.concat(b));	
}


module.exports = flatten