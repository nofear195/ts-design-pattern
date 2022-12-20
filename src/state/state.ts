// context , background

class Warrior {
  private hp: number;
  private state: State;

  constructor() {
    this.hp = 100;
    this.state = new NormalState();
  }
  getHp(): number {
    return this.hp;
  }
  getStateName(): string {
    return this.state.constructor.name;
  }

  heal(heal: number): void {
    this.hp += heal;
    if (this.hp > 100) this.hp = 100;
  }

  getDamage(damage: number): void {
    this.hp -= damage;
    if (this.hp < 0) this.hp = 0;
  }

  // let status handle warrior situation

  move(): void {
    this.state.move(this);
  }

  setState(state: State): void {
    this.state = state;
  }
}

interface State {
  move(warrior: Warrior): void;
}

// concrete state

class NormalState implements State {
  move(warrior: Warrior): void {
    const hp = warrior.getHp();
    if (hp < 70) {
      warrior.setState(new FuryState());
      warrior.move();
    }
  }
}

class FuryState implements State {
  move(warrior: Warrior): void {
    const hp = warrior.getHp();
    if (hp > 70) {
      warrior.setState(new NormalState());
      warrior.move();
    }
    if (hp <= 30) {
      warrior.setState(new DesperateState());
      warrior.move();
    }
  }
}

class DesperateState implements State {
  move(warrior: Warrior): void {
    const hp = warrior.getHp();
    if (hp > 30) {
      warrior.setState(new FuryState());
      warrior.move();
    }
    if (hp === 0) {
      warrior.setState(new UnableState());
      warrior.move();
    }
  }
}

class UnableState implements State {
  move(warrior: Warrior): void {
    warrior.getStateName();
  }
}

export default Warrior;
