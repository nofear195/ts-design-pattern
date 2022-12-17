import { NormalAttack, UseSkill, UseItem, Adventurer } from "./strategy";

test("switch different strategy", () => {
  const newAdventurer = new Adventurer();

  expect(newAdventurer.attack()).toBe("NormalAttack");

  newAdventurer.choiseStrategy(new NormalAttack());
  expect(newAdventurer.attack()).toBe("NormalAttack");

  newAdventurer.choiseStrategy(new UseSkill());
  expect(newAdventurer.attack()).toBe("UseSkill");

  newAdventurer.choiseStrategy(new UseItem());
  expect(newAdventurer.attack()).toBe("UseItem");
});
