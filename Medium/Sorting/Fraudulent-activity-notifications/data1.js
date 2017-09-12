fs = require('fs');

let n = 200000;
let d = 10000;
let expenses;

let data = fs.readFileSync('expenses.txt', 'utf8');
expenses = data.split(' ').map(Number);
n = expenses.length;

module.exports = {
	n,
	d,
	expenses
}