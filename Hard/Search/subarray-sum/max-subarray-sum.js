const { arr, n, m } = require('./data1.js');

function maxSubArray(arr, m) {
	let prefixArr = [];

	prefixArr = arr.map((el, i) => sum = (el % m + sum) % m, sum = 0, m);
 	console.log(prefixArr);
	prefixArr.sort();
 	console.log(prefixArr);
	console.log(subArrayModuloSum(prefixArr, -1, 0, m));
}

/*
	arr - prefix array
*/
function subArrayModuloSum(arr, i, j, m) {
	return (arr[j] - (arr[i - 1] || 0) + m) % m;
}

maxSubArray(arr, m);