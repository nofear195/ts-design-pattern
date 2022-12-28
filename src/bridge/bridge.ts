abstract class MailSender {
  protected mail: Mail;
  constructor(mail: Mail) {
    this.mail = mail;
  }
  abstract send(): string;
}

class NormalMail extends MailSender {
  constructor(mail: Mail) {
    super(mail);
  }
  send(): string {
    return `${this.constructor.name}-${this.mail.registerState()}`;
  }
}

class PromptMail extends MailSender {
  constructor(mail: Mail) {
    super(mail);
  }
  send(): string {
    return `${this.constructor.name}-${this.mail.registerState()}`;
  }
}

abstract class Mail {
  abstract registerState(): string;
}

class NoRegisterMail extends Mail {
  registerState(): string {
    return this.constructor.name;
  }
}

class RegisterMail extends Mail {
  registerState(): string {
    return this.constructor.name;
  }
}

export { NormalMail, PromptMail, NoRegisterMail, RegisterMail };
