class PGroup{
	constructor(array = []){
		this._array = array;
	}

	static get empty() {return new PGroup();}
	
	add(item)
	{
		if (this._array.indexOf(item) < 0) 
		{
			return new PGroup(this._array.concat(item));
		}
		else
		{
			return new PGroup(this._array);
		}
	}

	delete(item){
		if (this._array.indexOf(item) < 0)
		{ // i.e. we don't have the item
			return new PGroup(this._array);
		}
		else
		{
			let new_array = this._array.splice(this._array.indexOf(item), 1)
			return new PGroup(new_array);
		}
	}

	has(item){
		if (this._array.indexOf(item) > 0) 
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	get array(){
		return this._array;
	}
}

module.exports = {PGroup}