abstract class Chef {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  // visitor
  abstract accept(visitor: Visitor): string;
}

class SuperChef extends Chef {
  constructor(name: string) {
    super(name);
  }
  accept(visitor: Visitor): string {
    return visitor.cook(this);
  }
}

class DarkChef extends Chef {
  constructor(name: string) {
    super(name);
  }
  accept(visitor: Visitor): string {
    return visitor.cook(this);
  }
}

class ChefGroup {
  private list: Chef[] = [];
  join(chef: Chef): void {
    this.list.push(chef);
  }
  leave(name:string): void {
    this.list = this.list.filter((item) => item.getName() !== name);
  }
  topic(visitor: Visitor): string {
    let result = "";
    this.list.forEach((item) => (result +=item.accept(visitor)));

    return result;
  }
}

interface Visitor {
  cook(superChef: SuperChef): string;
  cook(darkChef: DarkChef): string;
}

class VisitorTofu implements Visitor {
  cook(superChef: SuperChef): string;
  cook(darkChef: DarkChef): string;
  cook(chef: SuperChef | DarkChef): string {
    if (chef instanceof SuperChef) {
      return `${chef.getName()}: cook super tofu;`;
    }
    if (chef instanceof DarkChef) {
      return `${chef.getName()}: cook dark tofu;`;
    }
  }
}

class VisitorNoodle implements Visitor {
  cook(superChef: SuperChef): string;
  cook(darkChef: DarkChef): string;
  cook(chef: SuperChef | DarkChef): string {
    if (chef instanceof SuperChef) {
      return `${chef.getName()}: cook super noodle;`;
    }
    if (chef instanceof DarkChef) {
      return `${chef.getName()}: cook dark noodle;`;
    }
  }
}

export { ChefGroup, SuperChef, DarkChef, VisitorTofu, VisitorNoodle };
