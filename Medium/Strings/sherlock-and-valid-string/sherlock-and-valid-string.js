function isSherlockString(s) {
	let chars = countFreq(s);
	// char frequency -> chars ammount
	let freq = countFreq(chars);

	let freqKeys = Object.keys(freq);
	let isValid = false;

	if (freqKeys.length === 1) {
		isValid = true;
	}
	// true if we have 1->1 or keys difference is 1 and on bigger key we have one char to remove
	if (freqKeys.length === 2) {
		if (freq[1] === 1 || (Math.abs(freqKeys[0] - freqKeys[1]) === 1 && freq[Math.max(...freqKeys)] === 1)) {
			isValid = true;
		}
	}

	return isValid ? 'YES' : 'NO';
}

function countFreq(obj) {
	let repository = {};

	for (const [i, val] of Object.entries(obj)) {
		repository[val] = typeof repository[val] === 'undefined' ? 1 : ++repository[val];
	}

	return repository;
}

console.log(isSherlockString('aabbc'));
/*
aabbc
aabbccc
aabbcccc

1: 1
2: 2

2: 2
3: 1

2: 2
4: 1
*/

