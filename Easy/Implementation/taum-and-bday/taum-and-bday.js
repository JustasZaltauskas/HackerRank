/*
if B<=W X<=Y  	    	, B*Y, W*Y
if B<=W X>Y X>Y+Z		, B*(Y+Z), W*Y

3 6
9 1 1
*/
const {
	data2
} = require('./data2.js');

function parseGifts(n, input) {
	let line,
		b,
		w,
		x,
		y,
		z;

	for (let i = 1; i < n * 2; i += 2) {
		line = input[i].split(' ');

		b = Number.parseInt(line[0]);
		w = Number.parseInt(line[1]);

		line = input[i + 1].split(' ');
		x = Number.parseInt(line[0]);
		y = Number.parseInt(line[1]);
		z = Number.parseInt(line[2]);

		console.log(getLowestPrice(b, x, y, z) + getLowestPrice(w, y, x, z));
	}
}

function getLowestPrice(gifts, priceGift, priceGiftExchange, exchangePrice) {
	let price = 1 * priceGift;
	let priceAlternative = 1 * priceGiftExchange + exchangePrice;

	return (price <= priceAlternative) ? price * gifts :  priceAlternative * gifts;
}

let input = data2.split('\n');
let n = input[0];

console.log(parseGifts(n, input));

module.exports = {
	getLowestPrice
}