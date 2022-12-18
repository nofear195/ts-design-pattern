import { Association, Archer, Warrior, Magician } from "./observer";

test("Association send task", () => {
  const archer = new Archer("aaa");
  const warrior = new Warrior("www");
  const magician = new Magician("mmm");

  const association = new Association();
  association.add(archer);
  association.add(warrior);
  association.add(magician);

  const noramlTaskResult = association.sendTask("noraml task");
  expect(noramlTaskResult).toStrictEqual([
    "aaa get noraml task",
    "www get noraml task",
    "mmm get noraml task",
  ]);

  const hardTaskResult = association.sendTask("hard task");
  expect(hardTaskResult).toStrictEqual([
    "aaa get hard task",
    "reject",
    "mmm get hard task",
  ]);

  const easyTaskResult = association.sendTask("easy task");
  expect(easyTaskResult).toStrictEqual([
    "aaa get easy task",
    "www get easy task",
    "reject",
  ]);
});

test("remove adventurer from association", () => {
  const archer = new Archer("aaa");
  const warrior = new Warrior("www");

  const association = new Association();
  association.add(archer);
  association.add(warrior);

  association.remove(archer);

  expect(association.getAdventurerNumber()).toBe(1);
});
