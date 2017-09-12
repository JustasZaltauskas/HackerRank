/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data1_js__ = __webpack_require__(1);


function complementGraph(m, index, array) {
	let graph = {};
	graph.duplicates = 0;

	for (let i = index; i < index + m * 2; i += 2) {
		let node = Number.parseInt(array[i]);
		let edge = Number.parseInt(array[i + 1]);
		console.log(i);
		if (graph[node]) {
			if (graph[node].indexOf(edge) !== -1) {
				// console.log("duplicate");
				graph.duplicates++;
				m++;
				// console.log(m);
				continue;
			}
			graph[node].push(edge);
		} else {
			graph[node] = [edge];
		}

		if (graph[edge]) {
			graph[edge].push(node);
		} else {
			graph[edge] = [node];
		}
	}

	return graph;
}

/**
 * BFS search with tracking shortest path form s to each node
 * @param  {Object} graph  [node: [its neighbours]]
 * @param  {Number} s      [source node]
 * @param  {Number} weight [edge]
 * @param  {Number} n 	   [number of nodes]
 */
function BFS(graph, s, weight, n) {
	let answer = ""; // used for console.log();

	if (!graph.hasOwnProperty(s)) {

		for (i of Array.from(new Array(n - 1).keys())) {
			answer += -1 + " ";
		}

		console.log(answer);
		return;
	}
	let queque = [s];
	// key - node
	// val - length to node
	let visited = {};
	visited[s] = 0;
	// key - node
	// val - origin node
	let neighbours = {};

	while (queque.length > 0) {
		let toVisit = queque.shift();

		// add node neighours to visited and neighbours
		for (node of graph[toVisit]) {
			if (visited[node] === undefined) {
				queque.push(node);
				// origin is only the first node
				neighbours[node] = neighbours[node] ? neighbours[node] : toVisit;
				visited[node] = visited[neighbours[node]] + weight;
			}
		}
	}

	for (let i = 1; i <= n; i++) {
		if (i === s) continue;

		if (graph.hasOwnProperty(i)) {
			answer += visited[i] + " ";
		} else {
			answer += -1 + " ";
		}
	}

	console.log(answer);
}

function processData(input) {
	let q, // number of queries
		n, // number of nodes
		m, // number of edges
		s; // starting point
	let graph = {};
	let weight = 6; // edge weight

	// input = input.replace(/[ ]/g, ',').split(',');
    console.log('5: ' + input[0]);
    console.log('5: ' + input[1]);
    console.log('5: ' + input[2]);
    console.log('5: ' + input[3]);
    console.log('5: ' + input[4]);
    console.log('5: ' + input[5]);
	return;
	q = Number.parseInt(input[0]);
	console.log("q= " + q);
	let i = 1; // input array current index
	while (q > 0) {
		n = Number.parseInt(input[i]);
		m = Number.parseInt(input[i + 1]);
		i += 2;

		console.log("i= " + i);
		console.log("n= " + n);
		console.log("m= " + m);

		graph = complementGraph(m, i, input);
		// console.log(graph);
		i += 2 * (m + graph.duplicates);

		s = Number.parseInt(input[i]);
		// console.log("i= " + i);
		// console.log("graph.duplicates= " + graph.duplicates);
		// console.log("graph.length= " + m);
		// console.log(graph);
		console.log("s= " + s);
		console.log(graph);
		// BFS(graph, s, weight, n);

		graph = {};
		i++;
		q--;
		console.log();
	}
}

processData(__WEBPACK_IMPORTED_MODULE_0__data1_js__["a" /* input */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const input = 
`2
4 2
1 2
1 3
1
3 1
2 3
2`;
/* harmony export (immutable) */ __webpack_exports__["a"] = input;


/***/ })
/******/ ]);