import { PersonJack, ProtectProxy } from "./protectProxy";

test("protect proxy", () => {
  const jack = new PersonJack();

  jack.setLikeCount(10);
  jack.setName("jack");

  expect(jack.getLikeCount()).toBe(10);
  expect(jack.getName()).toBe("jack");

  const proxy = new ProtectProxy(jack);

  proxy.setLikeCount(1000);
  proxy.setName("proxyjack");
  expect(proxy.getLikeCount()).toBe(10);
  expect(proxy.getName()).toBe("proxyjack");
});
