const { data } = require('./data.js');
const _ = require('lodash');

function countRemovedEdgesToMakeEvenTree(graph, vertices) {
	let removedEdges = 0;
	graph = _.cloneDeep(graph);

	for (let i = 1; i <= vertices; i++) {
			let visited = {};
			visited[i] = true;
			let nodeAdjacency = [];

			for (let vertex of graph[i]) {
				let nodes = getSubTreeHeight(graph, vertex, visited);
				if (nodes % 2 === 0) {
					removedEdges++;
					graph[vertex].splice(graph[vertex].indexOf(i), 1);
				} else {
					nodeAdjacency.push(vertex);
				}
			}
			graph[i] = nodeAdjacency;
	}
	return removedEdges;
}

function getSubTreeHeight(graph, vertex, visited = {}) {
	let toVisit = [vertex];
	let nodes = 0;

	while (toVisit.length > 0) {
		let currentNode = toVisit.pop();
		nodes++;

		if (!visited.hasOwnProperty(currentNode)) {
			visited[currentNode] = true;
		}

		for (let i = 0; i < graph[currentNode].length; i++) {
			if (!visited.hasOwnProperty(graph[currentNode][i])) {
				toVisit.push(graph[currentNode][i]);
			}
		}
	}
	return nodes;
}

const input = data.split('\n');
const [vertices, edges] = input[0].split(' ').map(Number);
// init graph
const graph = input.splice(1).reduce((graph, edge, i) => {
	edge = edge.split(' ').map(Number);
	// add edges to graph
	[graph[edge[0]], graph[edge[1]]] = [
		graph[edge[0]] ? graph[edge[0]].concat(edge[1]) : [edge[1]],
	 	graph[edge[1]] ? graph[edge[1]].concat(edge[0]) : [edge[0]]
	];

	return graph;
}, {});

let edgesToRemove = countRemovedEdgesToMakeEvenTree(graph, vertices);
console.log(edgesToRemove);