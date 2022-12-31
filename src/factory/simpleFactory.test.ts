import { TrainingCamp } from "./simpleFactory";

test("get archer from training camp", () => {
  const newArcher = TrainingCamp.trainAdventurer("archer");
  if (!newArcher) return;
  expect(newArcher.getType()).toBe("Archer");
});

test("get warrior from training camp", () => {
  const newWarrior = TrainingCamp.trainAdventurer("warrior");
  if (!newWarrior) return;
  expect(newWarrior.getType()).toBe("Warrior");
});

test("get magician from training camp", () => {
  const newMagician = TrainingCamp.trainAdventurer("magician");
  expect(newMagician).toBeNull;
});
