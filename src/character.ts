export class Character {
  name;
  family;
  age;
  condition;
  series;
 

  constructor(name: string, family: string, age: number, condition: boolean){
    this.name = name;
    this.family = family;
    this.age = age;
    this.condition = condition;
    this.series = 'Game of Thrones'
    
  }
};
