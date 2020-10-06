const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(operation) {
  
  let originalLockedState = box.locked;

  box.unlock();
  try
  {
  	operation();  
  }
  catch(e)
  {

  }

  if (originalLockedState === false) 
  {

  }
  else
  {
  	box.lock();  
  }
}

module.exports = {withBoxUnlocked, box}
