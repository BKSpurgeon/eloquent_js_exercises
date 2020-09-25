const every = function(array, predicate){	
	
	for (var i = array.length - 1; i >= 0; i--) {
		if (predicate(i) == false){
			return false;
		}
	}

	return true;
}


module.exports = every