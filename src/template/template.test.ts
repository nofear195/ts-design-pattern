import { Archer, EasyMaze, DifficultMaze } from "./template";

test("archer go adventure", () => {
  let archer = new Archer();
  const easyMaze = new EasyMaze();
  const difficultMaze = new DifficultMaze();

  expect(archer.getLevel()).toBe(1);

  archer = difficultMaze.adventure(archer);
  expect(archer.getLevel()).toBe(1);

  archer = easyMaze.adventure(archer);
  expect(archer.getLevel()).toBe(51);

  archer = difficultMaze.adventure(archer);
  expect(archer.getLevel()).toBe(101);
});
