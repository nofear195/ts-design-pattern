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

abstract class Adventurer {
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

class Archer extends Adventurer {}
class Warrior extends Adventurer {}

interface TrainingCamp {
  trainAdventurer(): Adventurer;
}

class ArcherTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    const archer: Archer = new Archer();
    const factory: EquipFactory = new ArcherEquipFactory();

    archer.setWeapon(factory.productWeapon());
    archer.setClothes(factory.productArmor());
    return archer;
  }
}

class WarriorTrainingCamp implements TrainingCamp {
  trainAdventurer(): Adventurer {
    const warrior: Warrior = new Warrior();
    const factory: EquipFactory = new WarriorEquipFactory();

    warrior.setWeapon(factory.productWeapon());
    warrior.setClothes(factory.productArmor());
    return warrior;
  }
}

export{ArcherEquipFactory,WarriorEquipFactory,ArcherTrainingCamp,WarriorTrainingCamp};