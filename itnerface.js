class Interface {
  constructor(inter){
    this.inter = inter;
  }
}
Object.prototype.implements = function(_interface){
  if(!(_interface instanceof Interface)) throw new Error("You cannot implement a non-interface.")
  let props = _interface.inter;
  let keys = Object.keys(this);
  for(let prop of Object.entries(props)){
    if(!keys.includes(prop[0])){
      if(!prop[1].value)
      throw new Error(`Expected property ${prop[0]}, but not found.`);
      else this[prop[0]] = prop[1].value;
    } 
    else if(prop[1].type){
      if(prop[1].type !== typeof this[prop[0]]){
      if(!prop[1].value) throw new Error(`Expected property ${prop[0]} to be of type ${prop[1].type}.`);
      else this[prop[0]] = prop[1].value;
      } 
    }
  }
}
