function deepEqual(obj, obj2){
	if (obj === obj2) {
		return true;
	}
	else
	{
		if (typeof obj == "object" && obj != null && typeof obj2 == "object" && obj2 != null  ){
			if (obj === null && obj2 !== null || obj !== null && obj2 === null) {
				return false
			}
			else
			{	
				if (Object.keys(obj).length === Object.keys(obj2).length) 
				{						

					for(let key in obj){
						if (key in obj2) {						
							if (!deepEqual(obj[key], obj2[key])) {
								return false
							}							
						}
						else
						{
							return false
						}
					}

					for(let key in obj2){
						if (key in obj) {
							if (!deepEqual(obj[key], obj2[key])) {
								return false
							}
						}
						else{
							return false
						}
					}	

					return true				
				}	
				else
				{
					return false
				}
			}
		} 
		else
		{
			return false
		}
	}	
}

module.exports = deepEqual;