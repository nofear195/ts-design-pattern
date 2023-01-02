import { RealGameDisplay, DynamicProxy } from "./dynamicProxy";

test("dynamic proxy", () => {
  const realGameDisplay = new RealGameDisplay();

  expect(realGameDisplay.display()).toBe("RealGameDisplay");

  const proxyGameDisplay = new DynamicProxy(realGameDisplay);

  expect(proxyGameDisplay.display()).toBe("DynamicProxy RealGameDisplay");
});