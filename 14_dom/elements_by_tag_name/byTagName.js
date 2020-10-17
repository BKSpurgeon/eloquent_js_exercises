

function byTagName(node, tagName){
	let childNodes = [];

	for(let child of node.childNodes){		
		if (child.nodeName === tagName.toUpperCase()){
			childNodes.push(child);
		}		

		if (child.hasChildNodes){
			let childNodeArray = byTagName(child, tagName);

			childNodes.push(...childNodeArray);
		}
	}

	

	return childNodes;
}





module.exports = byTagName;