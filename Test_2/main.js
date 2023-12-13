function denseRanking(scores, gitsScores) {
	let uniqueScores = [...new Set(scores)];

	uniqueScores.sort((a, b) => b - a);

	let result = gitsScores.map((gitsScore) => {
		let rank = 1;
		for (let score of uniqueScores) {
			if (gitsScore < score) {
				rank++;
			} else if (gitsScore === score) {
				break;
			}
		}
		return rank;
	});

	return result;
}

let readline = require('readline');
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Masukkan jumlah pemain lawan: ', (numOpponents) => {
	let opponentScores = [];
	let opponentCounter = 0;

	function getOpponentScores() {
		rl.question(
			`Masukkan skor pemain lawan ke-${opponentCounter + 1}: `,
			(score) => {
				opponentScores.push(parseInt(score, 10));
				opponentCounter++;

				if (opponentCounter < numOpponents) {
					getOpponentScores();
				} else {
					rl.question('Masukkan jumlah skor GITS: ', (numGitsScores) => {
						let gitsScores = [];
						let gitsCounter = 0;

						function getGitsScores() {
							rl.question(
								`Masukkan skor GITS ke-${gitsCounter + 1}: `,
								(score) => {
									gitsScores.push(parseInt(score, 10));
									gitsCounter++;

									if (gitsCounter < numGitsScores) {
										getGitsScores();
									} else {
										let rankings = denseRanking(opponentScores, gitsScores);
										console.log('Hasil peringkat GITS:');
										console.log(rankings);
										rl.close();
									}
								}
							);
						}

						getGitsScores();
					});
				}
			}
		);
	}

	getOpponentScores();
});
