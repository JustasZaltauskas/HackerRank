/*
aaabbb
ab
abc
mnop
xyyx
xaxbbbxx

abb aaa
*/
function getChangesToMakeAnagram(s) {
	let chars = {};
	let charsDiff = 0;

	if (s.length % 2 !== 0) {
		return -1;
	}

	for (const [i, val] of [...s].entries()) {
		if (i < s.length / 2) {
			chars[val] = typeof chars[val] === 'undefined' ? 1 : ++chars[val];
		} else {
			if (typeof chars[val] === 'undefined' || chars[val] < 1) {
				charsDiff++;
			} else {
				chars[val]--;
			}
		}
	}

	return charsDiff;
}

console.log(getChangesToMakeAnagram('xaxbbbxx'));