const calculateNum = (n) => {
	return (n * (n + 1)) / 2;
};

const generate = (length) => {
	let sequence = [];

	for (let i = 1; i <= length; i++) {
		let num = calculateNum(i);
		if (i > 1) {
			num -= i - 1;
		}
		sequence.push(num);
	}

	return sequence.join('-');
};

module.exports = generate;
