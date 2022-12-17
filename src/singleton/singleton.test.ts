import { SingletonGreed, Singleton } from "./singleton";

test("get the same instance from greed singleton", () => {
  const s1 = SingletonGreed.getInstance();
  const s2 = SingletonGreed.getInstance();

  expect(s1 === s2).toBe(true);
});

test("get the same instance from singleton", () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  expect(s1 === s2).toBe(true);
});

test("get same instance from singleton", async () => {
  const s1 = new Singleton();
  const s2 = new Singleton();

  expect(s1 === s2).toBe(false);
});

test("singleton instance is not undefined", () => {
  expect(Singleton.getInstance()).toBeDefined;
});
