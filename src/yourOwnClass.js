//create a class-subclass structure and implement it using javascript classes.
//be sure each have at least one method on them.
class Name{
  constructor(name){
    this.name = name;
  }
  getName(){
    return "Your name is " + this.name;
  }
}

let name = new Name("Neal");
console.log(name.getName());

export {Name};