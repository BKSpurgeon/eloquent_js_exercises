const some = function(array, predicate){

	for (var i = array.length - 1; i >= 0; i--) {
		if (predicate(i) == true){
			return true;
		}
	}

	return false;
}




module.exports = some