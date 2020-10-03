class Village{
	constructor(place, parcels){
		this.place = place;
		this.parcels = parcels;
	}

	move(destination){
		// we need to pick up any parcels at the destination
		// and also drop off any parcels here than need dropping off.

		// if the destination is exactly where we are, then return the 
		// current instance
		if (destination === this.place)
		{ 
			return this;
		}
	}
}

module.exports = Village