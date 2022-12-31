interface Adventurer {
  getType(): string;
}

class Archer implements Adventurer {
  getType(): string {
    return this.constructor.name;
  }
}

class Warrior implements Adventurer {
  getType(): string {
    return this.constructor.name;
  }
}

// simple factory pattern
class TrainingCamp {
  static trainAdventurer(type: string): Adventurer | void {
    const typeCollation: Map<string, Adventurer> = new Map([
      ["archer", new Archer()],
      ["warrior", new Warrior()],
    ]);
    if (!typeCollation.has(type)) return;
    return typeCollation.get(type);
  }
}

export { TrainingCamp };
