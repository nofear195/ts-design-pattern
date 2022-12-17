import { TrainingCamp } from "./simpleFactory";

test("get archer", () => {
  const newArcher = TrainingCamp.trainAdventurer("archer");

  expect(newArcher.getType()).toBe("Archer");
});

test("get warrior", () => {
  const newArcher = TrainingCamp.trainAdventurer("warrior");
  expect(newArcher.getType()).toBe("Warrior");
});

test("get magician", () => {
  const magician = TrainingCamp.trainAdventurer("magician");
  expect(magician).toBeUndefined;
});
