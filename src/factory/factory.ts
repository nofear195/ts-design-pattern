interface Adventurer {
  getType(): string;
}

class Archer implements Adventurer {
  getType(): string {
    return this.constructor.name;
  }
}

class Warrior implements Adventurer {
  getType(): string {
    return this.constructor.name;
  }
}

// simple factory pattern
class TrainingCamp {
  static trainAdventurer(type: string): Adventurer | undefined {
    const typeCollation: Map<string, Adventurer> = new Map([
      ["archer", new Archer()],
      ["warrior", new Warrior()],
    ]);
    return typeCollation.get(type);
  }
}

// factory pattern

interface TrainingCamp {
  trainAdventurer(): Adventurer;
}

class ArcherTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    return new Archer();
  }
}

class WarriorTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    return new Warrior();
  }
}

// abstract factory pattern

abstract class Clothes {
  protected defense: number;

  getDefense(): number {
    return this.defense;
  }
  setDefense(val: number): void {
    this.defense = val;
  }
}
class Armor extends Clothes {}
class Leather extends Clothes {}

abstract class Weapon {
  protected attack: number;
  protected range: number;

  getAttack(): number {
    return this.attack;
  }
  setAttack(val: number): void {
    this.attack = val;
  }
  getRange(): number {
    return this.range;
  }
  setRange(val: number): void {
    this.range = val;
  }
}

class LongSword extends Weapon {}
class Bow extends Weapon {}

interface EquipFactory {
  productArmor(): Clothes;
  productWeapon(): Weapon;
}

class ArcherEquipFactory implements EquipFactory {
  productArmor(): Clothes {
    const product: Leather = new Leather();
    product.setDefense(5);
    return product;
  }
  productWeapon(): Weapon {
    const product: Bow = new Bow();
    product.setAttack(10);
    product.setRange(10);
    return product;
  }
}

class WarriorEquipFactory implements EquipFactory {
  productArmor(): Clothes {
    const product: Armor = new Armor();
    product.setDefense(10);
    return product;
  }
  productWeapon(): Weapon {
    const product: LongSword = new LongSword();
    product.setAttack(5);
    product.setRange(1);
    return product;
  }
}

abstract class AbstractAdventurer {
  protected weapon: Weapon;
  protected clothes: Clothes;

  display(): string {
    return `${this.clothes.getDefense()},${this.weapon.getAttack()},${this.weapon.getRange()}`;
  }

  getWeapon(): Weapon {
    return this.weapon;
  }

  setWeapon(weapon: Weapon) {
    this.weapon = weapon;
  }

  getClothes(): Clothes {
    return this.clothes;
  }

  setClothes(clothes: Clothes) {
    this.clothes = clothes;
  }
}

class AbstractArcher extends AbstractAdventurer {}
class AbstractWarrior extends AbstractAdventurer {}

interface AbstractTrainingCamp {
  trainAdventurer(): AbstractAdventurer;
}

class AbstractArcherTrainingCamp implements AbstractTrainingCamp {
  trainAdventurer(): AbstractAdventurer {
    const archer: AbstractArcher = new AbstractArcher();
    const factory: EquipFactory = new ArcherEquipFactory();

    archer.setWeapon(factory.productWeapon());
    archer.setClothes(factory.productArmor());
    return archer;
  }
}

class AbstractWarriorTrainingCamp implements AbstractTrainingCamp {
  trainAdventurer(): AbstractAdventurer {
    const warrior: AbstractWarrior = new AbstractWarrior();
    const factory: EquipFactory = new WarriorEquipFactory();

    warrior.setWeapon(factory.productWeapon());
    warrior.setClothes(factory.productArmor());
    return warrior;
  }
}

export {
  Adventurer,
  TrainingCamp,
  ArcherTrainingCamp,
  WarriorTrainingCamp,
  ArcherEquipFactory,
  WarriorEquipFactory,
  AbstractArcherTrainingCamp,
  AbstractWarriorTrainingCamp,
};
