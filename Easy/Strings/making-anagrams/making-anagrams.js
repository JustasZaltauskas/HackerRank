/*
Visi nesutampa
def
abc

6 + 2 = 8

1Sutampa
cde
abc

nesutampa = 4

2Sutampa
abc
abd

nesutampa = 2

Visi nesutampa
a
b
2 + 2 = 4

aa
bb

aaa
aaaab
*/

function makingAnagrams(s1, s2) {
	let chars = {};
	let charsMismatches = 0;

	let length = s1 > s2 ? s1 : s2;

	for (let char of s1) {
		chars[char] = typeof chars[char] === 'undefined' ? 1 : ++chars[char];
		charsMismatches++;
	}

	for (let char of s2) {
		if (typeof chars[char] === 'undefined' || chars[char] < 1) {
			charsMismatches++; 
		} else {
			chars[char]--;
			charsMismatches--;
		}
	}

	return charsMismatches;
}

// function makingAnagrams(s1, s2) {
// 	let chars = {};

// 	let intersection = s1.concat(s2).split('').filter((char) => {
// 		if (chars[char]) {
// 			return false;
// 		}

// 		chars[char] = true;
// 		return true;
// 	}).length;

// 	return (s1.length + s2.length) - intersection * 2;
// }

// function makingAnagrams(s1, s2) {
// 	return [...new Set(s1)].filter(x => new Set(s2).has(x));
// }

// s1len + s2len - tiek kiek sutampa * 2

console.log(makingAnagrams('bb', 'aab'));


