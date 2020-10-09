import {bigOak} from "./crow-tech";

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});


function storage(nest, name){
	return new Promise(resolve => {
		nest.readStorage(name, result => { resolve(result) } )
	})
}

function x(a, b){
	return new Promise(resolve => function(){resolve()} )
}

x(a,b)
	.then(value => console.log("Got", value))