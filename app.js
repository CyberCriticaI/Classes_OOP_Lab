class Pokemon {
    constructor(name, type, hp, attack, defense, speed) {
      this.name = name;
      this.type = type;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.speed = speed;
    }
  
    attackOpponent(opponent) {
      const damage = this.attack - opponent.defense;
      opponent.hp -= damage;
      console.log(`${this.name} attacked ${opponent.name} and dealt ${damage} damage.`);
    }
  }
  
  class Pikachu extends Pokemon {
    name = "Pikachu";
    type = "Electric";
    hp = 100;
    attack = 50;
    defense = 30;
    speed = 70;
  }
  class Charmander extends Pokemon {
    name = "Charmander";
    type = "Fire";
    hp = 100;
    attack = 60;
    defense = 40;
    speed = 50;
  }
  
  const pickachu = new Pikachu();
  const charmander = new Charmander();
  pickachu.attackOpponent(charmander);
  charmander.attackOpponent(pickachu);