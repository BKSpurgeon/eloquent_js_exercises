const range = (startingInteger, endingInteger, step = 1) => {
	array = [];

	for (let i = startingInteger; i < (endingInteger + 1); step++) {
		array.push(i);
	}

	return array;
}

function sum(array){
	let sum = 0;

	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum;
}


module.exports = {range: range, sum: sum};



/// 6 * 1/2 *  3