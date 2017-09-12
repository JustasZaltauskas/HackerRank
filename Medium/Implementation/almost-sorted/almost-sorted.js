// TODO: try with guards by making array length + 2(one in front, one in back)
const {
	input
} = require('./dataReverse.js');

function parseInput(string) {
	return string.split('\n').map((string, index) => {
		return index !== 0 ? string.split(' ').map((value) => Number.parseInt(value)) : Number.parseInt(string);
	});
}

// find the first index that is not in ascending order
function baseValue(array, i = 0) {
	if (i >= array.length - 1) return null;

	while (i < array.length - 1)  {
		if (array[i] > array[i + 1]) {
			return i;
		}
		i++;
	}

	return null;
}

function processData(input) {
	let [n, numbers] = parseInput(input);
	let isSwap = true;
	let baseIndex = baseValue(numbers);
	let operators = {
		'<': (a, b) => a < b,
		'>': (a, b) => a > b
	}

	if (baseIndex === null) {
		return 'yes';
	}

	let i = baseIndex + 1;
	let endIndex = i;
  /*
  	isSwap = true , >
  	isSwap = false , <
  */
	isSwap = typeof numbers[i + 1] === 'undefined' || numbers[i] < numbers[i + 1];
	let comparison = isSwap ? '<' : '>';

	while (operators[comparison](numbers[i],numbers[i + 1]) && numbers[i + 1] < numbers[baseIndex]) {
		i++;
		endIndex = i + 1;
	}
	
	endIndex = isSwap ? endIndex : --endIndex;

	if (endIndex < numbers.length ) {
		[numbers[baseIndex], numbers[endIndex]] = [numbers[endIndex], numbers[baseIndex]];
	}

	if (baseValue(numbers, endIndex) === null) {
		if (isSwap && numbers[baseIndex + 1] <= numbers[endIndex] &&
		 	 (typeof numbers[baseIndex - 1] === 'undefined' || numbers[baseIndex - 1] < numbers[baseIndex])) {
			return `swap ${baseIndex + 1} ${endIndex + 1}`;
		}

		if (!isSwap) {
			return `reverse ${baseIndex + 1} ${endIndex + 1}`;
		}
	}

	return 'no';
}

console.log(processData(input));