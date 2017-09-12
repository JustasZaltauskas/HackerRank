const { n, d, expenses } = require('./data1.js');

function getNotifications(n, d, expenses) {
	// frequency of expenses
	let expensesFreq = [];
	let dEven = d % 2 === 0;
	let middle = Math.round(d / 2);
	let notifications = 0;

	for (let i = 0; i < n; i++) {
		if ( i >= d) {
			let sumFreq = 0;
			let median = 0;
			let medianFound = false;
			let j = 0;

			while(!medianFound) {
				sumFreq += expensesFreq[j] | 0;

				if(dEven && sumFreq >= middle && median === 0) {
					median = j;
				}

				if (dEven && sumFreq >= (middle + 1)) {
					median += j;
					median /= 2;
					medianFound = true;
				}

				if (!dEven && sumFreq >= middle) {
					median = j;
					medianFound = true;
				}

				j++;
			}

			expensesFreq[expenses[i - d]]--;
			notifications = (median * 2) <= expenses[i] ? ++notifications : notifications;
		}

		expensesFreq[expenses[i]] = expensesFreq.hasOwnProperty(expenses[i]) ? ++expensesFreq[expenses[i]] : 1;
	}

	return notifications;
}

console.log(getNotifications(n, d, expenses));