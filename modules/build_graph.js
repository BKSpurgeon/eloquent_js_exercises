function buildGraph(edges){
	let graph = [];
	function addEdge(to, from){
		if (graph[to]){
			graph[to].push(from);
		}
		else{
			graph[to] = [from];
		}
	}

	for (let [from, to] of edges.map(r => r.split("-"))) {
		addEdge(from, to);
		addEdge(to, from);		
	}

	return graph;
}


module.exports = buildGraph

// or perhaps like this
// exports.buildGraph = buildGraph