import { ArcherTrainingCamp, WarriorTrainingCamp } from "./factory";

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
