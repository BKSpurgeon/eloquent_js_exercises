const {withBoxUnlocked, box} = require('./box');


test('withBoxUnlocked does not throw errors', () => {	
	let testFunction = function(){
		console.log("test function")
	}

	expect(() => {withBoxUnlocked(testFunction)}
		).not.toThrowError()	
});


test('withBoxUnlocked does not throw - when it should throw', () => {	
	let testFunction = function(){
		box.content.push("gold piece");
	}

	expect(() => {withBoxUnlocked(testFunction)}
		).not.toThrowError()	
});


test('withBoxUnlocked does not throw - when we throw an error', () => {
	const testFunction = function() {
	    throw new Error("Pirates on the horizon! Abort!");
	  }	

	expect(() => {withBoxUnlocked(testFunction)}).not.toThrowError()		
});


test('box is always locked', () => {
	const testFunction = function() {
	    throw new Error("Pirates on the horizon! Abort!");
	  }	
	withBoxUnlocked(testFunction);

	expect(box.locked).toEqual(true);		
});

test('box returns unlocked if it begins unlocked', () => {
	const testFunction = function() {
	    throw new Error("Pirates on the horizon! Abort!");
	  }	

	box.unlock();
	withBoxUnlocked(testFunction);
	
	expect(box.locked).toEqual(false);		
});

/*
expect(() => {
		withBoxUnlocked(testFunction);
		return box.locked;
	}).toEqual(true)

	*/



