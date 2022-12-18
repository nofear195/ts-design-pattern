// adaptee
interface Archer {
  shot(): string;
}
class NormalArcher implements Archer {
  shot(): string {
    return "shot arrow";
  }
}

// adapter

interface Magician {
  cast(): string;
}

class Adapter implements Magician {
  private archer: Archer;

  constructor(archer: Archer) {
    this.archer = archer;
  }
  cast(): string {
    return this.archer.shot();
  }
}

export { NormalArcher, Adapter };
