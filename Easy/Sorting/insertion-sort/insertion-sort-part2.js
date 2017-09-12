function processData(input) {
	let [n, numbers] = input.split('\n');
	numbers = numbers.split(' ').map(Number);

	for (let i = 1; i < numbers.length; i++) {
		let toInsert = numbers[i];

		for (let j = i; j >= 0; j--) {
			if (toInsert < numbers[j - 1]) {
				numbers[j] = numbers[j - 1];
			} else {
				numbers[j] = toInsert;
				break;
			}
		}
	}

	return numbers;
}

console.log(
	processData(`6
10 4 3 5 6 2`));