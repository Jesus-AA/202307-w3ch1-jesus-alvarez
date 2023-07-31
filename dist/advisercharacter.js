import { Character } from "./character.js";
export class AdviserCharacter extends Character {
    quote;
    advisee;
    type;
    constructor(name, family, age, condition, advisee) {
        super(name, family, age, condition);
        this.type = 'Advicer';
        this.quote = 'I think Im going to die very soon and I dont know why...';
        this.advisee = advisee;
    }
}
