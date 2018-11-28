class Monster {
    constructor(typeofMonster, strength, name) {
        this._typeofMonster = typeofMonster;
        this._strength = strength;
        this._name = name;
    }
    get typeofMonster() {
        return this._typeofMonster;
    }
    
    get strength() {
        return this._strength;
    }

    get name() {
        return this._name;
    }

    MonsterAttack() {
        this._strength += 20;
        console.log("makes the Monster attack!");
    }

}

let Monster1 = new Monster("mermaid", 100, "Maday");

Monster1.MonsterAttack();
console.log(Monster1.name);
console.log(Monster1._typeofMonster);
console.log(Monster1._strength);

class EvolvedMonster extends Monster {

  constructor(typeofMonster, strength, name, speed, weapon) {
      super(typeofMonster, strength, name);
      this._speed = speed;
      this._weapon = weapon;
  }  

}
let Monster2 = new Monster("goblin", 200, "steve" );
Monster2.MonsterAttack

let Monster3 = new EvolvedMonster("cat", 1000,"Islan", 100,"bat");
Monster3.MonsterAttack

let Monster4 = new EvolvedMonster("ghost", 1000, "Betzy", 6000,"hammer");
Monster4.MonsterAttack

console.log(Monster2)

console.log(Monster3)
    
console.log(Monster4)



