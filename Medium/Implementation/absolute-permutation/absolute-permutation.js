/*
	|pos - i| = k

	i = pos + k
	i = pos - k

	k <= 0 < N

*/
const fs = require('fs');

/**
 * find the lexicographically smallest absolute permutation
 * @param  {Number} n numbers range [1:N]
 * @param  {Number} k absolute difference
 * @return {Array}    permutation
 */
function findAbsolutePermutation(n, k) {
	let permutation = {};
	let answer = [];

	for (let i = 1; i <= n; i++) {
		let permutationValue = calculatePermutationValue(i, n, k, permutation);

		if (permutationValue !== null) {
			permutation[permutationValue] = true;
			answer.push(permutationValue);
		} else {
			return -1;
		}
	}

	return answer;
}

function calculatePermutationValue(pos, n, k, permutation) {
	let permutationValue = pos - k;
	let isInRange = (value, n) => value <= n && value >= 1;

	if (isInRange(permutationValue, n) && typeof permutation[permutationValue] === 'undefined') {
		return permutationValue;
	}

	permutationValue = pos + k;
	if (isInRange(permutationValue, n) && typeof permutation[permutationValue] === 'undefined') {
		return permutationValue;
	}

	return null;
}

let permutation = findAbsolutePermutation(10, 1);

fs.writeFile('./permutation.txt', permutation, (err) => console.log(err));