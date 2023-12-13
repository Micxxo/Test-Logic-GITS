const generate = require('./func'); // Pastikan path-nya sudah sesuai
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Masukkan panjang deret: ', (num) => {
	const input = parseInt(num);
	const output = generate(input);
	console.log(`Output: ${output}`);
	rl.close();
});
