function countLetters(inputString, letter){
	let numberOfLetters = 0;

	for (var i = inputString.length - 1; i >= 0; i--) {
		if (inputString[i] === letter) {
			numberOfLetters += 1;
		}
	}

	return numberOfLetters;
}

module.exports = countLetters;