Quicksort = (() => {

	function sort(arr) {
		return quicksort(arr);
	}

	function quicksort(arr) {
		let left = [];
		let right = [];
		let pivot = arr[0];

		if (arr.lenght <= 1) {
			return [];
		}

		for (let val of arr) {
			if (val < pivot) left.push(val);
			if (val > pivot) right.push(val);
		}
		
		if (left.length > 1) left = quicksort(left);
		if (right.length > 1) right = quicksort(right);

		return left.concat([pivot], right);
	}

	return {
		sort: sort
	}
})();

console.log(Quicksort.sort([5,8,1,3,7,9,2]));