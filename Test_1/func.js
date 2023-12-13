// Rumus A000124 of Sloane’s OEIS yang saya dapat dari internet yaitu = a(n) = n * (n + 1)/2

//Rumus
const calculateNum = (n) => {
	return (n * (n + 1)) / 2;
};

// Generate Output
const generate = (length) => {
	let output = [];

	for (let i = 1; i <= length; i++) {
		let num = calculateNum(i);

		// Karena di contoh output pada soal, output asli dikurangi 1, 2, 3, ... maka:
		if (i > 1) {
			num -= i - 1;
		}
		output.push(num);
	}

	return output.join('-');
};

module.exports = generate;
