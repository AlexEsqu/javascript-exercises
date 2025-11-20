const removeFromArray = function(array, ...elemsToRemove) {
	let result = array;
	for (const elemToRemove of elemsToRemove)
		result = result.filter((elem) => elem !== elemToRemove);
	return result;
};

// Do not edit below this line
module.exports = removeFromArray;
