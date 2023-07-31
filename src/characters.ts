import { AdviserCharacter } from "./advisercharacter.js";
import { FighterCharacter } from "./fightercharacter.js";
import { KingCharacter } from "./kingcharacter.js";
import { SquireCharacter } from "./squirecharacter.js";

const charactersGoT = [];

const kingJoffrey = new KingCharacter('Joffrey', 'Baratheon', 14, true, 2)
const fighterJamie = new FighterCharacter('Jaime', 'Lannister', 34, true, 'Sword', 10)
const fighterDaenerys = new FighterCharacter('Daenerys', 'Targaryen', 24, true, 'Sword', 10)
const adviserTyrion = new AdviserCharacter('Tyrion', 'Lannister', 40, true, 'Daenerys')
const squireBronn = new SquireCharacter('Bronn', 'Unknown', 50, true, 'Jaime', 8)

charactersGoT.push(kingJoffrey, fighterJamie, fighterDaenerys, adviserTyrion, squireBronn)
