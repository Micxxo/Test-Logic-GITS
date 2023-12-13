const readline = require('readline');
const _isBalanced = require('./func');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Masukkan pola yang ingin diperiksa: ', (input) => {
	const result = _isBalanced(input);
	console.log(result);
	rl.close();
});
