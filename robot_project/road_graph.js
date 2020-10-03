const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];

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

const roadGraph = buildGraph(roads);


class Village{
	constructor(place, parcels){
		this.place = place;
		this.parcels = parcels;
	}

	move(destination){
		// if there is no road from the current place to the destination
		// return the current village instances
		if (!roadGraph[this.place].includes(destination))
		{ 
			return this;
		}
		else
		{
			
		}
	}
}

module.exports = {roadGraph, Village }