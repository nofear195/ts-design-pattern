import { Barkeep, Chef, DrinkOrder, FoodOrder, Waitress } from "./command";

test("client order drink process", () => {
  // only 1 drink in ktichen
  const barkeep = new Barkeep();
  const drinkOrder = new DrinkOrder(barkeep);
  const waitress = new Waitress();

  let orderResult = false;

  orderResult = waitress.setOrder(drinkOrder);
  expect(orderResult).toBeTruthy();

  orderResult = waitress.setOrder(drinkOrder);
  expect(orderResult).toBeFalsy();

  waitress.cancelOrder(drinkOrder);
  waitress.cancelOrder(drinkOrder);
  orderResult = waitress.setOrder(drinkOrder);
  expect(orderResult).toBeTruthy();

  const sendResult = waitress.sendOrderToKitchen();
  expect(sendResult).toStrictEqual(["drink output"]);

  expect(waitress.getOrderListLength()).toBe(0);
});

test("client order food process", () => {
  // only 2 drink in ktichen
  const chef = new Chef();
  const foodOrder = new FoodOrder(chef);
  const waitress = new Waitress();

  let orderResult = false;

  orderResult = waitress.setOrder(foodOrder);
  orderResult = waitress.setOrder(foodOrder);
  expect(orderResult).toBeTruthy();
  orderResult = waitress.setOrder(foodOrder);
  expect(orderResult).toBeFalsy();

  let sendResult: string[] = [];

  sendResult = waitress.sendOrderToKitchen();
  expect(sendResult).toStrictEqual(["food output", "food output"]);
  expect(waitress.getOrderListLength()).toBe(0);

  waitress.setOrder(foodOrder);
  waitress.cancelOrder(foodOrder);
  sendResult = waitress.sendOrderToKitchen();
  expect(sendResult).toStrictEqual([]);
});
