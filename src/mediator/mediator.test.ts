import { MessageMediator, VipUser, CommonUser } from "./mediator";

test("create mediator", () => {
  const jennifer = new VipUser("jennifer");
  const jenny = new VipUser('jenny');
  const frank = new CommonUser("frank");
  const jack = new CommonUser("jack");
  
  MessageMediator.joinChat(jennifer);
  MessageMediator.joinChat(jenny);
  MessageMediator.joinChat(frank);
  MessageMediator.joinChat(jack);

  let result: string[] = [];
  result = jack.sendToAll("jack send all");
  expect(result).toStrictEqual(["jack send all not allowed"]);

  result = jennifer.sendToAll("jennifer message sending");
  expect(result).toStrictEqual([
    "message",
    "jennifer message sending",
    "from",
    "jennifer",
    "to",
    "jenny",
    "frank",
    "jack",
  ]);

  result = jennifer.send('say hi to frank',frank);
  expect(result).toStrictEqual(["message",'say hi to frank','from',"jennifer","to","frank"]);

  result = frank.send('say hi to jennifer',jennifer);
  expect(result).toStrictEqual(["message",'say hi to jennifer','from',"frank","to","jennifer"]);
});
