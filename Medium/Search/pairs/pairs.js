function getPairs(arr, k) {
	let numbers = {};
	let pairs = 0;

	for (let el of arr) {
		if (numbers[el + k]) {
			pairs++;
		}

		if (numbers[el - k]) {
			pairs++;
		}

		numbers[el] = true;
	}

	return pairs;
}

let arr = [1,5,3,4,2];
let pairs = getPairs(arr , 2);
console.log(pairs);
