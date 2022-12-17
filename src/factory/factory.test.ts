import {
  TrainingCamp,
  ArcherTrainingCamp,
  WarriorTrainingCamp,
  ArcherEquipFactory,
  WarriorEquipFactory,
  AbstractArcherTrainingCamp,
  AbstractWarriorTrainingCamp,
} from "./factory";

// simple factory pattern
test("get archer from training camp", () => {
  const newArcher = TrainingCamp.trainAdventurer("archer");

  expect(newArcher.getType()).toBe("Archer");
});

test("get warrior from training camp", () => {
  const newWarrior = TrainingCamp.trainAdventurer("warrior");
  expect(newWarrior.getType()).toBe("Warrior");
});

test("get magician from training camp", () => {
  const newMagician = TrainingCamp.trainAdventurer("magician");
  expect(newMagician).toBeUndefined;
});

// factory pattern
test("get archer from archer training camp", () => {
  const trainingCamp = new ArcherTrainingCamp();
  const newArcher = trainingCamp.trainAdventurer();

  expect(newArcher.getType()).toBe("Archer");
});

test("get warrior from warrior training camp", () => {
  const trainingCamp = new WarriorTrainingCamp();
  const newWarrior = trainingCamp.trainAdventurer();

  expect(newWarrior.getType()).toBe("Warrior");
});

// abstract factory pattern

test("get archer equipment factory result",()=>{
  const equipFactory = new ArcherEquipFactory();
  const archerLeather = equipFactory.productArmor();
  const archerBow = equipFactory.productWeapon();

  expect(archerLeather.getDefense()).toEqual(5);
  expect(archerBow.getAttack()).toEqual(10);
  expect(archerBow.getRange()).toEqual(10);
});

test("get warrior equipment factory result",()=>{
  const equipFactory = new WarriorEquipFactory();
  const warriorArmor = equipFactory.productArmor();
  const warriorLongSord = equipFactory.productWeapon();

  expect(warriorArmor.getDefense()).toEqual(10);
  expect(warriorLongSord.getAttack()).toEqual(5);
  expect(warriorLongSord.getRange()).toEqual(1);
});

test("get archer from AbstractArcherTrainingCamp",()=>{
  const trainingCamp = new AbstractArcherTrainingCamp();
  const newArcher = trainingCamp.trainAdventurer();

  expect(newArcher.getClothes().getDefense()).toEqual(5);
  expect(newArcher.getWeapon().getAttack()).toEqual(10);
  expect(newArcher.getWeapon().getRange()).toEqual(10);

  expect(newArcher.display()).toBe(`5,10,10`);
});

test("get warrior from AbstractWarriorTrainingCamp",()=>{
  const trainingCamp = new AbstractWarriorTrainingCamp();
  const newWarrior = trainingCamp.trainAdventurer();

  expect(newWarrior.getClothes().getDefense()).toEqual(10);
  expect(newWarrior.getWeapon().getAttack()).toEqual(5);
  expect(newWarrior.getWeapon().getRange()).toEqual(1);

  expect(newWarrior.display()).toBe(`10,5,1`);
});