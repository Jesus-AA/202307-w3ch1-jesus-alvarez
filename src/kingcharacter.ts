import { Character } from "./character.js";

export class KingCharacter extends Character {
  quote;
  regnalyears;
  type;
 
  constructor(name: string, family: string, age: number, condition: boolean, regnalyears: number){
    super(name, family, age, condition);
    this.type = 'King'
    this.quote = "You are all going to die!";
    this.regnalyears = regnalyears;
    
  }
  

}
