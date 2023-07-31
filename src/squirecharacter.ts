import { Character } from "./character.js";
import { FighterCharacter } from "./fightercharacter.js";

export class SquireCharacter extends Character {
  quote;
  master;
  loyalty;
  type;

  constructor(name: string, family: string, age: number, condition: boolean, master: FighterCharacter, loyalty: number){
    super(name, family, age, condition)
    this.type = 'Squire'
    this.quote = "Im a loser!"
    this.master = master
    this.loyalty = loyalty;
  }
}
