import { NormalMail, PromptMail, NoRegisterMail, RegisterMail } from "./bridge";

test("build all combination with normal and prompt mail and registro", () => {
  let mailSender = new NormalMail(new NoRegisterMail());
  expect(mailSender.send()).toBe("NormalMail-NoRegisterMail");
  mailSender = new NormalMail(new RegisterMail());
  expect(mailSender.send()).toBe("NormalMail-RegisterMail");
  mailSender = new PromptMail(new NoRegisterMail());
  expect(mailSender.send()).toBe("PromptMail-NoRegisterMail");
  mailSender = new PromptMail(new RegisterMail());
  expect(mailSender.send()).toBe("PromptMail-RegisterMail");
});
