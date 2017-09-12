let { arr } = require('./data.js');

function countingSort(arr) {
    let count = [];
    let sorted = [];
    //get frequency of each number in arr
    for (let val of arr) {
        count[val] = typeof count[val] === 'undefined' ? 1 : ++count[val];
    }

    //sum each value of count array with previous one
    for (let i = 1; i < count.length; i++) {
        count[i] = (count[i] | 0) + (count[i - 1] | 0);
    }

    for (let val of arr) {
        sorted[count[val]-- - 1] = val;
    }

    return sorted;
}

console.log(countingSort(arr));

module.exports = {
    countingSort
}