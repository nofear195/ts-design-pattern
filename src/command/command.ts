// receiver

interface KitchenWorker {
  finishOrder(): string;
}

class Barkeep implements KitchenWorker {
  finishOrder(): string {
    return "drink output";
  }
}

class Chef implements KitchenWorker {
  finishOrder(): string {
    return "food output";
  }
}

// command

abstract class Order {
  protected receiver: KitchenWorker;
  protected name: string;

  constructor(receiver: KitchenWorker) {
    this.receiver = receiver;
  }

  sendOrder(): string {
    return this.receiver.finishOrder();
  }
  getName(): string {
    return this.name;
  }
}

class DrinkOrder extends Order {
  constructor(receiver: KitchenWorker) {
    super(receiver);
    super.name = this.constructor.name;
  }
}

class FoodOrder extends Order {
  constructor(receiver: KitchenWorker) {
    super(receiver);
    super.name = this.constructor.name;
  }
}

// invoker

class Waitress {
  private drinkQuality = 1;
  private foodQuality = 2;
  private orderList: Order[] = [];

  setOrder(order: Order): boolean {
    if (order.getName() === "DrinkOrder") {
      if (this.drinkQuality === 0) return false;
      this.drinkQuality--;
      this.orderList.push(order);
      return true;
    }
    if (order.getName() === "FoodOrder") {
      if (this.foodQuality === 0) return false;
      this.foodQuality--;
      this.orderList.push(order);
      return true;
    }
  }

  cancelOrder(order: Order): void {
    if (order.getName() === "DrinkOrder") this.drinkQuality++;
    if (order.getName() === "FoodOrder") this.foodQuality++;
    this.orderList = this.orderList.filter((item) => item !== order);
  }

  sendOrderToKitchen(): string[] {
    const result: string[] = [];
    this.orderList.forEach((item) => result.push(item.sendOrder()));
    this.orderList.splice(0);
    return result;
  }
  getOrderListLength(): number {
    return this.orderList.length;
  }
}

export { Barkeep, Chef, DrinkOrder, FoodOrder, Waitress };
