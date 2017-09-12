const { getLowestPrice } = require('../taum-and-bday.js');
const { data2 } = require('../data2.js');

/*
	getLowestPrice(gifts, priceGift, priceGiftExchange, exchangePrice
*/
describe('getLowestPrice function', () => {
	it('getLowestPrice should return 0 when there are no gifts', () => {
		expect(getLowestPrice(0,0,0,5)).toBe(0);
	});	
	it('getLowestPrice should return 1000 when 1000,1,1000,1', () => {
		expect(getLowestPrice(1000,1,1000,1)).toBe(1000);
	});
	it('getLowestPrice should return 2 when 1,1000,1', () => {
		expect(getLowestPrice(1,1000,1,1)).toBe(2);
	});

	it('getLowestPrice should return 2 when 1,1000,1', () => {
		expect(getLowestPrice(1000000000,1000000000,1000000000,1000000000)).toBe(1000000000000000000);
	});
});