/**
 * Given an array of integers, find and print the maximum number of integers you can select
 * from the array such that the absolute difference between any two of the chosen integers is <= 1
 * @param  {Number} n       array length
 * @param  {Array} numbers 
 * @return {Number}         
 */
let x = [1, 1, 1];

function pickingNumbers(numbers) {
	let numberFrequency = [];
	let maxNumber = 0;
	// biggest array length with values that has an absolute difference of 1
	let biggestArray = 0;

	for (number of numbers) {
		maxNumber = Math.max(maxNumber, number);

		if (typeof numberFrequency[number] === 'undefined') {
			numberFrequency[number] = 1;
		} else {
			numberFrequency[number] = numberFrequency[number] + 1;
		}
	}

	for (let i = 1; i <= maxNumber; i++) {
		let currentFrequency = (numberFrequency[i] || 0) + (numberFrequency[i+1] || 0);
		biggestArray = Math.max(biggestArray, currentFrequency);
	}

	return biggestArray;
}

console.log(pickingNumbers(x));