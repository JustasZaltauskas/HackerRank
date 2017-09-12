let fs = require('fs')

let random = (max) => Math.floor(Math.random() * max + 1);
let arr = [];

for (let i = 0; i < 100000; i++) {
	arr.push(random(100000));
}

module.exports = {
	arr
}