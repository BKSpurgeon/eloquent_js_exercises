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
			// [{place: "Post Office", address: "Alice's House"}]

			// Step 1
			//   Current place: at the library
			//   Destination: the pool
			//   Result: no parcels picked up or dropped off


			// Step 2
			//    Current place: the pool
			//    Destination: the post office.
			//    Result: no parcels picked up or dropped off


			// Step 3
			//    Current place: the post office
			//    Next desination: bob's garden
			//    Result: change the current location parcel's where: parcel's current place === this.place to the new destination
			//    Remove: Any parcels where the address matches the current place.


			let new_parcels  =  this.parcels.map(p => {
				if (p.place === this.place) 
				{ 
					return {place: destination, address: p.address}
				}
				else
				{
					return p
				}
			}).filter(p => p.address != this.place)

			return new Village(destination, new_parcels);
			
		}
	}
}

module.exports = {roadGraph, Village }