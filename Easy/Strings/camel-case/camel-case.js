function countCamelCaseWords(word) {
	return (word.match(/[A-Z]/g) || []).length + 1;
}

console.log(countCamelCaseWords(''));