const fibonacci = function(target) {
	if (target < 0)
		return 'OOPS';
	if (target == 0)
		return 0;
	if (target == 1 || target == 2)
		return 1;

	let fi = [0, 1, 1];

	for (let i = 3; i <= target; i++)
	{
		fi.push(fi[i - 2] + fi[i - 1]);
	}
	return fi[target];
};

// Do not edit below this line
module.exports = fibonacci;
