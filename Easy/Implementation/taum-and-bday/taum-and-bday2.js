/*
if B<=W X<=Y  	    	, B*Y, W*Y
if B<=W X>Y X>Y+Z		, B*(Y+Z), W*Y

3 6
9 1 1
*/
const { data } = require('./data.js');
// console.log(__base);
console.log(process.env.__base );
function getLowestPrice(n, input) {
	 let line,
		 blackGifts,
		 whiteGifts,
		 blackGiftPrice,
		 whiteGiftPrice,
		 exchangePrice;

	for (let i = 1; i < n*2; i += 2) {
		line = input[i].split(' ');

		blackGifts = Number.parseInt(line[0]);
		whiteGifts = Number.parseInt(line[1]);

		line = input[i + 1].split(' ');
		blackGiftPrice = Number.parseInt(line[0]); 
		whiteGiftPrice = Number.parseInt(line[1]); 
		exchangePrice = Number.parseInt(line[2]);

		if ( blackGifts <= whiteGifts && blackGiftPrice > whiteGiftPrice && blackGiftPrice > (whiteGiftPrice + exchangePrice) ) {
			console.log(blackGifts * (whiteGiftPrice + exchangePrice) + whiteGifts * whiteGiftPrice);
		} else if ( blackGifts >= whiteGifts && blackGiftPrice < whiteGiftPrice && whiteGiftPrice > (blackGiftPrice + exchangePrice) ) {
			console.log(whiteGifts * (blackGiftPrice + exchangePrice) + blackGifts * blackGiftPrice);
		} else {
			console.log(blackGifts * blackGiftPrice + whiteGifts * whiteGiftPrice)
		}
		
	}
}

let input = data.split('\n');
let n = input[0];

console.log(getLowestPrice(n, input));