import {Name} from "./yourOwnClass";

class YourName extends Name {
  constructor(name){
    super(name);
  }
}

let yourName = new YourName("neal2");
console.log(yourName.getName());