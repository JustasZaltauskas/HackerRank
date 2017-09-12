/*
3 cases:

1: equal

aba
aba
7 (if odd then string.length * 2 , yes)
6 (if even then always yes)

2: s<t
acac
acacac

if odd then string.length(t) * 2 - t.length - s.length

ziurim substring ir salinam kol gausim lygius substring

3: s>t
23333
21

padarom lygius ir jei nelygus salinam kol gausim lygius substring
*/

/**
 * make s equal to t in k operations which are  delete last char
 * and append char
 * @param  {String} s initial string
 * @param  {String} t final string
 * @param  {Number} k number of operations
 * @return {String}   Yes if possible otherwise No
 */
function appendAndDelete(s, t, k) {
	if (s.length > t.length) {
		k -= s.length - t.length;
		s = s.substring(0, t.length);
	}

	while (s !== t.substring(0, s.length) && k > 0) {
		k--;
		s = s.substring(0, s.length - 1);
	}

	let stringDifference = t.length - s.length;
	let operationsLeft = k - stringDifference;

	let minOperationsAmount = (t.length * 2 - (stringDifference)) <= k;

	if ( operationsLeft >= 0 && operationsLeft % 2 === 0 || minOperationsAmount ) {
		return 'Yes';
	}

	return 'No';
}

function appendAndDelete(s, t, k) {

}

console.log(appendAndDelete('aca', 'acac', 6));

/*
123
56788
min: t.len + s.len
diff: 2
uniform chars:0

8,9,10

125
123
min: (t.len -  1) * 2
diff: 0
uniform chars:2


y
yu

diff: 1
uniform chars: 1

1,3...4

acac
acacac

2,4,6,8,10...11,12

diff: 2
uniform chars: 4

aca
acac

1,3,5,7...8,9

a
acac

3,5...6,7

aba
aba

3 + 2x = 5
*/