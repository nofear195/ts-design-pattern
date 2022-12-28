import { GameRole, RoleStateCareTaker } from "./memento";

test("check boss state", () => {
  const boss = new GameRole();
  const memo = new RoleStateCareTaker();
  let stateDisplay = "";
  stateDisplay = boss.stateDisplay();
  expect(stateDisplay).toBe("name:boss name,hp:100,atk:100,def:100");

  boss.setAtk(60);
  memo.setSave(boss.save());
  stateDisplay = boss.stateDisplay();
  expect(stateDisplay).toBe("name:boss name,hp:100,atk:60,def:100");

  boss.fight();
  stateDisplay = boss.stateDisplay();
  expect(stateDisplay).toBe("name:boss name,hp:30,atk:60,def:100");

  boss.load(memo.getSave());
  stateDisplay = boss.stateDisplay();
  expect(stateDisplay).toBe("name:boss name,hp:100,atk:60,def:100");
});
