// if we are iterating over an objects properties
// this includes the object's prototype properties.
// to avoid this, then we should use a map.


let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(map.hasOwnProperty("one"));
// → true


// We can get the prototype of the map object
map.__proto__.hasOwnProperty.call(map, "one")

// that object will have the hasOwnProperty method available to it.
// but we also want it to apply to the map object, so that the "this" applies
// to the map object.

// the answer suggests an alternate approach

Object.prototype.hasOwnProperty.call(map, "one")