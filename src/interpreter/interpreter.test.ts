import {
  Context,
  Expression,
  UpExpression,
  DownExpression,
} from "./interpreter";

test("interperter number in string", () => {
  let ex: Expression;
  const context = new Context();
  context.setText("A3h41 B567k");

  const splitText = context.getText().split(" ");

  let result: number[] = [];
  splitText.forEach((item) => {
    if (item.charAt(0) === "A") {
      ex = new UpExpression();
    } else {
      ex = new DownExpression();
    }
    result = [...result, ...ex.interpret(item)];
  });

  expect(result).toStrictEqual([6, 0, 8, 2, 2.5, 3, 3.5, 0]);
});
