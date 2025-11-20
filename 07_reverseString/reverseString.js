const reverseString = function(str) {
	let end = str.length - 1;
	let result = "";
	for (let begin = 0; begin < str.length; begin++)
	{
		result += str[end];
		end--;
	}
	return result;
};

// Do not edit below this line
module.exports = reverseString;
