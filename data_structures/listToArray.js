
function listToArray(list, array = []){

	debugger;

	array.push(list.value);	

	if (list.rest !== null) {				
		listToArray(list.rest, array);		
	}
	else
	{
		console.log(array)
		return array;	
	}

	return array;
}

module.exports = listToArray;