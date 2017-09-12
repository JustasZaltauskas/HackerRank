let { _input } = require('./data.js');

let BigNumber = require('bignumber.js');

function calculateLamposts(tracks, i, j) {
	/*
		occupied = {
			row: [[intervalStart-intervalEnd],...[]]
			row.intervalLength = interval length
		}
	*/
	let occupied = {};
	let leftCells = i.mul(j);

	for (const track of tracks) {
		let [row, col1, col2] = track;
		let interval = [col1, col2];

		if (!occupied.hasOwnProperty(row)) {
			occupied[row] = [interval];
			occupied[row]['intervalLength'] = col2.sub(col1).add(1);
			leftCells = leftCells.sub(occupied[row].intervalLength);
		} else {
			let insertIndex = binaryInsertInterval(occupied[row], interval);
			occupied[row].splice(insertIndex, 0, interval);

			let {
				merged,
				intervalLength
			} = mergeSortedIntervals(occupied[row]);

			if (intervalLength.sub(occupied[row].intervalLength).gt(0)) {
				// find the difference between previous interval length and current
				leftCells = leftCells.sub(intervalLength.sub(occupied[row].intervalLength));
			}

			occupied[row] = merged;
			occupied[row].intervalLength = intervalLength;
		}
	}

	return leftCells.toString();
}

function binaryInsertInterval(intervals, targetInterval) {
	let lo = 0;
	let hi = intervals.length - 1;
	let mid;

	while (lo < hi) {
		mid = lo + hi >>> 1;

		if (intervals[mid][0].lt(targetInterval[0])) {
			lo = mid + 1;
		}

		if (intervals[mid][0].gt(targetInterval[0])) {
			hi = mid;
		}

		if (intervals[mid][0].eq(targetInterval[0])) {
			return mid;
		}
	}

	return intervals[lo][0].lt(targetInterval[0]) ? lo + 1 : lo;
}

// merge only sorted set of intervals
function mergeSortedIntervals(intervals) {
	let merged = [intervals[0]];
	let intervalLength = merged[0][1].sub(merged[0][0]).add(1);

	for (let i = 1; i < intervals.length; i++) {
		let mergedLast = merged[merged.length - 1];

		if (intervals[i][0].sub(1).lte(mergedLast[1])) {
			let startIndexDiff = mergedLast[0].sub(intervals[i][0]);
			startIndexDiff = startIndexDiff.gt(0) ? startIndexDiff : new BigNumber(0);
			let endIndexDiff = intervals[i][1].sub(mergedLast[1]);
			endIndexDiff = endIndexDiff.gt(0) ? endIndexDiff : new BigNumber(0);

			intervalLength = intervalLength.add(startIndexDiff.add(endIndexDiff));

			// find min value between new interval and last merged
			mergedLast[0] = mergedLast[0].lt(intervals[i][0]) ? mergedLast[0] : intervals[i][0];
			// find max value between new interval and last merged
			mergedLast[1] = mergedLast[1].gt(intervals[i][1]) ? mergedLast[1] : intervals[i][1];
		} else {
			merged.push(intervals[i]);
			intervalLength = intervalLength.add(intervals[i][1].sub(intervals[i][0])).add(1);
		}
	}

	return {
		merged: merged,
		intervalLength: intervalLength
	};
}

// read input
_input = _input.split('\n');
const [rows, collumns, k] = _input[0].split(' ').map(e => new BigNumber(e));
let tracks = [];

for (let i = 1; i < _input.length; i++) {
	let track = _input[i].split(' ').map(e => new BigNumber(e));
	tracks.push(track);
}

let lamposts = calculateLamposts(tracks, rows, collumns);
console.log(lamposts);