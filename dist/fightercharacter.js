import { Character } from "./character.js";
export class FighterCharacter extends Character {
    quote;
    weapon;
    dexterity;
    type;
    constructor(name, family, age, condition, weapon, dexterity) {
        super(name, family, age, condition);
        this.type = 'Fighter';
        this.quote = 'Hit first, ask later!';
        this.weapon = weapon;
        this.dexterity = dexterity;
    }
}
