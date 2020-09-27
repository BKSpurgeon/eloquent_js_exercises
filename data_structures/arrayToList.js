function arrayToList(array){
	let list = {value: null, rest: null};

	let lastItem = null;

	for (var i = array.length - 1; i >= 0; i--) {
		let currentItem = {value: array[i], rest: lastItem };

		list.rest = lastItem;
		list.value = array[i];

		lastItem = currentItem;
		}

	return list;
	}

module.exports = arrayToList;
