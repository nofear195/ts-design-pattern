import Warrior from "./state";

test("warrior go adventure", () => {
  const warrior = new Warrior();
  warrior.move();

  expect(warrior.getHp()).toBe(100);
  expect(warrior.getStateName()).toBe("NormalState");

  warrior.getDamage(40);
  expect(warrior.getHp()).toBe(60);
  warrior.move();
  expect(warrior.getStateName()).toBe("FuryState");

  warrior.heal(20);
  expect(warrior.getHp()).toBe(80);
  warrior.move();
  expect(warrior.getStateName()).toBe("NormalState");

  warrior.getDamage(60);
  expect(warrior.getHp()).toBe(20);
  warrior.move();
  expect(warrior.getStateName()).toBe("DesperateState");

  warrior.heal(30);
  expect(warrior.getHp()).toBe(50);
  warrior.move();
  expect(warrior.getStateName()).toBe("FuryState");

  warrior.getDamage(10000);
  expect(warrior.getHp()).toBe(0);
  warrior.move();
  expect(warrior.getStateName()).toBe("UnableState");

  warrior.heal(999);
  expect(warrior.getHp()).toBe(100);
  expect(warrior.getStateName()).toBe("UnableState");
});
