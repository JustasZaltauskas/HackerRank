function processData(input) {
	let [n, numbers] = input.split('\n');
	numbers = numbers.split(' ');
	let toInsert = numbers[numbers.length - 1];

	for (let i = numbers.length - 1; i >= 0; i--) {
		if (toInsert < numbers[i - 1]) {
			numbers[i] = numbers[i - 1];
		} else {
			numbers[i] = toInsert;
			break;
		}
	}

	return numbers;
}

console.log(
processData(`5
2 4 6 8 3`)
);