interface FightStrategy {
  execute(): string;
}

class NormalAttack implements FightStrategy {
  execute(): string {
    return this.constructor.name;
  }
}

class UseSkill implements FightStrategy {
  execute(): string {
    return this.constructor.name;
  }
}

class UseItem implements FightStrategy {
  execute(): string {
    return this.constructor.name;
  }
}

class Adventurer {
  private fightStrategy: FightStrategy;
  constructor() {
    this.fightStrategy = new NormalAttack();
  }

  attack(): string {
    return this.fightStrategy.execute();
  }
  choiseStrategy(strategy: FightStrategy) {
    this.fightStrategy = strategy;
  }
}

export { NormalAttack, UseSkill, UseItem, Adventurer };
