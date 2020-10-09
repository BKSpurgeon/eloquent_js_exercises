function storage(nest, name) {
  return new Promise(function(resolve)
  {
    nest.readStorage(name, function(result){
    										resolve(result)
    										}
    				);
  });
}



/*
const p = new Promise((resolve, reject) => {
			if ((() => Math.random() >= 0.5)()) {
				resolve("success")
			}	
			else{
				rejectionHandler("rejection")
			}	
		})	

function successHandler(value){
	console.log(value.toString())
}

function rejectionHandler(value){
	console.log(value.toString())
}

p.then(successHandler)
 .catch(rejectionHandler)

*/
// Promise takes in a success handler, and it also takes in a rejection handler.
// We have to work out when the success and rejection occur.
