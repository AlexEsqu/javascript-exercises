const sumAll = function(a, b) {

	if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)
		|| Number.isNaN(a) || Number.isNaN(b))
		return 'ERROR';


	let result = 0;
	let start = a < b ? a : b;
	let end = a < b ? b : a;

	while (start <= end)
	{
		result += start;
		start++;
	}

	return result;
};

// Do not edit below this line
module.exports = sumAll;
