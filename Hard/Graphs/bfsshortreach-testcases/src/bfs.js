const {
	input
} = require('./data.js');

const {
	input1
} = require('./data1.js');

const {
	input2
} = require('./data2.js');

/**
 * BFS search with tracking shortest path form s  to each node
 * @param  {Object} graph  node: [its neighbours]
 * @param  {Number} weight edge weight
 */
function BFS(graph, weight) {
	let queque = [graph.s];
	// key - node
	// val - length to node
	let visited = {};
	visited[graph.s] = 0;
	
	if (graph.hasOwnProperty(graph.s)) {
		while (queque.length > 0) {
			let visitedNode = queque.shift();

			// add node neighours to visited and neighbours
			for (node of graph[visitedNode]) {
				if (typeof visited[node] === 'undefined') {
					queque.push(node);
					// origin is only the first node
					visited[node] = visited[visitedNode] + weight;
				}
			}
		}
	}
	printAnswer(graph, visited);
}

function printAnswer(graph, visited = {}) {
	let answer = "";
	for (let i = 1; i <= graph.n; i++) {
		if (i === Number.parseInt(graph.s)) continue;

		if (visited.hasOwnProperty(i)) {
			answer += visited[i] + " ";
		} else {
			answer += -1 + " ";
		}
	}

	console.log(answer);
}
// add node->edge to graph structure
function complementGraph(graph = {}, input, index) {
	let [node, edge] = input[index].split(' ');

	if (typeof edge !== 'undefined') {
		if (typeof graph[node] === 'undefined') {
			graph[node] = [edge];
		} else if (graph[node].indexOf(edge) === -1) {
			graph[node].push(edge);
		}

		if (typeof graph[edge] === 'undefined') {
			graph[edge] = [node];
		} else if (graph[edge].indexOf(node) === -1) {
			graph[edge].push(node);
		}
	} else {
		graph.s = node;
	}

	return graph;
}

function buildGraph(input, index) {
	graph = {};

	[graph.n, graph.m] = input[index].split(' ');
	index++;

	while (typeof graph.s === 'undefined') {
		graph = complementGraph(graph, input, index);
		index++;
	}

	return [graph, index];
}

function processData(input) {
	let q, // number of queries
		graph; // has parameter of s
	let weight = 6; // edge weight

	input = input.split('\n');
	q = input[0];

	let index = 1;

	while (q > 0) {
		[graph, index] = buildGraph(input, index);
		BFS(graph, weight);
		q--;
	}
}
processData(input2);

module.exports = {
	complementGraph,
	buildGraph,
	BFS
};