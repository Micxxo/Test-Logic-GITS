const _isBalanced = (inputPattern) => {
	const stack = [];
	const brackets = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	for (let i = 0; i < inputPattern.length; i++) {
		const char = inputPattern[i];
		if (brackets[char]) {
			stack.push(char);
		} else if (brackets[stack.pop()] !== char) {
			return 'NO';
		}
	}

	return stack.length === 0 ? 'YES' : 'NO';
};

module.exports = _isBalanced;
