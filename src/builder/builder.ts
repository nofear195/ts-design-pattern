// product

abstract class IRobot {
  public form: Form;
  public weapon: Weapon;
  public power: Power;

  setForm(form: Form): void {
    this.form = form;
  }
  setWeapon(weapon: Weapon): void {
    this.weapon = weapon;
  }
  setPower(power: Power): void {
    this.power = power;
  }

  display(): string {
    return `Form: ${this.form.getProperty()}; Weapon: ${this.weapon.getProperty()}; Power: ${this.power.getProperty()}`;
  }
}

// concrete product

class Gundam extends IRobot {}

class Form {
  private formName: string;
  constructor(formName: string) {
    this.formName = formName;
  }
  getProperty(): string {
    return this.formName;
  }
}

class Power {
  private mainPower: string;
  private subPower: string;
  private battery: string;
  constructor(mainPower: string, subPower: string, battery: string) {
    this.mainPower = mainPower;
    this.subPower = subPower;
    this.battery = battery;
  }

  getProperty(): string {
    return `${this.mainPower} ${this.subPower} ${this.battery}`;
  }
}

class Weapon {
  weaponList: string[] = [];
  constructor(weaponList: string[]) {
    this.weaponList = weaponList;
  }
  getProperty(): string {
    return this.weaponList.toString();
  }
}

// abstract builder

abstract class RobotBuilder {
  abstract buildForm(): Form;
  abstract buildPower(): Power;
  abstract buildWeapon(): Weapon;
}

// concrete builder

class GundamBuilder extends RobotBuilder {
  buildForm(): Form {
    return new Form("robot form");
  }

  buildPower(): Power {
    return new Power("main power", "sub power", "battery");
  }

  buildWeapon(): Weapon {
    return new Weapon(["weapon1", "weapon2", "weapon3"]);
  }
}

// director

class Director {
  private builder: RobotBuilder;
  constructor(builder: RobotBuilder) {
    this.builder = builder;
  }

  builderRobot(): IRobot {
    const robot: IRobot = new Gundam();
    robot.setForm(this.builder.buildForm());
    robot.setPower(this.builder.buildPower());
    robot.setWeapon(this.builder.buildWeapon());
    return robot;
  }
}

export { GundamBuilder, Director };
