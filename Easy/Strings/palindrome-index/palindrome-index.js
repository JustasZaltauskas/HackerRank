/*
abcd
bcbc
baa
aaab
baaa
abcdecba
*/

// find char that needs to be removed so s would become palindrome
function palindromeIndex(s) {
	let indexToRemove = isPalindrome(s);

	if (indexToRemove === -1) {
		return -1;
	}

	for (let i 	= 0; i < indexToRemove.length; i++) {
		if (isPalindrome(s.substring(0, indexToRemove[i]) + s.substring(indexToRemove[i] + 1)) === -1) {
			return indexToRemove[i];
		}
	}

	return -2;
}

/**
 * if palindrome return -1
 * if not return first indexes that did not match
 * @param  {String}  s word
 */
function isPalindrome(s) {
	for (let i = 0; i < s.length / 2; i++) {
		let indexReversed = s.length - 1 - i;

		if (s[i] !== s[indexReversed]) {
			return [i, indexReversed];
		}
	}

	return -1;
}

console.log(palindromeIndex('abcd'));