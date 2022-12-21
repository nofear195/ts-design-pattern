import {
  RealGameDisplay,
  ProxyGameDisplay,
  PersonJack,
  ProxyPersonJack,
} from "./proxy";

test("dynamic proxy", () => {
  const realGameDisplay = new RealGameDisplay();

  expect(realGameDisplay.display()).toBe("RealGameDisplay");

  const proxyGameDisplay = new ProxyGameDisplay(realGameDisplay);

  expect(proxyGameDisplay.display()).toBe("ProxyGameDisplay RealGameDisplay");
});

test("protect proxy", () => {
  const jack = new PersonJack();

  jack.setLikeCount(10);
  jack.setName("jack");

  expect(jack.getLikeCount()).toBe(10);
  expect(jack.getName()).toBe("jack");

  const proxy = new ProxyPersonJack(jack);

  proxy.setLikeCount(1000);
  proxy.setName("proxyjack");
  expect(proxy.getLikeCount()).toBe(10);
  expect(proxy.getName()).toBe("proxyjack");
});
