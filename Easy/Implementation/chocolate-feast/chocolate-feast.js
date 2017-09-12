/**
 * determines how many chocolates Bobby eats during each trip
 * @param  {Number} n amount of dollars
 * @param  {Number} c chocolate cost
 * @param  {Numver} m amount of chocolate wrappers needed to buy 1 chocolate
 * @return {Number}   bought amount of chocolate
 */
function chocolateCount(n, c, m) {
	let chocolates = buy(n, c);
	let wrappers = chocolates;

	while (wrappers >= m) {
		let chocolateBought = buy(wrappers, m);
		chocolates += chocolateBought;
		wrappers = chocolateBought + wrappers % m;
	}

	return chocolates;
}

function buy(money, price) {
	return Math.floor(money / price);
}

console.log(chocolateCount(10, 2, 5));