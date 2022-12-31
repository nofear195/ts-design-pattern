import {
  ArcherEquipFactory,
  WarriorEquipFactory,
  ArcherTrainingCamp,
  WarriorTrainingCamp,
} from "./abstractFactory";

test("get archer equipment factory result", () => {
  const equipFactory = new ArcherEquipFactory();
  const archerLeather = equipFactory.productArmor();
  const archerBow = equipFactory.productWeapon();

  expect(archerLeather.getDefense()).toEqual(5);
  expect(archerBow.getAttack()).toEqual(10);
  expect(archerBow.getRange()).toEqual(10);
});

test("get warrior equipment factory result", () => {
  const equipFactory = new WarriorEquipFactory();
  const warriorArmor = equipFactory.productArmor();
  const warriorLongSord = equipFactory.productWeapon();

  expect(warriorArmor.getDefense()).toEqual(10);
  expect(warriorLongSord.getAttack()).toEqual(5);
  expect(warriorLongSord.getRange()).toEqual(1);
});

test("get archer from ArcherTrainingCamp", () => {
  const trainingCamp = new ArcherTrainingCamp();
  const newArcher = trainingCamp.trainAdventurer();

  expect(newArcher.getClothes().getDefense()).toEqual(5);
  expect(newArcher.getWeapon().getAttack()).toEqual(10);
  expect(newArcher.getWeapon().getRange()).toEqual(10);

  expect(newArcher.display()).toBe(`5,10,10`);
});

test("get warrior from WarriorTrainingCamp", () => {
  const trainingCamp = new WarriorTrainingCamp();
  const newWarrior = trainingCamp.trainAdventurer();

  expect(newWarrior.getClothes().getDefense()).toEqual(10);
  expect(newWarrior.getWeapon().getAttack()).toEqual(5);
  expect(newWarrior.getWeapon().getRange()).toEqual(1);

  expect(newWarrior.display()).toBe(`10,5,1`);
});
