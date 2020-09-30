class Vector{
  constructor(x,y){
    this._x = x
    this._y = y
  }

  get x(){
    return this._x
  }

  set x(value){
    this._x = value;
  }

  get y(){
    return this._y
  }

  set y(value){
    this._y = value;
  }

  plus(vector){
    return new Vector(vector.x + this.x, vector.y + this.y)
  }

  minus(vector){
    return new Vector(this.x - vector.x, this.y - vector.y)
  }

  get length() {
    return Math.sqrt(( Math.pow(this.x,2) + (Math.pow(this.y, 2))));
  }
}


module.exports = Vector;