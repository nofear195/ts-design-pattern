// mediator

interface Mediator {
  send(message: string, from: string, to: Messager): string[];

  sendToAll(from: string, message: string): string[];
}

class MessageMediator implements Mediator {
  private static vipList: VipUser[] = [];
  private static userList: CommonUser[] = [];

  static joinChat(messager: Messager): void {
    if (messager.constructor.name === "VipUser") {
      this.vipList.push(messager);
    } else {
      this.userList.push(messager);
    }
  }

  send(message: string, from: string, to: Messager): string[] {
    const sendResult: string[] = [];
    sendResult.push("message",message,"from", from,"to");
    MessageMediator.vipList.forEach((item) => {
      if (item.getName() === from) {
        sendResult.push(to.getName());
      }
    });

    MessageMediator.userList.forEach((item) => {
      if (item.getName() === from) {
        sendResult.push(to.getName());
      }
    });
    return sendResult;
  }
  sendToAll(message: string, from: string): string[] {
    const sendResult: string[] = [];
    sendResult.push("message",message,"from", from,"to");
    MessageMediator.vipList.forEach((item) => {
      if (item.getName() !== from) {
        sendResult.push(item.getName());
      }
    });

    MessageMediator.userList.forEach((item) => {
      if (item.getName() !== from) {
        sendResult.push(item.getName());
      }
    });
    return sendResult;
  }
}

// colleague

abstract class Messager {
  private name: string;
  public static mediator: Mediator = new MessageMediator();

  constructor(name: string) {
    this.name = name;
  }

  send(message: string, to: Messager): string[] {
    return Messager.mediator.send(message, this.name, to);
  }

  sendToAll(message: string): string[] {
    return Messager.mediator.sendToAll(message,this.name);
  }

  getName(): string {
    return this.name;
  }
}

// concrete colleague

class CommonUser extends Messager {
  constructor(name: string) {
    super(name);
  }

  sendToAll(message: string): string[] {
    return [`${message} not allowed`];
  }
}

class VipUser extends Messager {
  constructor(name: string) {
    super(name);
  }
}

export { MessageMediator, VipUser, CommonUser };
