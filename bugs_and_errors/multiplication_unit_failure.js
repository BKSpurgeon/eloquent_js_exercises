class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a,b){

	for (;;) {
		try
		{
			return primitiveMultiply(a,b)
			break;
		}
		catch (e)
		{
			if (e instanceof MultiplicatorUnitFailure) 
			{
				
			}
			else
			{
				throw e;
			}
		}

	}
	
}

module.exports = {reliableMultiply}