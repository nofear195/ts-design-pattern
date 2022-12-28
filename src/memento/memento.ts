// originator

class GameRole {
  private hp = 100;
  private atk = 100;
  private def = 100;
  private name = "boss name";

  save(): RoleStateMemo {
    return new RoleStateMemo(this.hp, this.atk, this.def);
  }

  fight(): void {
    this.hp = 30;
  }

  stateDisplay(): string {
    return `name:${this.name},hp:${this.hp},atk:${this.atk},def:${this.def}`;
  }

  load(memo: RoleStateMemo): void {
    this.hp = memo.getHp();
    this.atk = memo.getAtk();
    this.def = memo.getDef();
  }
  setAtk(atk: number): void {
    this.atk = atk;
  }
}

// memento

class RoleStateMemo {
  private hp: number;
  private atk: number;
  private def: number;

  constructor(hp: number, atk: number, def: number) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
  }

  getHp(): number {
    return this.hp;
  }
  getAtk(): number {
    return this.atk;
  }

  getDef(): number {
    return this.def;
  }
}

// memento care taker

class RoleStateCareTaker {
  saves: RoleStateMemo[] = [];

  getSave(): RoleStateMemo {
    return this.saves[0];
  }

  setSave(memo: RoleStateMemo): void {
    this.saves[0] = memo;
  }
}

export { GameRole, RoleStateCareTaker };
