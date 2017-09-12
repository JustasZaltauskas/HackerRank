const {
	complementGraph,
	buildGraph,
	BFS
} = require('../src/bfs.js');

const {
	input
} = require('../src/data.js');

const {
	input1
} = require('../src/data1.js');

const {
	input2
} = require('../src/data2.js');

describe("complementGraph function", () => {
	let graph;
	let data = ['70 1998', '70 50', '1000'];

	graph = complementGraph(graph, data, 0);

	it("complementGraph should add node to edge and vice versa", () => {
		expect(graph[70].indexOf('1998')).not.toBe(-1);
		expect(graph[1998].indexOf('70')).not.toBe(-1);
	});

	it("complementGraph should ignore duplicate graph values", () => {
		graph = complementGraph(graph, data, 0);

		expect(graph[70].reduce((acc, item) => {
			return item === '1998' ? ++acc : acc;
		}, 0)).toBe(1);
	});

	it("complementGraph should add node to edge and vice versa when we increment index", () => {
		graph = complementGraph(graph, data, 1);
		expect(graph[70].indexOf('50')).not.toBe(-1);
		expect(graph[50].indexOf('70')).not.toBe(-1);
	});

	it("complementGraph should add to graph.s if we pass string with one number", () => {
		graph = complementGraph(graph, data, 2);
		expect(graph.s).toBe('1000');
	});
});