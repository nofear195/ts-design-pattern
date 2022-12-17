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

class TrainingCamp {
  static trainAdventurer(type: string): Adventurer|undefined {
    const typeCollation: Map<string, Adventurer> = new Map([
      ["archer", new Archer()],
      ["warrior", new Warrior()],
    ]);
    return typeCollation.get(type);
  }
}

export { Adventurer, Archer, Warrior, TrainingCamp };
