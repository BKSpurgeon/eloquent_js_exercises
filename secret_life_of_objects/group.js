class Group {

	constructor(){
		this.array = [];
	}

	add(value){
		let indexPosition = this.array.indexOf(value);
		if (indexPosition < 0){
			this.array.push(value)
		}
	}

	remove(value){
		this.array = this.array.filter(v => v !== value);
	}

	has(value){
		let indexPosition = this.array.indexOf(value);

		if (indexPosition < 0)
		{
			return false;
		}	
		else
		{
			return true;
		}
	}

	static from(array){
		let g = new Group();

		for (var i = array.length - 1; i >= 0; i--) {
			g.add(array[i]);
		}

		return g;
	}

	[Symbol.iterator]() {
		return new GroupIterator(this);
	}
}


class GroupIterator{
	constructor(group){
		this.group = group;
		this. i = 0;
	}

	next(){
		if (this.i == this.group.array.length) {
			return {done: true};
		}
		else
		{
			let result = { done: false, value: this.group.array[this.i]};
			this.i++;
			return result;
		}
	}
}

module.exports ={ Group, GroupIterator}
