import { NormalArcher, Adapter } from "./adapter";

test("use adaptee to cast fireball", () => {
  const adapter = new Adapter(new NormalArcher());
  const castResult = adapter.cast();
  expect(castResult).toBe("shot arrow");
});
