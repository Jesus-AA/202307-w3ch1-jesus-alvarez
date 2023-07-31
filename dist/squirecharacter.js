import { Character } from "./character.js";
export class SquireCharacter extends Character {
    quote;
    master;
    loyalty;
    type;
    constructor(name, family, age, condition, master, loyalty) {
        super(name, family, age, condition);
        this.type = 'Squire';
        this.quote = "Im a loser!";
        this.master = master;
        this.loyalty = loyalty;
    }
}
