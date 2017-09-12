const { n, d, expenses } = require('./data1.js');

function getNotifications(n, d, expenditure) {
	if (d > n) {
    return 0;
  }

  let notificationsCounter = 0;
  let transactions = expenditure.slice(0, d);
  let transactionsSorted = transactions.slice().sort((a, b) => a - b);
  let median;

  for (let i = d; i < n; i++) {
    median = getMedian(transactionsSorted);
    notificationsCounter = (median * 2) <= expenditure[i] ? ++notificationsCounter : notificationsCounter;

    let transactionToDelete = binarySearch(transactionsSorted, transactions[0]);
    transactionsSorted.splice(transactionToDelete, 1);
    transactions.shift();

    transactions.push(expenditure[i]);
    let transactionToInsert = binaryInsert(transactionsSorted, expenditure[i]);
    transactionsSorted.splice(transactionToInsert, 0, expenditure[i]);
  }

  return notificationsCounter;
}

function getMedian(numbers) {
  let middle = Math.floor(numbers.length / 2);

	if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  }
  
  return numbers[middle];
}

function binarySearch(arr, key) {
  let middle;
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    middle = Math.floor((end + start) / 2);

    if (arr[middle] < key) {
      start = middle + 1;
    } else if (arr[middle] > key) {
      end = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

function binaryInsert(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start < end) {
    mid = start + end >>> 1;
    if (arr[mid] < val) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return val >= arr[arr.length - 1] ? start + 1 : start;
}

let notificationsCounter = getNotifications(n, d, expenses);
console.log(notificationsCounter);