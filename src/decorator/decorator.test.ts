import { Archer, TitleStrong, TitleAgile, TitleInfire } from "./decorator";

test("decorate archer", () => {
  const archer = new Archer("Frank");
  expect(archer.attack()).toBe("attack by Frank");

  const sArcher = new TitleStrong(archer);
  expect(sArcher.attack()).toBe("strong attack by Frank");

  const aArcher = new TitleAgile(sArcher);
  expect(aArcher.attack()).toBe("agile strong attack by Frank");
  expect(aArcher.useFlash()).toBe("use flash");

  const fArcher = new TitleInfire(sArcher);
  expect(fArcher.attack()).toBe("infire strong attack by Frank");
  expect(fArcher.usefireball()).toBe("use fireball");

  const ssArcher = new TitleStrong(sArcher);
  expect(ssArcher.attack()).toBe("strong strong attack by Frank");
});
