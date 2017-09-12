const { n, m, peopleKnowledge } = require('./data.js');
const BigNumber = require('../node_modules/bignumber.js');

/*
	n- people
	m- topics

	ouput:
		max number of topics , 2people team can know
		number of 2people teams that know maximum numbers of topics
*/
function bitwiseOrSum(number, number2) {
	let ones = 0;

	for (let i = 0; i < number.length; i++) {
		if ((number[i] | number2[i]) === 1) {
			ones++;
		}
	}

	return ones;
}

function getMaxKnowledege(knowledge) {
	let max = 0;
	let maxTeams = 0;

	for (let i = 0; i < knowledge.length - 1; i++) {
		for (let j = i; j < knowledge.length; j++) {
			let bitwiseOR = bitwiseOrSum(knowledge[i], knowledge[j]);

			if (bitwiseOR > max) {
				max = bitwiseOR;
				maxTeams = 0;
			}

			if (bitwiseOR === max) {
				maxTeams += 1;
			}
		}
	}

	console.log(max);
	console.log(maxTeams);
}

getMaxKnowledege(peopleKnowledge);
