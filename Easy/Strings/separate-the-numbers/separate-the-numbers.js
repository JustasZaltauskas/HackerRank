function separateNumbers(string) {
	let found = false;
	let firstNumber;
	let step = 1;

	while (step <= (string.length / 2) || !found) {
		let re = new RegExp('.{' + step + '}', 'g');
		let splitString = string.match(re);

		for (let [i, val] of splitString.entries()) {
			if ((splitString[i] - splitString[i - 1]) === 1) {
				found = true;
				firstNumber = splitString[i - 1];
				break;
			}
		}

		step++;
	}

	return found ? 'Yes ' + firstNumber : 'No'
}
console.log(
separateNumbers('91011')
);