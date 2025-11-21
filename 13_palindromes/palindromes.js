const palindromes = function (word) {

	let cleanWord = word.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
	let right = cleanWord.length - 1;
	let middle = cleanWord.length / 2;
	console.log(cleanWord);

	for (let left = 0; left < middle; left++, right--)
	{
		console.log(cleanWord[left] + " and " + cleanWord[right]);
		if (cleanWord[left] != cleanWord[right])
			return false;
	}
	return true;
};

// Do not edit below this line
module.exports = palindromes;
