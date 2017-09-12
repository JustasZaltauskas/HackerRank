function super_reduced_string(s) {
	let i = 0;

	while (typeof s[i] !== 'undefined') {
		if (s[i - 1] === s[i]) {
			s = s.slice(0, i - 1) + s.slice(i + 1);
			i--;
		} else if (s[i + 1] === s[i]) {
			s = s.slice(0, i) + s.slice(i + 2);
		} else {
			i++;
		}
	}

	return s === '' ? 'Empty String' : s;
}

console.log(super_reduced_string(''));