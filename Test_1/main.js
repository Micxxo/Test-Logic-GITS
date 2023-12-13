const generate = require('./func');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getInput = () => {
	rl.question('Input panjang deret: ', (num) => {
		const input = parseInt(num);
		const output = generate(input);
		console.log(`Output: ${output}`);

		// Untuk looping
		rl.question('Ingin mengulang? (y/n): ', (again) => {
			if (again.toLowerCase() === 'y') {
				getInput();
			} else {
				rl.close();
			}
		});
	});
};

getInput();
