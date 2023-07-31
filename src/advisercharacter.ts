import { Character } from "./character.js";
import { FighterCharacter } from "./fightercharacter.js";

export class AdviserCharacter extends Character {
  quote;
  advisee;
  type;

  constructor(name: string, family: string, age: number, condition: boolean, advisee: FighterCharacter){
    super(name, family, age, condition);
    this.type = 'Advicer'
    this.quote = 'I think Im going to die very soon and I dont know why...'
    this.advisee = advisee
  }
}
