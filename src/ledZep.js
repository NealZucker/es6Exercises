import {Song} from './talkingHead';
class LedZepSong extends Song {

  //edits go into the args of the constructor and super methods below
  constructor(artist, title){
    super(artist, title);
  }
}

//Exercise:
//grab the song class from talkingHead.js using the es6 import method
//Editing only the constructor arguments and super arguments, make the
//code below console.log "title is: black dog by Led Zep"

let blackDog = new LedZepSong("led zeppelin", "black dog");
console.log(blackDog.getTitle());

//Exercise:
//put a "static" method on the ledzepsong subclass. It doesn't matter what it does, but
//prove that it is static method using the console. 